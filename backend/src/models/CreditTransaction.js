/**
 * CreditTransaction Model
 * 
 * Represents credit transactions for audit logging and tracking.
 */

class CreditTransaction {
  constructor(db) {
    this.db = db;
  }

  /**
   * Create a new credit transaction
   * @param {Object} transactionData - Transaction data
   * @param {string} transactionData.user_id - User ID
   * @param {string} transactionData.type - Transaction type
   * @param {string} transactionData.source - Transaction source
   * @param {number} transactionData.amount - Amount in display format (credits × 0.2)
   * @param {Object} transactionData.payload - Metadata payload
   * @returns {Promise<Object>} Created transaction record
   */
  async create(transactionData) {
    const { user_id, type, source, amount, payload = {} } = transactionData;
    
    // Generate unique transaction ID
    const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Convert display amount to storage format (multiply by 5)
    const storageAmount = Math.round(amount * 5);
    
    const stmt = this.db.prepare(`
      INSERT INTO credit_transactions (id, user_id, type, source, amount, payload)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    try {
      stmt.run(
        transactionId,
        user_id,
        type,
        source,
        storageAmount,
        JSON.stringify(payload)
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
   * Find credit transaction by ID
   * @param {string} id - Transaction ID
   * @returns {Promise<Object|null>} Transaction record or null
   */
  async findById(id) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      WHERE id = ?
    `);

    const transaction = stmt.get(id);
    
    if (!transaction) {
      return null;
    }

    // Convert storage format to display format and parse JSON
    return {
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    };
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
      type, 
      source,
      orderBy = 'created_at', 
      order = 'DESC' 
    } = options;
    
    let whereClause = 'WHERE user_id = ?';
    const values = [user_id];

    if (type) {
      whereClause += ' AND type = ?';
      values.push(type);
    }

    if (source) {
      whereClause += ' AND source = ?';
      values.push(source);
    }

    // Get total count
    const countStmt = this.db.prepare(`
      SELECT COUNT(*) as total 
      FROM credit_transactions 
      ${whereClause}
    `);
    const { total } = countStmt.get(...values);

    // Get transactions
    const stmt = this.db.prepare(`
      SELECT 
        id,
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      ${whereClause}
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    const transactions = stmt.all(...values, limit, offset);
    
    // Convert storage format to display format and parse JSON
    const formattedTransactions = transactions.map(transaction => ({
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    }));

    return {
      transactions: formattedTransactions,
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
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT ?
    `);

    const transactions = stmt.all(user_id, limit);
    
    // Convert storage format to display format and parse JSON
    return transactions.map(transaction => ({
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    }));
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
        type,
        source,
        COUNT(*) as transaction_count,
        SUM(amount) as total_amount,
        MIN(created_at) as first_transaction,
        MAX(created_at) as last_transaction
      FROM credit_transactions 
      ${whereClause}
      GROUP BY type, source
      ORDER BY total_amount DESC
    `);

    const summary = stmt.all(...values);
    
    // Convert storage format to display format
    const formattedSummary = summary.map(item => ({
      ...item,
      total_amount: item.total_amount / 5
    }));

    // Get overall totals
    const totalStmt = this.db.prepare(`
      SELECT 
        COUNT(*) as total_transactions,
        SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) as total_credits_added,
        SUM(CASE WHEN amount < 0 THEN ABS(amount) ELSE 0 END) as total_credits_spent
      FROM credit_transactions 
      ${whereClause}
    `);

    const totals = totalStmt.get(...values);

    return {
      summary: formattedSummary,
      totals: {
        total_transactions: totals.total_transactions,
        total_credits_added: totals.total_credits_added / 5,
        total_credits_spent: totals.total_credits_spent / 5,
        net_credits: (totals.total_credits_added - totals.total_credits_spent) / 5
      }
    };
  }

  /**
   * Get transactions by type
   * @param {string} type - Transaction type
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of transactions
   */
  async findByType(type, options = {}) {
    const { limit = 50, offset = 0, orderBy = 'created_at', order = 'DESC' } = options;
    
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      WHERE type = ?
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    const transactions = stmt.all(type, limit, offset);
    
    // Convert storage format to display format and parse JSON
    return transactions.map(transaction => ({
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    }));
  }

  /**
   * Get transactions by source
   * @param {string} source - Transaction source
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of transactions
   */
  async findBySource(source, options = {}) {
    const { limit = 50, offset = 0, orderBy = 'created_at', order = 'DESC' } = options;
    
    const stmt = this.db.prepare(`
      SELECT 
        id,
        user_id,
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      WHERE source = ?
      ORDER BY ${orderBy} ${order}
      LIMIT ? OFFSET ?
    `);

    const transactions = stmt.all(source, limit, offset);
    
    // Convert storage format to display format and parse JSON
    return transactions.map(transaction => ({
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    }));
  }

  /**
   * Get daily transaction totals for analytics
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
        SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) as credits_added,
        SUM(CASE WHEN amount < 0 THEN ABS(amount) ELSE 0 END) as credits_spent
      FROM credit_transactions 
      ${whereClause}
      GROUP BY DATE(created_at)
      ORDER BY date DESC
      LIMIT ?
    `);

    const dailyTotals = stmt.all(...values, limit);
    
    // Convert storage format to display format
    return dailyTotals.map(item => ({
      ...item,
      credits_added: item.credits_added / 5,
      credits_spent: item.credits_spent / 5
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
      type, 
      source, 
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

    if (type) {
      whereClause += ' AND type = ?';
      values.push(type);
    }

    if (source) {
      whereClause += ' AND source = ?';
      values.push(source);
    }

    if (minAmount !== undefined) {
      whereClause += ' AND amount >= ?';
      values.push(Math.round(minAmount * 5)); // Convert to storage format
    }

    if (maxAmount !== undefined) {
      whereClause += ' AND amount <= ?';
      values.push(Math.round(maxAmount * 5)); // Convert to storage format
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
        type,
        source,
        amount,
        payload,
        created_at
      FROM credit_transactions 
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `);

    const transactions = stmt.all(...values, limit, offset);
    
    // Convert storage format to display format and parse JSON
    return transactions.map(transaction => ({
      ...transaction,
      amount: transaction.amount / 5,
      payload: transaction.payload ? JSON.parse(transaction.payload) : null
    }));
  }

  /**
   * Get transaction statistics
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
        COUNT(CASE WHEN type = 'purchase' THEN 1 END) as purchase_transactions,
        COUNT(CASE WHEN type = 'consumption' THEN 1 END) as consumption_transactions,
        COUNT(CASE WHEN type = 'initial_grant' THEN 1 END) as initial_grants,
        COUNT(CASE WHEN type = 'admin_adjust' THEN 1 END) as admin_adjustments,
        SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) as total_credits_added,
        SUM(CASE WHEN amount < 0 THEN ABS(amount) ELSE 0 END) as total_credits_spent,
        AVG(amount) as avg_transaction_amount
      FROM credit_transactions 
      ${whereClause}
    `);

    const stats = stmt.get(...values);
    
    return {
      total_transactions: stats.total_transactions,
      purchase_transactions: stats.purchase_transactions,
      consumption_transactions: stats.consumption_transactions,
      initial_grants: stats.initial_grants,
      admin_adjustments: stats.admin_adjustments,
      total_credits_added: stats.total_credits_added / 5,
      total_credits_spent: stats.total_credits_spent / 5,
      net_credits: (stats.total_credits_added - stats.total_credits_spent) / 5,
      avg_transaction_amount: stats.avg_transaction_amount ? stats.avg_transaction_amount / 5 : 0
    };
  }

  /**
   * Delete old transactions (cleanup)
   * @param {Object} options - Cleanup options
   * @returns {Promise<number>} Number of deleted transactions
   */
  async cleanupOld(options = {}) {
    const { olderThan = '1 year', dryRun = false } = options;
    
    if (dryRun) {
      const countStmt = this.db.prepare(`
        SELECT COUNT(*) as count 
        FROM credit_transactions 
        WHERE created_at < datetime('now', '-${olderThan}')
      `);
      const { count } = countStmt.get();
      return count;
    }

    const stmt = this.db.prepare(`
      DELETE FROM credit_transactions 
      WHERE created_at < datetime('now', '-${olderThan}')
    `);

    const result = stmt.run();
    return result.changes;
  }
}

module.exports = CreditTransaction;