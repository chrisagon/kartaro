/**
 * Payment Service
 * 
 * Handles Stripe integration for credit pack purchases.
 * Uses Stripe Checkout for PCI compliance.
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class PaymentService {
  constructor(db, creditService) {
    this.db = db;
    this.creditService = creditService;
  }

  /**
   * Create Stripe Checkout session for credit pack purchase
   * @param {Object} purchaseData - Purchase data
   * @param {string} purchaseData.userId - User ID
   * @param {number} purchaseData.packId - Credit pack ID
   * @param {string} purchaseData.successUrl - Success redirect URL
   * @param {string} purchaseData.cancelUrl - Cancel redirect URL
   * @returns {Promise<Object>} Checkout session info
   */
  async createCheckoutSession(purchaseData) {
    const { userId, packId, successUrl, cancelUrl } = purchaseData;

    // Validate input
    if (!userId || !packId || !successUrl || !cancelUrl) {
      throw new Error('Missing required fields: userId, packId, successUrl, cancelUrl');
    }

    // Get credit pack information
    const packStmt = this.db.prepare(`
      SELECT id, name, credit_amount, price_cents, is_active
      FROM credit_packs 
      WHERE id = ? AND is_active = TRUE
    `);

    const pack = packStmt.get(packId);
    
    if (!pack) {
      throw new Error('Credit pack not found or inactive');
    }

    // Create payment transaction record
    const paymentTransactionId = `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const createTransactionStmt = this.db.prepare(`
      INSERT INTO payment_transactions (id, user_id, amount_cents, status)
      VALUES (?, ?, ?, ?)
    `);

    createTransactionStmt.run(paymentTransactionId, userId, pack.price_cents, 'pending');

    try {
      // Create Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: pack.name,
                description: `${pack.credit_amount / 5} credits pack`,
                images: [], // Add product images if available
              },
              unit_amount: pack.price_cents,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: null, // Let Stripe handle email collection
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['FR', 'BE', 'CH', 'LU'], // Allowed shipping countries
        },
        metadata: {
          user_id: userId,
          pack_id: packId.toString(),
          payment_transaction_id: paymentTransactionId,
          credits_included: (pack.credit_amount / 5).toString(),
        },
        payment_intent_data: {
          metadata: {
            user_id: userId,
            pack_id: packId.toString(),
            payment_transaction_id: paymentTransactionId,
            credits_included: (pack.credit_amount / 5).toString(),
          },
        },
        expires_at: Math.floor(Date.now() / 1000) + (30 * 60), // 30 minutes expiration
      });

      // Update payment transaction with Stripe IDs
      const updateTransactionStmt = this.db.prepare(`
        UPDATE payment_transactions 
        SET stripe_session_id = ?, stripe_payment_intent_id = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `);

      updateTransactionStmt.run(session.id, session.payment_intent, paymentTransactionId);

      return {
        sessionId: session.id,
        checkoutUrl: session.url,
        paymentIntentId: session.payment_intent,
        paymentTransactionId,
        packInfo: {
          id: pack.id,
          name: pack.name,
          credits: pack.credit_amount / 5,
          priceEuros: (pack.price_cents / 100).toFixed(2),
        }
      };
    } catch (stripeError) {
      // Update transaction status to failed
      const updateTransactionStmt = this.db.prepare(`
        UPDATE payment_transactions 
        SET status = 'failed', updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `);

      updateTransactionStmt.run(paymentTransactionId);

      throw new Error(`Stripe checkout session creation failed: ${stripeError.message}`);
    }
  }

  /**
   * Verify Stripe webhook signature
   * @param {string} signature - Stripe signature header
   * @param {string} payload - Raw webhook payload
   * @returns {Promise<boolean>} True if signature is valid
   */
  async verifyWebhookSignature(signature, payload) {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.warn('STRIPE_WEBHOOK_SECRET not configured, skipping signature verification');
      return true; // Allow in development if no secret configured
    }

    try {
      const event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
      return true;
    } catch (error) {
      console.error('Webhook signature verification failed:', error.message);
      return false;
    }
  }

  /**
   * Process Stripe webhook event
   * @param {Object} event - Stripe event object
   * @returns {Promise<Object>} Processing result
   */
  async processWebhookEvent(event) {
    const { type, data } = event;

    switch (type) {
      case 'payment_intent.succeeded':
        return this.handlePaymentSuccess(data.object);
      
      case 'payment_intent.payment_failed':
        return this.handlePaymentFailure(data.object);
      
      case 'checkout.session.completed':
        return this.handleCheckoutCompleted(data.object);
      
      case 'checkout.session.expired':
        return this.handleCheckoutExpired(data.object);
      
      default:
        console.log(`Unhandled webhook event type: ${type}`);
        return { received: true, event: type, status: 'ignored' };
    }
  }

  /**
   * Handle successful payment
   * @param {Object} paymentIntent - Stripe payment intent
   * @returns {Promise<Object>} Processing result
   */
  async handlePaymentSuccess(paymentIntent) {
    const { metadata, id: paymentIntentId, amount } = paymentIntent;
    
    if (!metadata || !metadata.user_id || !metadata.pack_id) {
      throw new Error('Missing required metadata in payment intent');
    }

    const { user_id: userId, pack_id: packId, payment_transaction_id } = metadata;

    // Check if payment was already processed
    const existingTransactionStmt = this.db.prepare(`
      SELECT id, status FROM payment_transactions 
      WHERE stripe_payment_intent_id = ?
    `);

    const existingTransaction = existingTransactionStmt.get(paymentIntentId);
    
    if (existingTransaction && existingTransaction.status === 'completed') {
      console.log(`Payment ${paymentIntentId} already processed, skipping`);
      return { received: true, event: 'payment_intent.succeeded', status: 'already_processed' };
    }

    // Get credit pack information
    const packStmt = this.db.prepare(`
      SELECT id, name, credit_amount, price_cents
      FROM credit_packs 
      WHERE id = ?
    `);

    const pack = packStmt.get(parseInt(packId));
    
    if (!pack) {
      throw new Error(`Credit pack ${packId} not found`);
    }

    // Start transaction for credit addition
    const transaction = this.db.transaction(async () => {
      // Update payment transaction status
      let updateStmt;
      if (payment_transaction_id) {
        updateStmt = this.db.prepare(`
          UPDATE payment_transactions 
          SET status = 'completed', updated_at = CURRENT_TIMESTAMP
          WHERE id = ?
        `);
        updateStmt.run(payment_transaction_id);
      }

      // Add credits to user account
      const creditsToAdd = pack.credit_amount / 5; // Convert to display format
      
      const creditResult = await this.creditService.addCredits(
        userId,
        creditsToAdd,
        'stripe',
        {
          pack_name: pack.name,
          pack_id: pack.id,
          payment_intent_id: paymentIntentId,
          amount_cents: amount,
          credits_added: creditsToAdd
        }
      );

      return {
        received: true,
        event: 'payment_intent.succeeded',
        status: 'completed',
        credits_added: creditsToAdd,
        user_id: userId,
        payment_transaction_id: payment_transaction_id,
        credit_transaction_id: creditResult.transactionId
      };
    });

    return await transaction();
  }

  /**
   * Handle failed payment
   * @param {Object} paymentIntent - Stripe payment intent
   * @returns {Promise<Object>} Processing result
   */
  async handlePaymentFailure(paymentIntent) {
    const { metadata, id: paymentIntentId, last_payment_error } = paymentIntent;
    
    if (!metadata || !metadata.payment_transaction_id) {
      console.log(`Payment ${paymentIntentId} failed but no transaction ID found`);
      return { received: true, event: 'payment_intent.payment_failed', status: 'failed' };
    }

    const { payment_transaction_id } = metadata;

    // Update payment transaction status
    const updateStmt = this.db.prepare(`
      UPDATE payment_transactions 
      SET status = 'failed', updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    const result = updateStmt.run(payment_transaction_id);

    return {
      received: true,
      event: 'payment_intent.payment_failed',
      status: 'failed',
      payment_transaction_id,
      error_message: last_payment_error?.message || 'Payment failed',
      updated: result.changes > 0
    };
  }

  /**
   * Handle checkout session completion
   * @param {Object} session - Stripe checkout session
   * @returns {Promise<Object>} Processing result
   */
  async handleCheckoutCompleted(session) {
    const { metadata, payment_intent, id: sessionId } = session;
    
    if (!metadata || !metadata.payment_transaction_id) {
      console.log(`Checkout session ${sessionId} completed but no transaction ID found`);
      return { received: true, event: 'checkout.session.completed', status: 'completed' };
    }

    // Payment is handled by payment_intent.succeeded event
    // This event just confirms the checkout flow
    return {
      received: true,
      event: 'checkout.session.completed',
      status: 'completed',
      session_id: sessionId,
      payment_intent_id: payment_intent
    };
  }

  /**
   * Handle checkout session expiration
   * @param {Object} session - Stripe checkout session
   * @returns {Promise<Object>} Processing result
   */
  async handleCheckoutExpired(session) {
    const { metadata, id: sessionId } = session;
    
    if (!metadata || !metadata.payment_transaction_id) {
      console.log(`Checkout session ${sessionId} expired but no transaction ID found`);
      return { received: true, event: 'checkout.session.expired', status: 'expired' };
    }

    const { payment_transaction_id } = metadata;

    // Update payment transaction status
    const updateStmt = this.db.prepare(`
      UPDATE payment_transactions 
      SET status = 'failed', updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    const result = updateStmt.run(payment_transaction_id);

    return {
      received: true,
      event: 'checkout.session.expired',
      status: 'expired',
      payment_transaction_id,
      updated: result.changes > 0
    };
  }

  /**
   * Get payment transaction by ID
   * @param {string} transactionId - Transaction ID
   * @returns {Promise<Object|null>} Transaction record or null
   */
  async getPaymentTransaction(transactionId) {
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

    const transaction = stmt.get(transactionId);
    return transaction || null;
  }

  /**
   * Get payment transactions for a user
   * @param {string} userId - User ID
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Transaction list with pagination
   */
  async getUserPaymentTransactions(userId, options = {}) {
    const { limit = 20, offset = 0, status } = options;
    
    let whereClause = 'WHERE user_id = ?';
    const values = [userId];

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
      ORDER BY created_at DESC
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
   * Get payment statistics (admin only)
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Payment statistics
   */
  async getPaymentStats(options = {}) {
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
   * Create refund for a payment
   * @param {string} paymentIntentId - Stripe payment intent ID
   * @param {number} amount - Amount to refund in cents (optional, full refund if not provided)
   * @param {string} reason - Refund reason
   * @returns {Promise<Object>} Refund result
   */
  async createRefund(paymentIntentId, amount, reason) {
    try {
      const refund = await stripe.refunds.create({
        payment_intent: paymentIntentId,
        amount: amount, // If not provided, full refund
        reason: reason || 'requested_by_customer',
        metadata: {
          refund_reason: reason || 'Customer requested refund'
        }
      });

      // Update payment transaction status
      const updateStmt = this.db.prepare(`
        UPDATE payment_transactions 
        SET status = 'refunded', updated_at = CURRENT_TIMESTAMP
        WHERE stripe_payment_intent_id = ?
      `);

      const result = updateStmt.run(paymentIntentId);

      return {
        refund_id: refund.id,
        payment_intent_id: paymentIntentId,
        amount_cents: refund.amount,
        status: refund.status,
        updated_transactions: result.changes
      };
    } catch (stripeError) {
      throw new Error(`Refund creation failed: ${stripeError.message}`);
    }
  }

  /**
   * Get Stripe payment intent details
   * @param {string} paymentIntentId - Stripe payment intent ID
   * @returns {Promise<Object>} Payment intent details
   */
  async getPaymentIntent(paymentIntentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      return paymentIntent;
    } catch (stripeError) {
      throw new Error(`Failed to retrieve payment intent: ${stripeError.message}`);
    }
  }

  /**
   * Get Stripe checkout session details
   * @param {string} sessionId - Stripe checkout session ID
   * @returns {Promise<Object>} Checkout session details
   */
  async getCheckoutSession(sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      return session;
    } catch (stripeError) {
      throw new Error(`Failed to retrieve checkout session: ${stripeError.message}`);
    }
  }
}

module.exports = PaymentService;