const express = require('express');
const authMiddleware = require('../middleware/auth');
const PaymentService = require('../services/PaymentService');
const CreditService = require('../services/CreditService');
const { getCreditPackById } = require('../services/LocalDatabaseService');

const router = express.Router();

/**
 * POST /api/payments/purchase-pack
 * Create a Stripe Checkout session for credit pack purchase
 */
router.post('/purchase-pack', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const { packId, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!packId) {
      return res.status(400).json({
        error: 'Pack ID is required',
        code: 'MISSING_PACK_ID',
        message: 'Please specify which credit pack to purchase'
      });
    }

    if (!successUrl || !cancelUrl) {
      return res.status(400).json({
        error: 'Redirect URLs are required',
        code: 'MISSING_REDIRECT_URLS',
        message: 'Both successUrl and cancelUrl are required for checkout'
      });
    }

    // Validate URLs
    try {
      new URL(successUrl);
      new URL(cancelUrl);
    } catch (urlError) {
      return res.status(400).json({
        error: 'Invalid redirect URLs',
        code: 'INVALID_REDIRECT_URLS',
        message: 'Success and cancel URLs must be valid URLs'
      });
    }

    // Initialize services
    const paymentService = new PaymentService(req.db, new CreditService(req.db));

    // Create checkout session
    const checkoutSession = await paymentService.createCheckoutSession({
      userId,
      packId: parseInt(packId),
      successUrl,
      cancelUrl
    });

    res.json({
      sessionId: checkoutSession.sessionId,
      checkoutUrl: checkoutSession.checkoutUrl,
      paymentIntentId: checkoutSession.paymentIntentId,
      paymentTransactionId: checkoutSession.paymentTransactionId,
      pack: checkoutSession.packInfo
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    if (error.message.includes('Credit pack not found')) {
      return res.status(404).json({
        error: 'Credit pack not found',
        code: 'PACK_NOT_FOUND',
        message: 'The specified credit pack does not exist or is inactive'
      });
    }
    
    if (error.message.includes('Stripe checkout session creation failed')) {
      return res.status(500).json({
        error: 'Payment processing failed',
        code: 'PAYMENT_PROCESSING_ERROR',
        message: 'Failed to create payment session. Please try again later.'
      });
    }
    
    res.status(500).json({
      error: 'Failed to create checkout session',
      code: 'CHECKOUT_SESSION_ERROR',
      message: error.message || 'An unexpected error occurred while creating the checkout session'
    });
  }
});

/**
 * POST /api/payments/webhook
 * Handle Stripe webhook events for payment processing
 */
router.post('/webhook', async (req, res) => {
  try {
    const signature = req.headers['stripe-signature'];
    const payload = req.body;

    if (!signature) {
      console.warn('Webhook received without Stripe signature');
      return res.status(400).json({
        error: 'Missing signature',
        code: 'MISSING_SIGNATURE',
        message: 'Stripe signature is required for webhook processing'
      });
    }

    // Initialize payment service
    const paymentService = new PaymentService(req.db, new CreditService(req.db));

    // Verify webhook signature
    const isValidSignature = await paymentService.verifyWebhookSignature(signature, payload);
    
    if (!isValidSignature) {
      console.error('Invalid webhook signature received');
      return res.status(401).json({
        error: 'Invalid signature',
        code: 'INVALID_SIGNATURE',
        message: 'Webhook signature verification failed'
      });
    }

    // Parse the event
    let event;
    try {
      event = JSON.parse(payload);
    } catch (parseError) {
      console.error('Failed to parse webhook payload:', parseError);
      return res.status(400).json({
        error: 'Invalid payload',
        code: 'INVALID_PAYLOAD',
        message: 'Webhook payload could not be parsed'
      });
    }

    // Process the webhook event
    const result = await paymentService.processWebhookEvent(event);

    console.log(`Webhook processed: ${event.type} - ${result.status}`);

    res.json({ received: true, processed: result });
  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Always return 200 for webhooks to prevent Stripe from retrying
    // Log the error for manual investigation
    res.status(200).json({
      received: true,
      processed: false,
      error: error.message,
      status: 'error'
    });
  }
});

/**
 * GET /api/payments/transactions
 * Get user's payment transaction history
 */
router.get('/transactions', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const paymentService = new PaymentService(req.db, new CreditService(req.db));

    // Parse query parameters
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const offset = Math.max(parseInt(req.query.offset) || 0, 0);
    const status = req.query.status;

    // Get payment transactions
    const transactions = await paymentService.getUserPaymentTransactions(userId, {
      limit,
      offset,
      status
    });

    res.json({
      transactions: transactions.transactions,
      total: transactions.total,
      hasMore: transactions.has_more,
      limit,
      offset
    });
  } catch (error) {
    console.error('Error fetching payment transactions:', error);
    
    res.status(500).json({
      error: 'Failed to fetch payment transactions',
      code: 'PAYMENT_TRANSACTIONS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching payment transactions'
    });
  }
});

/**
 * GET /api/payments/transaction/:transactionId
 * Get details of a specific payment transaction
 */
router.get('/transaction/:transactionId', authMiddleware, async (req, res) => {
  try {
    const { transactionId } = req.params;
    const userId = req.user.uid;
    const paymentService = new PaymentService(req.db, new CreditService(req.db));

    // Get transaction details
    const transaction = await paymentService.getPaymentTransaction(transactionId);
    
    if (!transaction) {
      return res.status(404).json({
        error: 'Transaction not found',
        code: 'TRANSACTION_NOT_FOUND',
        message: 'The specified payment transaction does not exist'
      });
    }

    // Verify user owns this transaction
    if (transaction.user_id !== userId) {
      return res.status(403).json({
        error: 'Access denied',
        code: 'ACCESS_DENIED',
        message: 'You do not have permission to view this transaction'
      });
    }

    res.json(transaction);
  } catch (error) {
    console.error('Error fetching payment transaction:', error);
    
    res.status(500).json({
      error: 'Failed to fetch payment transaction',
      code: 'PAYMENT_TRANSACTION_ERROR',
      message: error.message || 'An unexpected error occurred while fetching the payment transaction'
    });
  }
});

/**
 * GET /api/payments/credit-packs
 * Get available credit packs for purchase
 */
router.get('/credit-packs', async (req, res) => {
  try {
    const { getCreditPacks } = require('../services/LocalDatabaseService');
    
    // Get all active credit packs
    const creditPacks = await getCreditPacks();

    res.json({
      creditPacks,
      total: creditPacks.length
    });
  } catch (error) {
    console.error('Error fetching credit packs:', error);
    
    res.status(500).json({
      error: 'Failed to fetch credit packs',
      code: 'CREDIT_PACKS_ERROR',
      message: error.message || 'An unexpected error occurred while fetching credit packs'
    });
  }
});

/**
 * GET /api/payments/credit-packs/:packId
 * Get details of a specific credit pack
 */
router.get('/credit-packs/:packId', async (req, res) => {
  try {
    const { packId } = req.params;
    
    // Get credit pack details
    const creditPack = await getCreditPackById(parseInt(packId));
    
    if (!creditPack) {
      return res.status(404).json({
        error: 'Credit pack not found',
        code: 'PACK_NOT_FOUND',
        message: 'The specified credit pack does not exist'
      });
    }

    res.json(creditPack);
  } catch (error) {
    console.error('Error fetching credit pack:', error);
    
    res.status(500).json({
      error: 'Failed to fetch credit pack',
      code: 'CREDIT_PACK_ERROR',
      message: error.message || 'An unexpected error occurred while fetching the credit pack'
    });
  }
});

/**
 * POST /api/payments/refund/:paymentIntentId
 * Request a refund for a payment (admin only)
 */
router.post('/refund/:paymentIntentId', authMiddleware, async (req, res) => {
  try {
    const { paymentIntentId } = req.params;
    const { amount, reason } = req.body;
    const userId = req.user.uid;

    // Check if user is admin
    const adminMiddleware = require('../middleware/admin');
    await new Promise((resolve, reject) => {
      adminMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    const paymentService = new PaymentService(req.db, new CreditService(req.db));

    // Process refund
    const refund = await paymentService.createRefund(
      paymentIntentId,
      amount ? parseInt(amount) * 100 : undefined, // Convert euros to cents
      reason || 'Requested by admin'
    );

    res.json({
      refundId: refund.refund_id,
      paymentIntentId: refund.payment_intent_id,
      amountCents: refund.amount_cents,
      amountEuros: (refund.amount_cents / 100).toFixed(2),
      status: refund.status,
      updatedTransactions: refund.updated_transactions
    });
  } catch (error) {
    console.error('Error processing refund:', error);
    
    if (error.message.includes('Admin access required')) {
      return res.status(403).json({
        error: 'Admin access required',
        code: 'ADMIN_REQUIRED',
        message: 'This endpoint requires administrator privileges'
      });
    }
    
    res.status(500).json({
      error: 'Failed to process refund',
      code: 'REFUND_ERROR',
      message: error.message || 'An unexpected error occurred while processing the refund'
    });
  }
});

module.exports = router;