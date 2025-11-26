/**
 * PaymentTransaction Model
 * 
 * Represents payment processing records for tracking purchases and refunds.
 */

class PaymentTransaction {
  constructor(db) {
    this.db = db;
  }

  /**
   * Create a new payment transaction
   * @param {Object} transactionData - Transaction data
   * @param {string} transactionData.user_id - User ID
   * @param {string} transactionData.stripe_payment_intent_id - Stripe payment intent ID
   * @param {string} transactionData.stripe_session_id - Stripe checkout session ID
   * @param {number} transactionData.amount_cents - Amount in cents
   * @param {string} transactionData.status - Transaction status
   * @returns {Promise<Object>} Created transaction record
   */
  async create(transactionData) {
    const { 
      user_id, 
      stripe_payment_intent_id, 
      stripe_session_id, 
      amount_cents, 
      status = 'pending' 
    } = transactionData;
    
    // Generate unique transaction ID
    const transactionId = `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const stmt = this.db.prepare(`
      INSERT INTO payment_transactions (id, user_id, stripe_payment_intent_id, stripe_session_id, amount_cents, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    try {
      stmt.run(
        transactionId,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status
      );
      
      return this.findById(transactionId);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT_FOREIGNKEY') {
        throw new Error('User not found');
      }
      throw error;
    }
  }

  /**
   * Find payment transaction by ID
   * @param {string} id - Transaction ID
   * @returns {Promise<Object|null>} Transaction record or null
   */
  async findById(id) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      WHERE id = ?
    `);

    const transaction = stmt.get(id);
    return transaction || null;
  }

  /**
   * Find payment transaction by Stripe payment intent ID
   * @param {string} payment_intent_id - Stripe payment intent ID
   * @returns {Promise<Object|null>} Transaction record or null
   */
  async findByPaymentIntentId(payment_intent_id) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      WHERE stripe_payment_intent_id = ?
    `);

    const transaction = stmt.get(payment_intent_id);
    return transaction || null;
  }

  /**
   * Find payment transaction by Stripe session ID
   * @param {string} session_id - Stripe checkout session ID
   * @returns {Promise<Object|null>} Transaction record or null
   */
  async findBySessionId(session_id) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      WHERE stripe_session_id = ?
    `);

    const transaction = stmt.get(session_id);
    return transaction || null;
  }

  /**
   * Get transactions for a user
   * @param {string} user_id - User ID
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Transaction list with pagination
   */
  async findByUser(user_id, options = {}) {
    const { 
      limit = 20, 
      offset = 0, 
      status,
      orderBy = 'created_at', 
      order = 'DESC' 
    } = options;
    
    let whereClause = 'WHERE user_id = ?';
    const values = [user_id];

    if (status) {
      whereClause += ' AND status = ?';
      values.push(status);
    }

    // Get total count
    const countStmt = this.db.prepare(`
      SELECT COUNT(*) as total 
      FROM payment_transactions 
      ${whereClause}
    `);
    const { total } = countStmt.get(...values);

    // Get transactions
    const stmt = this.db.prepare(`
      SELECT 
        id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      ${whereClause}
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    const transactions = stmt.all(...values, limit, offset);

    return {
      transactions,
      total,
      has_more: offset + limit < total
    };
  }

  /**
   * Get recent transactions for a user
   * @param {string} user_id - User ID
   * @param {number} limit - Number of transactions to return
   * @returns {Promise<Array>} Array of recent transactions
   */
  async getRecentByUser(user_id, limit = 10) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT ?
    `);

    return stmt.all(user_id, limit);
  }

  /**
   * Update transaction status
   * @param {string} id - Transaction ID
   * @param {string} status - New status
   * @returns {Promise<Object>} Updated transaction record
   */
  async updateStatus(id, status) {
    const stmt = this.db.prepare(`
      UPDATE payment_transactions 
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    const result = stmt.run(status, id);
    
    if (result.changes === 0) {
      throw new Error('Payment transaction not found');
    }

    return this.findById(id);
  }

  /**
   * Update transaction by Stripe payment intent ID
   * @param {string} payment_intent_id - Stripe payment intent ID
   * @param {Object} updates - Fields to update
   * @returns {Promise<Object>} Updated transaction record
   */
  async updateByPaymentIntentId(payment_intent_id, updates) {
    const allowedFields = ['status', 'stripe_session_id'];
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

    values.push(payment_intent_id);

    const stmt = this.db.prepare(`
      UPDATE payment_transactions 
      SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE stripe_payment_intent_id = ?
    `);

    const result = stmt.run(...values);
    
    if (result.changes === 0) {
      throw new Error('Payment transaction not found');
    }

    return this.findByPaymentIntentId(payment_intent_id);
  }

  /**
   * Get transactions by status
   * @param {string} status - Transaction status
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of transactions
   */
  async findByStatus(status, options = {}) {
    const { limit = 50, offset = 0, orderBy = 'created_at', order = 'DESC' } = options;
    
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      WHERE status = ?
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    return stmt.all(status, limit, offset);
  }

  /**
   * Get pending transactions
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of pending transactions
   */
  async getPending(options = {}) {
    return this.findByStatus('pending', options);
  }

  /**
   * Get completed transactions
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of completed transactions
   */
  async getCompleted(options = {}) {
    return this.findByStatus('completed', options);
  }

  /**
   * Get failed transactions
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of failed transactions
   */
  async getFailed(options = {}) {
    return this.findByStatus('failed', options);
  }

  /**
   * Mark transaction as completed
   * @param {string} id - Transaction ID
   * @returns {Promise<Object>} Updated transaction record
   */
  async markCompleted(id) {
    return this.updateStatus(id, 'completed');
  }

  /**
   * Mark transaction as failed
   * @param {string} id - Transaction ID
   * @returns {Promise<Object>} Updated transaction record
   */
  async markFailed(id) {
    return this.updateStatus(id, 'failed');
  }

  /**
   * Mark transaction as refunded
   * @param {string} id - Transaction ID
   * @returns {Promise<Object>} Updated transaction record
   */
  async markRefunded(id) {
    return this.updateStatus(id, 'refunded');
  }

  /**
   * Get payment statistics
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Statistics
   */
  async getStats(options = {}) {
    const { startDate, endDate } = options;
    
    let whereClause = 'WHERE 1=1';
    const values = [];

    if (startDate) {
      whereClause += ' AND created_at >= ?';
      values.push(startDate);
    }

    if (endDate) {
      whereClause += ' AND created_at <= ?';
      values.push(endDate);
    }

    const stmt = this.db.prepare(`
      SELECT 
        COUNT(*) as total_transactions,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_transactions,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_transactions,
        COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed_transactions,
        COUNT(CASE WHEN status = 'refunded' THEN 1 END) as refunded_transactions,
        SUM(amount_cents) as total_amount_cents,
        SUM(CASE WHEN status = 'completed' THEN amount_cents ELSE 0 END) as completed_amount_cents,
        AVG(amount_cents) as avg_transaction_amount
      FROM payment_transactions 
      ${whereClause}
    `);

    const stats = stmt.get(...values);
    
    return {
      total_transactions: stats.total_transactions,
      pending_transactions: stats.pending_transactions,
      completed_transactions: stats.completed_transactions,
      failed_transactions: stats.failed_transactions,
      refunded_transactions: stats.refunded_transactions,
      total_amount_euros: stats.total_amount_cents ? (stats.total_amount_cents / 100).toFixed(2) : '0.00',
      completed_amount_euros: stats.completed_amount_cents ? (stats.completed_amount_cents / 100).toFixed(2) : '0.00',
      avg_transaction_amount_euros: stats.avg_transaction_amount ? (stats.avg_transaction_amount / 100).toFixed(2) : '0.00'
    };
  }

  /**
   * Get daily payment totals for analytics
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Daily totals
   */
  async getDailyTotals(options = {}) {
    const { startDate, endDate, limit = 30 } = options;
    
    let whereClause = 'WHERE 1=1';
    const values = [];

    if (startDate) {
      whereClause += ' AND created_at >= ?';
      values.push(startDate);
    }

    if (endDate) {
      whereClause += ' AND created_at <= ?';
      values.push(endDate);
    }

    const stmt = this.db.prepare(`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as transaction_count,
        SUM(amount_cents) as total_amount_cents,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_count,
        SUM(CASE WHEN status = 'completed' THEN amount_cents ELSE 0 END) as completed_amount_cents
      FROM payment_transactions 
      ${whereClause}
      GROUP BY DATE(created_at)
      ORDER BY date DESC
      LIMIT ?
    `);

    const dailyTotals = stmt.all(...values, limit);
    
    // Convert cents to euros
    return dailyTotals.map(item => ({
      ...item,
      total_amount_euros: (item.total_amount_cents / 100).toFixed(2),
      completed_amount_euros: (item.completed_amount_cents / 100).toFixed(2)
    }));
  }

  /**
   * Search transactions
   * @param {Object} criteria - Search criteria
   * @returns {Promise<Array>} Matching transactions
   */
  async search(criteria) {
    const { 
      user_id, 
      status, 
      minAmount, 
      maxAmount,
      startDate, 
      endDate,
      limit = 50,
      offset = 0 
    } = criteria;
    
    let whereClause = 'WHERE 1=1';
    const values = [];

    if (user_id) {
      whereClause += ' AND user_id = ?';
      values.push(user_id);
    }

    if (status) {
      whereClause += ' AND status = ?';
      values.push(status);
    }

    if (minAmount !== undefined) {
      whereClause += ' AND amount_cents >= ?';
      values.push(minAmount * 100); // Convert euros to cents
    }

    if (maxAmount !== undefined) {
      whereClause += ' AND amount_cents <= ?';
      values.push(maxAmount * 100); // Convert euros to cents
    }

    if (startDate) {
      whereClause += ' AND created_at >= ?';
      values.push(startDate);
    }

    if (endDate) {
      whereClause += ' AND created_at <= ?';
      values.push(endDate);
    }

    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        stripe_payment_intent_id,
        stripe_session_id,
        amount_cents,
        status,
        created_at,
        updated_at
      FROM payment_transactions 
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `);

    return stmt.all(...values, limit, offset);
  }

  /**
   * Delete old transactions (cleanup)
   * @param {Object} options - Cleanup options
   * @returns {Promise<number>} Number of deleted transactions
   */
  async cleanupOld(options = {}) {
    const { olderThan = '2 years', status = 'completed', dryRun = false } = options;
    
    let whereClause = `WHERE status = ? AND created_at < datetime('now', '-${olderThan}')`;
    const values = [status];

    if (dryRun) {
      const countStmt = this.db.prepare(`
        SELECT COUNT(*) as count 
        FROM payment_transactions 
        ${whereClause}
      `);
      const { count } = countStmt.get(...values);
      return count;
    }

    const stmt = this.db.prepare(`
      DELETE FROM payment_transactions 
      ${whereClause}
    `);

    const result = stmt.run(...values);
    return result.changes;
  }

  /**
   * Get transaction summary for a user
   * @param {string} user_id - User ID
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Transaction summary
   */
  async getSummaryByUser(user_id, options = {}) {
    const { startDate, endDate } = options;
    
    let whereClause = 'WHERE user_id = ?';
    const values = [user_id];

    if (startDate) {
      whereClause += ' AND created_at >= ?';
      values.push(startDate);
    }

    if (endDate) {
      whereClause += ' AND created_at <= ?';
      values.push(endDate);
    }

    const stmt = this.db.prepare(`
      SELECT 
        status,
        COUNT(*) as transaction_count,
        SUM(amount_cents) as total_amount_cents,
        MIN(created_at) as first_transaction,
        MAX(created_at) as last_transaction
      FROM payment_transactions 
      ${whereClause}
      GROUP BY status
      ORDER BY total_amount_cents DESC
    `);

    const summary = stmt.all(...values);
    
    // Convert cents to euros
    const formattedSummary = summary.map(item => ({
      ...item,
      total_amount_euros: (item.total_amount_cents / 100).toFixed(2)
    }));

    // Get overall totals
    const totalStmt = this.db.prepare(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(amount_cents) as total_amount_cents,
        SUM(CASE WHEN status = 'completed' THEN amount_cents ELSE 0 END) as completed_amount_cents
      FROM payment_transactions 
      ${whereClause}
    `);

    const totals = totalStmt.get(...values);

    return {
      summary: formattedSummary,
      totals: {
        total_transactions: totals.total_transactions,
        total_amount_euros: (totals.total_amount_cents / 100).toFixed(2),
        completed_amount_euros: (totals.completed_amount_cents / 100).toFixed(2)
      }
    };
  }
}

module.exports = PaymentTransaction;