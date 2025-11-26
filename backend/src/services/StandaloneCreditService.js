/**
 * Standalone Credit Service - No Database Dependencies
 * 
 * This version works completely in-memory to avoid any database-related crashes.
 */

class StandaloneCreditService {
  constructor() {
    this.userCredits = new Map(); // In-memory storage
    this.userTransactions = new Map(); // In-memory transaction history
  }

  /**
   * Get user's current credit balance
   * @param {string} userId - User ID
   * @returns {Promise<number>} Credit balance
   */
  async getUserCredits(userId) {
    try {
      const user = this.userCredits.get(userId);
      return user ? user.balance : 0;
    } catch (error) {
      console.error('Error getting user credits:', error);
      return 0;
    }
  }

  /**
   * Add credits to user account
   * @param {string} userId - User ID
   * @param {number} credits - Credits to add
   * @param {string} source - Source of credits
   * @param {Object} payload - Transaction metadata
   * @returns {Promise<Object>} Transaction result
   */
  async addCredits(userId, credits, source, payload = {}) {
    try {
      console.log(`Adding ${credits} credits to user ${userId} from ${source}`);
      
      const user = this.userCredits.get(userId) || { 
        balance: 0, 
        createdAt: new Date().toISOString(),
        totalEarned: 0,
        totalSpent: 0
      };
      
      user.balance += credits;
      user.totalEarned += credits;
      user.lastActivityAt = new Date().toISOString();
      
      this.userCredits.set(userId, user);
      
      // Add transaction
      const transaction = {
        id: `add_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        type: 'add',
        amount: credits,
        source,
        payload,
        timestamp: new Date().toISOString(),
        balanceAfter: user.balance
      };
      
      const transactions = this.userTransactions.get(userId) || [];
      transactions.push(transaction);
      this.userTransactions.set(userId, transactions);
      
      return {
        transactionId: transaction.id,
        creditsAdded: credits,
        newCreditsBalance: user.balance
      };
    } catch (error) {
      console.error('Error adding credits:', error);
      throw error;
    }
  }

  /**
   * Consume credits from user account
   * @param {string} userId - User ID
   * @param {number} credits - Credits to consume
   * @param {string} source - Source of consumption
   * @param {Object} payload - Transaction metadata
   * @returns {Promise<Object>} Transaction result
   */
  async consumeCredits(userId, credits, source, payload = {}) {
    try {
      console.log(`Consuming ${credits} credits from user ${userId} for ${source}`);
      
      const user = this.userCredits.get(userId) || { 
        balance: 0, 
        createdAt: new Date().toISOString(),
        totalEarned: 0,
        totalSpent: 0
      };
      
      if (user.balance < credits) {
        throw new Error('Insufficient credits');
      }
      
      user.balance -= credits;
      user.totalSpent += credits;
      user.lastActivityAt = new Date().toISOString();
      
      this.userCredits.set(userId, user);
      
      // Add transaction
      const transaction = {
        id: `consume_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        type: 'consume',
        amount: credits,
        source,
        payload,
        timestamp: new Date().toISOString(),
        balanceAfter: user.balance
      };
      
      const transactions = this.userTransactions.get(userId) || [];
      transactions.push(transaction);
      this.userTransactions.set(userId, transactions);
      
      return {
        transactionId: transaction.id,
        creditsConsumed: credits,
        newCreditsBalance: user.balance
      };
    } catch (error) {
      console.error('Error consuming credits:', error);
      throw error;
    }
  }

  /**
   * Initialize user with free credits
   * @param {string} userId - User ID
   * @param {string} email - User email
   * @param {string} displayName - User display name
   * @returns {Promise<Object>} Created user info
   */
  async initializeUserCredits(userId, email, displayName) {
    try {
      console.log(`Initializing credits for user ${userId} (${email})`);
      
      // Check if user already exists
      if (this.userCredits.has(userId)) {
        throw new Error('User already exists');
      }
      
      // Initialize with 50 free credits
      const freeCredits = 50;
      
      const user = {
        userId,
        email,
        displayName,
        balance: freeCredits,
        createdAt: new Date().toISOString(),
        lastActivityAt: new Date().toISOString(),
        totalEarned: freeCredits,
        totalSpent: 0
      };
      
      this.userCredits.set(userId, user);
      
      // Add initial transaction
      const transaction = {
        id: `init_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        type: 'initial_grant',
        amount: freeCredits,
        source: 'system',
        payload: { description: 'Welcome bonus: 50 free credits' },
        timestamp: new Date().toISOString(),
        balanceAfter: freeCredits
      };
      
      this.userTransactions.set(userId, [transaction]);
      
      return {
        userId,
        email,
        displayName,
        creditsBalance: freeCredits,
        transactionId: transaction.id
      };
    } catch (error) {
      console.error('Error initializing user credits:', error);
      throw error;
    }
  }

  /**
   * Calculate required credits for an operation
   * @param {string} operation - Operation type
   * @param {Object} params - Operation parameters
   * @returns {number} Required credits
   */
  calculateRequiredCredits(operation, params = {}) {
    switch (operation) {
      case 'image_generation':
        // 1 credit per 8 images
        const numImages = params.numImages || 10;
        return Math.ceil(numImages / 8);
      
      case 'image_regeneration':
        // 0.2 credit per image
        return 0.2;
      
      case 'context_generation':
        // 1 credit per context
        return 1;
      
      case 'collection_save':
        // 10 credits per collection
        return 10;
      
      case 'pdf_export':
      case 'png_export':
        // Free operations
        return 0;
      
      default:
        console.warn(`Unknown operation: ${operation}, defaulting to 0 credits`);
        return 0;
    }
  }

  /**
   * Get user transaction history
   * @param {string} userId - User ID
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Transaction history
   */
  async getUserTransactionHistory(userId, options = {}) {
    try {
      const transactions = this.userTransactions.get(userId) || [];
      
      const limit = Math.min(options.limit || 20, 100);
      const offset = Math.max(options.offset || 0, 0);
      
      // Apply filters
      let filteredTransactions = transactions;
      
      if (options.type) {
        filteredTransactions = filteredTransactions.filter(t => t.type === options.type);
      }
      
      if (options.source) {
        filteredTransactions = filteredTransactions.filter(t => t.source === options.source);
      }
      
      // Sort by timestamp (newest first)
      filteredTransactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Apply pagination
      const paginatedTransactions = filteredTransactions.slice(offset, offset + limit);
      
      return {
        transactions: paginatedTransactions,
        total: filteredTransactions.length,
        hasMore: offset + limit < filteredTransactions.length
      };
    } catch (error) {
      console.error('Error getting transaction history:', error);
      return {
        transactions: [],
        total: 0,
        hasMore: false
      };
    }
  }

  /**
   * Get credit usage statistics for a user
   * @param {string} userId - User ID
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Usage statistics
   */
  async getUserUsageStats(userId, options = {}) {
    try {
      const user = this.userCredits.get(userId);
      
      if (!user) {
        throw new Error('User not found');
      }
      
      const transactions = this.userTransactions.get(userId) || [];
      
      // Calculate statistics
      const stats = {
        userId,
        currentBalance: user.balance,
        totalImagesGenerated: transactions.filter(t => t.source === 'image_generation').length,
        totalCardsGenerated: transactions.filter(t => t.source === 'card_generation').length,
        totalCollectionsSaved: transactions.filter(t => t.source === 'collection_save').length,
        totalPdfsExported: transactions.filter(t => t.source === 'pdf_export').length,
        totalCreditsSpent: user.totalSpent,
        totalTransactions: transactions.length,
        totalCreditsEarned: user.totalEarned,
        createdAt: user.createdAt,
        lastActivityAt: user.lastActivityAt
      };
      
      return stats;
    } catch (error) {
      console.error('Error getting usage stats:', error);
      
      if (error.message.includes('User not found')) {
        throw error;
      }
      
      // Return default stats on other errors
      return {
        userId,
        currentBalance: 0,
        totalImagesGenerated: 0,
        totalCardsGenerated: 0,
        totalCollectionsSaved: 0,
        totalPdfsExported: 0,
        totalCreditsSpent: 0,
        totalTransactions: 0,
        totalCreditsEarned: 0,
        createdAt: new Date().toISOString(),
        lastActivityAt: new Date().toISOString()
      };
    }
  }

  /**
   * Get user usage (alias for getUserUsageStats)
   * @param {string} userId - User ID
   * @returns {Promise<Object>} Usage statistics
   */
  async getUserUsage(userId) {
    return this.getUserUsageStats(userId);
  }
}

module.exports = StandaloneCreditService;