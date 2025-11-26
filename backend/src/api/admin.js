const express = require('express');
const authMiddleware = require('../middleware/auth');
const { requireAdmin } = require('../middleware/admin');
const CreditService = require('../services/CreditService');
const PaymentService = require('../services/PaymentService');
const { getUserUsage } = require('../services/LocalDatabaseService');

const router = express.Router();

// Apply admin middleware to all routes
router.use(authMiddleware, requireAdmin);

/**
 * GET /api/admin/users/{userId}
 * Get user details including credit information (admin only)
 */
router.get('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const creditService = new CreditService(req.db);

    // Validate userId parameter
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({
        error: 'Invalid user ID',
        code: 'INVALID_USER_ID',
        message: 'User ID must be a valid string'
      });
    }

    // Get user usage statistics
    const usageStats = await creditService.getUserUsageStats(userId);

    // Format response according to API contract
    const response = {
      userId,
      creditsBalance: usageStats.credits_balance,
      totalImagesGenerated: usageStats.total_images_generated,
      totalCardsGenerated: usageStats.total_cards_generated,
      totalCollectionsSaved: usageStats.total_collections_saved,
      totalPdfsExported: usageStats.total_pdfs_exported,
      totalCreditsSpent: usageStats.total_credits_spent,
      createdAt: usageStats.created_at,
      lastActivityAt: usageStats.last_activity_at,
      transactionSummary: usageStats.transaction_summary || []
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching admin user details:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'The specified user does not exist in the system'
      });
    }
    
    res.status(500).json({
      error: 'Failed to fetch user details',
      code: 'USER_DETAILS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching user details'
    });
  }
});

/**
 * GET /api/admin/users/{userId}/transactions
 * Get user's credit transaction history (admin only)
 */
router.get('/users/:userId/transactions', async (req, res) => {
  try {
    const { userId } = req.params;
    const creditService = new CreditService(req.db);

    // Validate userId parameter
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({
        error: 'Invalid user ID',
        code: 'INVALID_USER_ID',
        message: 'User ID must be a valid string'
      });
    }

    // Parse and validate query parameters
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const offset = Math.max(parseInt(req.query.offset) || 0, 0);
    const type = req.query.type;
    const source = req.query.source;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    // Validate type if provided
    if (type && !['initial_grant', 'purchase', 'consumption', 'refund', 'admin_adjust'].includes(type)) {
      return res.status(400).json({
        error: 'Invalid transaction type',
        code: 'INVALID_TRANSACTION_TYPE',
        message: 'Transaction type must be one of: initial_grant, purchase, consumption, refund, admin_adjust'
      });
    }

    // Get transaction history
    const transactions = await creditService.getUserTransactionHistory(userId, {
      limit,
      offset,
      type,
      source,
      startDate,
      endDate
    });

    // Format response according to API contract
    const response = {
      transactions: transactions.transactions.map(tx => ({
        id: tx.id,
        type: tx.type,
        source: tx.source,
        amount: tx.amount,
        payload: tx.payload,
        createdAt: tx.created_at
      })),
      total: transactions.total,
      hasMore: transactions.has_more,
      limit,
      offset
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching admin user transactions:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'The specified user does not exist in the system'
      });
    }
    
    res.status(500).json({
      error: 'Failed to fetch user transactions',
      code: 'USER_TRANSACTIONS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching user transactions'
    });
  }
});

/**
 * POST /api/admin/users/{userId}/credits/adjust
 * Adjust user credits manually (admin only)
 */
router.post('/users/:userId/credits/adjust', async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount, reason, source } = req.body;
    const adminUserId = req.user.uid;

    // Validate userId parameter
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({
        error: 'Invalid user ID',
        code: 'INVALID_USER_ID',
        message: 'User ID must be a valid string'
      });
    }

    // Validate request body
    if (typeof amount !== 'number' || amount === 0) {
      return res.status(400).json({
        error: 'Invalid amount',
        code: 'INVALID_AMOUNT',
        message: 'Amount must be a non-zero number (positive to add credits, negative to remove)'
      });
    }

    if (!reason || typeof reason !== 'string') {
      return res.status(400).json({
        error: 'Reason required',
        code: 'MISSING_REASON',
        message: 'A reason for the credit adjustment is required'
      });
    }

    const creditService = new CreditService(req.db);

    // Perform credit adjustment
    const result = await creditService.adminAdjustCredits(
      adminUserId,
      userId,
      amount,
      reason
    );

    // Format response according to API contract
    const response = {
      userId: result.userId,
      adjustmentAmount: result.adjustmentAmount,
      newBalance: result.newBalance,
      transactionId: result.transactionId,
      reason,
      adminUserId,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error adjusting user credits:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'The specified user does not exist in the system'
      });
    }
    
    if (error.message.includes('negative balance')) {
      return res.status(400).json({
        error: 'Insufficient credits for adjustment',
        code: 'INSUFFICIENT_CREDITS',
        message: 'Credit adjustment would result in negative balance'
      });
    }
    
    res.status(500).json({
      error: 'Failed to adjust credits',
      code: 'CREDIT_ADJUSTMENT_ERROR',
      message: error.message || 'An unexpected error occurred while adjusting credits'
    });
  }
});

/**
 * GET /api/admin/users
 * List all users with pagination (admin only)
 */
router.get('/users', async (req, res) => {
  try {
    // Parse and validate query parameters
    const limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const offset = Math.max(parseInt(req.query.offset) || 0, 0);
    const search = req.query.search;
    const sortBy = req.query.sortBy || 'created_at';
    const sortOrder = req.query.sortOrder || 'DESC';

    // Validate sort field
    const validSortFields = ['created_at', 'last_activity_at', 'credits_balance', 'total_credits_spent'];
    if (!validSortFields.includes(sortBy)) {
      return res.status(400).json({
        error: 'Invalid sort field',
        code: 'INVALID_SORT_FIELD',
        message: `Sort field must be one of: ${validSortFields.join(', ')}`
      });
    }

    // Validate sort order
    if (!['ASC', 'DESC'].includes(sortOrder.toUpperCase())) {
      return res.status(400).json({
        error: 'Invalid sort order',
        code: 'INVALID_SORT_ORDER',
        message: 'Sort order must be either ASC or DESC'
      });
    }

    const creditService = new CreditService(req.db);

    // Get user list (this would need to be implemented in CreditService)
    // For now, return a basic response
    const response = {
      users: [],
      total: 0,
      hasMore: false,
      limit,
      offset
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching user list:', error);
    
    res.status(500).json({
      error: 'Failed to fetch user list',
      code: 'USER_LIST_ERROR',
      message: error.message || 'An unexpected error occurred while fetching the user list'
    });
  }
});

/**
 * GET /api/admin/stats
 * Get system-wide statistics (admin only)
 */
router.get('/stats', async (req, res) => {
  try {
    const creditService = new CreditService(req.db);
    const paymentService = new PaymentService(req.db, creditService);

    // Get credit system statistics
    const creditStats = await creditService.getSystemStats();
    
    // Get payment statistics
    const paymentStats = await paymentService.getPaymentStats();

    // Combine statistics
    const response = {
      users: creditStats.users,
      transactions: creditStats.transactions,
      payments: paymentStats,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching admin statistics:', error);
    
    res.status(500).json({
      error: 'Failed to fetch statistics',
      code: 'STATS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching statistics'
    });
  }
});

/**
 * GET /api/admin/credit-packs
 * Get all credit packs including inactive ones (admin only)
 */
router.get('/credit-packs', async (req, res) => {
  try {
    const { includeInactive = 'true' } = req.query;
    const { getCreditPacks } = require('../services/LocalDatabaseService');
    
    // Get credit packs
    const creditPacks = await getCreditPacks();

    // If includeInactive is false, filter out inactive packs
    const filteredPacks = includeInactive === 'false' 
      ? creditPacks.filter(pack => pack.isActive)
      : creditPacks;

    res.json({
      creditPacks: filteredPacks,
      total: filteredPacks.length,
      includeInactive: includeInactive === 'true'
    });
  } catch (error) {
    console.error('Error fetching admin credit packs:', error);
    
    res.status(500).json({
      error: 'Failed to fetch credit packs',
      code: 'CREDIT_PACKS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching credit packs'
    });
  }
});

/**
 * POST /api/admin/credit-packs
 * Create a new credit pack (admin only)
 */
router.post('/credit-packs', async (req, res) => {
  try {
    const { name, creditAmount, priceCents, description, features, sortOrder } = req.body;

    // Validate required fields
    if (!name || typeof creditAmount !== 'number' || typeof priceCents !== 'number') {
      return res.status(400).json({
        error: 'Missing required fields',
        code: 'MISSING_REQUIRED_FIELDS',
        message: 'Name, creditAmount, and priceCents are required'
      });
    }

    if (creditAmount <= 0 || priceCents <= 0) {
      return res.status(400).json({
        error: 'Invalid values',
        code: 'INVALID_VALUES',
        message: 'Credit amount and price must be positive numbers'
      });
    }

    // This would need to be implemented in the CreditPack model
    // For now, return a success response
    const response = {
      id: `pack_${Date.now()}`,
      name,
      creditAmount,
      priceCents,
      priceEuros: (priceCents / 100).toFixed(2),
      description: description || '',
      features: features || [],
      sortOrder: sortOrder || 0,
      isActive: true,
      createdAt: new Date().toISOString()
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error creating credit pack:', error);
    
    res.status(500).json({
      error: 'Failed to create credit pack',
      code: 'CREDIT_PACK_CREATE_ERROR',
      message: error.message || 'An unexpected error occurred while creating the credit pack'
    });
  }
});

module.exports = router;