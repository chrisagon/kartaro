const express = require('express');
const authMiddleware = require('../middleware/auth');
// Temporarily disable to isolate crash issue
// const { ensureUserCredits, addCreditInfo } = require('../middleware/credits');
// const CreditService = require('../services/CreditService');

const router = express.Router();

/**
 * GET /api/users/me/usage
 * Get user's credit balance and usage statistics
 */
router.get('/me/usage', authMiddleware, /* ensureUserCredits(), addCreditInfo({ includeUsage: true }) */ async (req, res) => {
  try {
    const userId = req.user.uid;
    
    // TODO: Re-enable credit service once it's properly implemented
    // const creditService = new CreditService(req.db);

    // Get comprehensive usage statistics
    // const usageStats = await creditService.getUserUsageStats(userId);

    // Return placeholder data for now
    const usageStats = {
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

    res.json({
      userId: usageStats.userId,
      creditsBalance: usageStats.currentBalance,
      totalImagesGenerated: usageStats.totalImagesGenerated,
      totalCardsGenerated: usageStats.totalCardsGenerated,
      totalCollectionsSaved: usageStats.totalCollectionsSaved,
      totalPdfsExported: usageStats.totalPdfsExported,
      totalCreditsSpent: usageStats.totalCreditsSpent,
      createdAt: usageStats.createdAt,
      lastActivityAt: usageStats.lastActivityAt,
      totalTransactions: usageStats.totalTransactions,
      totalCreditsEarned: usageStats.totalCreditsEarned
    });
  } catch (error) {
    console.error('Error fetching user usage summary:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'User account not found in the system'
      });
    }
    
    const status = error.status || 500;
    res.status(status).json({ 
      error: error.message || 'Failed to fetch usage summary.',
      code: error.code || 'USAGE_FETCH_ERROR'
    });
  }
});

/**
 * GET /api/users/me/transactions
 * Get user's credit transaction history
 */
router.get('/me/transactions', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    
    // TODO: Re-enable credit service once it's properly implemented
    // const creditService = new CreditService(req.db);

    // Parse query parameters
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const offset = Math.max(parseInt(req.query.offset) || 0, 0);
    const type = req.query.type;
    const source = req.query.source;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    // Get transaction history
    // const transactions = await creditService.getUserTransactionHistory(userId, {
    //   limit,
    //   offset,
    //   type,
    //   source,
    //   startDate,
    //   endDate
    // });

    // Return placeholder data for now
    const transactions = {
      transactions: [],
      total: 0,
      hasMore: false,
      limit,
      offset
    };

    res.json({
      transactions: transactions.transactions,
      total: transactions.total,
      hasMore: transactions.hasMore,
      limit,
      offset
    });
  } catch (error) {
    console.error('Error fetching user transactions:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'User account not found in the system'
      });
    }
    
    res.status(500).json({ 
      error: error.message || 'Failed to fetch transaction history.',
      code: 'TRANSACTIONS_FETCH_ERROR'
    });
  }
});

/**
 * GET /api/users/me/balance
 * Get user's current credit balance
 */
router.get('/me/balance', authMiddleware, /* ensureUserCredits() */ async (req, res) => {
  try {
    const userId = req.user.uid;
    
    // TODO: Re-enable credit service once it's properly implemented
    // const creditService = new CreditService(req.db);

    // Get current credit balance
    // const balance = await creditService.getUserCredits(userId);

    // Return placeholder data for now
    const balance = 0;

    res.json({
      userId,
      creditsBalance: balance,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching user credit balance:', error);
    
    if (error.message.includes('User not found')) {
      return res.status(404).json({
        error: 'User not found',
        code: 'USER_NOT_FOUND',
        message: 'User account not found in the system'
      });
    }
    
    res.status(500).json({ 
      error: error.message || 'Failed to fetch credit balance.',
      code: 'BALANCE_FETCH_ERROR'
    });
  }
});

module.exports = router;
