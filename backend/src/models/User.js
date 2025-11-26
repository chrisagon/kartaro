/**
 * User Model
 * 
 * Represents an individual user in the system with associated credits and permissions.
 * Extended to support credit management system.
 */

class User {
  constructor(db) {
    this.db = db;
  }

  /**
   * Create a new user with initial credit grant
   * @param {Object} userData - User data
   * @param {string} userData.user_id - Firebase UID
   * @param {string} userData.email - User email
   * @param {string} userData.display_name - Optional display name
   * @returns {Promise<Object>} Created user record
   */
  async create(userData) {
    const { user_id, email, display_name } = userData;
    
    const stmt = this.db.prepare(`
      INSERT INTO users (user_id, email, display_name, credits_balance, created_at, last_activity_at)
      VALUES (?, ?, ?, 250, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `);

    try {
      const result = stmt.run(user_id, email, display_name);
      
      // Create initial credit transaction
      await this.addCreditTransaction(user_id, 'initial_grant', 'system', 250, {
        description: 'Welcome bonus: 50 free credits',
        credits_display: 50
      });

      return this.findById(user_id);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        throw new Error('User already exists');
      }
      throw error;
    }
  }

  /**
   * Find user by ID
   * @param {string} user_id - Firebase UID
   * @returns {Promise<Object|null>} User record or null
   */
  async findById(user_id) {
    const stmt = this.db.prepare(`
      SELECT 
        user_id,
        email,
        display_name,
        credits_balance,
        total_images_generated,
        total_cards_generated,
        total_collections_saved,
        total_pdfs_exported,
        total_credits_spent,
        is_admin,
        created_at,
        last_activity_at
      FROM users 
      WHERE user_id = ?
    `);

    const user = stmt.get(user_id);
    return user || null;
  }

  /**
   * Find user by email
   * @param {string} email - User email
   * @returns {Promise<Object|null>} User record or null
   */
  async findByEmail(email) {
    const stmt = this.db.prepare(`
      SELECT 
        user_id,
        email,
        display_name,
        credits_balance,
        total_images_generated,
        total_cards_generated,
        total_collections_saved,
        total_pdfs_exported,
        total_credits_spent,
        is_admin,
        created_at,
        last_activity_at
      FROM users 
      WHERE email = ?
    `);

    const user = stmt.get(email);
    return user || null;
  }

  /**
   * Update user profile
   * @param {string} user_id - Firebase UID
   * @param {Object} updates - Fields to update
   * @returns {Promise<Object>} Updated user record
   */
  async update(user_id, updates) {
    const allowedFields = ['email', 'display_name', 'is_admin'];
    const updateFields = [];
    const values = [];

    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key) && updates[key] !== undefined) {
        updateFields.push(`${key} = ?`);
        values.push(updates[key]);
      }
    });

    if (updateFields.length === 0) {
      throw new Error('No valid fields to update');
    }

    values.push(user_id);

    const stmt = this.db.prepare(`
      UPDATE users 
      SET ${updateFields.join(', ')}, last_activity_at = CURRENT_TIMESTAMP
      WHERE user_id = ?
    `);

    const result = stmt.run(...values);
    
    if (result.changes === 0) {
      throw new Error('User not found');
    }

    return this.findById(user_id);
  }

  /**
   * Update user credit balance
   * @param {string} user_id - Firebase UID
   * @param {number} new_balance - New credit balance (stored as credits × 5)
   * @returns {Promise<Object>} Updated user record
   */
  async updateCreditBalance(user_id, new_balance) {
    const stmt = this.db.prepare(`
      UPDATE users 
      SET credits_balance = ?, last_activity_at = CURRENT_TIMESTAMP
      WHERE user_id = ?
    `);

    const result = stmt.run(new_balance, user_id);
    
    if (result.changes === 0) {
      throw new Error('User not found');
    }

    return this.findById(user_id);
  }

  /**
   * Increment usage counters
   * @param {string} user_id - Firebase UID
   * @param {Object} counters - Counters to increment
   * @returns {Promise<Object>} Updated user record
   */
  async incrementUsage(user_id, counters) {
    const allowedCounters = [
      'total_images_generated',
      'total_cards_generated', 
      'total_collections_saved',
      'total_pdfs_exported',
      'total_credits_spent'
    ];

    const updateFields = [];
    const values = [];

    Object.keys(counters).forEach(key => {
      if (allowedCounters.includes(key) && counters[key] > 0) {
        updateFields.push(`${key} = ${key} + ?`);
        values.push(counters[key]);
      }
    });

    if (updateFields.length === 0) {
      throw new Error('No valid counters to increment');
    }

    values.push(user_id);

    const stmt = this.db.prepare(`
      UPDATE users 
      SET ${updateFields.join(', ')}, last_activity_at = CURRENT_TIMESTAMP
      WHERE user_id = ?
    `);

    const result = stmt.run(...values);
    
    if (result.changes === 0) {
      throw new Error('User not found');
    }

    return this.findById(user_id);
  }

  /**
   * Check if user exists
   * @param {string} user_id - Firebase UID
   * @returns {Promise<boolean>} True if user exists
   */
  async exists(user_id) {
    const stmt = this.db.prepare('SELECT 1 FROM users WHERE user_id = ?');
    const result = stmt.get(user_id);
    return !!result;
  }

  /**
   * Get user credit balance (display format)
   * @param {string} user_id - Firebase UID
   * @returns {Promise<number>} Credit balance in display format (credits × 0.2)
   */
  async getCreditBalance(user_id) {
    const stmt = this.db.prepare('SELECT credits_balance FROM users WHERE user_id = ?');
    const result = stmt.get(user_id);
    
    if (!result) {
      throw new Error('User not found');
    }

    // Convert from storage format (credits × 5) to display format (credits × 0.2)
    return result.credits_balance / 5;
  }

  /**
   * Add credit transaction for this user
   * @param {string} user_id - Firebase UID
   * @param {string} type - Transaction type
   * @param {string} source - Transaction source
   * @param {number} amount - Amount in storage format (credits × 5)
   * @param {Object} payload - Metadata payload
   * @returns {Promise<string>} Transaction ID
   */
  async addCreditTransaction(user_id, type, source, amount, payload = {}) {
    const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const stmt = this.db.prepare(`
      INSERT INTO credit_transactions (id, user_id, type, source, amount, payload)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(transactionId, user_id, type, source, amount, JSON.stringify(payload));
    return transactionId;
  }

  /**
   * Get user usage statistics
   * @param {string} user_id - Firebase UID
   * @returns {Promise<Object>} Usage statistics
   */
  async getUsageStats(user_id) {
    const stmt = this.db.prepare(`
      SELECT 
        credits_balance,
        total_images_generated,
        total_cards_generated,
        total_collections_saved,
        total_pdfs_exported,
        total_credits_spent,
        is_admin,
        created_at,
        last_activity_at
      FROM users 
      WHERE user_id = ?
    `);

    const user = stmt.get(user_id);
    
    if (!user) {
      throw new Error('User not found');
    }

    // Convert credit balance to display format
    return {
      ...user,
      credits_balance: user.credits_balance / 5
    };
  }

  /**
   * Delete user and all associated data
   * @param {string} user_id - Firebase UID
   * @returns {Promise<boolean>} True if deleted
   */
  async delete(user_id) {
    const stmt = this.db.prepare('DELETE FROM users WHERE user_id = ?');
    const result = stmt.run(user_id);
    return result.changes > 0;
  }

  /**
   * List all users (admin only)
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of user records
   */
  async list(options = {}) {
    const { limit = 50, offset = 0, orderBy = 'created_at', order = 'DESC' } = options;
    
    const stmt = this.db.prepare(`
      SELECT 
        user_id,
        email,
        display_name,
        credits_balance,
        total_images_generated,
        total_cards_generated,
        total_collections_saved,
        total_pdfs_exported,
        total_credits_spent,
        is_admin,
        created_at,
        last_activity_at
      FROM users 
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    const users = stmt.all(limit, offset);
    
    // Convert credit balances to display format
    return users.map(user => ({
      ...user,
      credits_balance: user.credits_balance / 5
    }));
  }
}

module.exports = User;