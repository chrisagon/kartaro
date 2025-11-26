const LocalDatabaseService = require('./LocalDatabaseService');

class CreditService {
  constructor(db) {
    this.db = db;
  }

  /**
   * Get user's current credit balance
   * @param {string} userId - User ID
   * @returns {Promise<number>} Credit balance in display format (credits × 0.2)
   */
  async getUserCredits(userId) {
    try {
      const usage = await LocalDatabaseService.getUserUsage(userId);
      return usage.creditsBalance;
    } catch (error) {
      if (error.message.includes('User not found')) {
        throw new Error('User not found');
      }
      throw error;
    }
  }

  /**
   * Add credits to user account
   * @param {string} userId - User ID
   * @param {number} credits - Credits to add (in display format)
   * @param {string} source - Source of credits
   * @param {Object} payload - Transaction metadata
   * @returns {Promise<Object>} Transaction result
   */
  async addCredits(userId, credits, source, payload = {}) {
    if (credits <= 0) {
      throw new Error('Credits to add must be positive');
    }

    try {
      const result = await LocalDatabaseService.addCredits(userId, credits, {
        type: 'purchase',
        source,
        payload
      });
      
      return {
        transactionId: result.transactionId,
        creditsAdded: credits,
        newBalance: result.newCreditsBalance
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Consume credits from user account
   * @param {string} userId - User ID
   * @param {number} credits - Credits to consume (in display format)
   * @param {string} source - Source of consumption
   * @param {Object} payload - Transaction metadata
   * @returns {Promise<Object>} Transaction result
   */
  async consumeCredits(userId, credits, source, payload = {}) {
    if (credits <= 0) {
      throw new Error('Credits to consume must be positive');
    }

    try {
      const result = await LocalDatabaseService.consumeCredits(userId, credits, {
        type: 'spend',
        source,
        payload
      });
      
      return {
        transactionId: result.transactionId,
        creditsConsumed: credits,
        newBalance: result.newCreditsBalance
      };
    } catch (error) {
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
    const freeCredits = 50; // 50 free credits for new users

    try {
      // Check if user already exists
      await LocalDatabaseService.getUserUsage(userId);
      throw new Error('User already exists');
    } catch (error) {
      if (!error.message.includes('User not found')) {
        throw error;
      }
    }

    try {
      const result = await LocalDatabaseService.addCredits(userId, freeCredits, {
        type: 'initial_grant',
        source: 'system',
        payload: {
          description: 'Welcome bonus: 50 free credits',
          email,
          displayName
        }
      });
      
      return {
        userId,
        email,
        displayName,
        creditsBalance: freeCredits,
        transactionId: result.transactionId
      };
    } catch (error) {
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
        throw new Error(`Unknown operation: ${operation}`);
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
      const transactions = await LocalDatabaseService.getUserCreditTransactions(userId, options);
      return transactions;
    } catch (error) {
      throw error;
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
      const usage = await LocalDatabaseService.getUserUsage(userId);
      return usage;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Admin function to adjust user credits
   * @param {string} targetUserId - Target user ID
   * @param {number} credits - Credits to adjust (positive or negative)
   * @param {string} adminUserId - Admin user ID performing the action
   * @param {string} reason - Reason for adjustment
   * @returns {Promise<Object>} Adjustment result
   */
  async adminAdjustCredits(targetUserId, credits, adminUserId, reason) {
    if (credits === 0) {
      throw new Error('Credit adjustment cannot be zero');
    }

    try {
      if (credits > 0) {
        const result = await LocalDatabaseService.addCredits(targetUserId, credits, {
          type: 'admin_adjust',
          source: 'admin_manual',
          payload: {
            admin_user_id: adminUserId,
            reason
          }
        });
        
        return {
          transactionId: result.transactionId,
          creditsAdjusted: credits,
          newBalance: result.newCreditsBalance
        };
      } else {
        const result = await LocalDatabaseService.consumeCredits(targetUserId, Math.abs(credits), {
          type: 'admin_adjust',
          source: 'admin_manual',
          payload: {
            admin_user_id: adminUserId,
            reason
          }
        });
        
        return {
          transactionId: result.transactionId,
          creditsAdjusted: credits,
          newBalance: result.newCreditsBalance
        };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CreditService;