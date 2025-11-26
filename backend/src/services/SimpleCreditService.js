/**
 * Simple Credit Service - Minimal Implementation
 * 
 * This is a simplified version that doesn't depend on complex database operations
 * to avoid startup crashes.
 */

class SimpleCreditService {
  constructor(db) {
    this.db = db;
    this.initializedUsers = new Set(); // In-memory cache for testing
  }

  /**
   * Get user's current credit balance
   * @param {string} userId - User ID
   * @returns {Promise<number>} Credit balance
   */
  async getUserCredits(userId) {
    try {
      if (!this.db) {
        // Return default credits if no database available
        return this.initializedUsers.has(userId) ? 50 : 0;
      }

      const usage = await this.getUserUsage(userId);
      return usage.creditsBalance || 0;
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
      
      // Mark user as initialized
      this.initializedUsers.add(userId);
      
      return {
        transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        creditsAdded: credits,
        newCreditsBalance: credits
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
      
      // For now, just log the consumption
      // In a real implementation, this would update the database
      
      return {
        transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        creditsConsumed: credits,
        newCreditsBalance: Math.max(0, 50 - credits) // Simplified calculation
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
      
      // Mark user as initialized with default credits
      this.initializedUsers.add(userId);
      
      return {
        userId,
        email,
        displayName,
        creditsBalance: 50, // Default free credits
        transactionId: `init_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
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
   * @returns {Promise<Array>} Transaction history
   */
  async getUserTransactionHistory(userId, options = {}) {
    try {
      // Return empty transaction history for now
      return {
        transactions: [],
        total: 0,
        hasMore: false
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
      const hasCredits = this.initializedUsers.has(userId);
      
      return {
        userId,
        currentBalance: hasCredits ? 50 : 0,
        totalImagesGenerated: 0,
        totalCardsGenerated: 0,
        totalCollectionsSaved: 0,
        totalPdfsExported: 0,
        totalCreditsSpent: 0,
        totalTransactions: 0,
        totalCreditsEarned: hasCredits ? 50 : 0,
        createdAt: new Date().toISOString(),
        lastActivityAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting usage stats:', error);
      // Return default stats
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

module.exports = SimpleCreditService;