const express = require('express');
const authMiddleware = require('../middleware/auth');
const { applyAdminCreditAdjustment, getUserCreditTransactions } = require('../services/LocalDatabaseService');

const router = express.Router();

const parseAdminUserIds = () => {
  const raw = process.env.ADMIN_USER_IDS;
  if (!raw) {
    return [];
  }

  return raw
    .split(',')
    .map((value) => value.trim())
    .filter((value) => Boolean(value));
};

const isAdmin = (user) => {
  if (!user || !user.uid) {
    return false;
  }

  const adminIds = parseAdminUserIds();
  if (adminIds.length === 0) {
    return false;
  }

  return adminIds.includes(user.uid);
};

router.use(authMiddleware);

router.post('/users/:userId/credits/adjust', async (req, res) => {
  try {
    if (!isAdmin(req.user)) {
      return res.status(403).json({ error: 'Forbidden', code: 'NOT_ADMIN' });
    }

    const targetUserId = req.params.userId;
    const { delta, source, reason } = req.body || {};

    if (typeof delta !== 'number' || !Number.isFinite(delta) || delta === 0) {
      return res.status(400).json({ error: 'A non-zero numeric delta is required.' });
    }

    const usage = await applyAdminCreditAdjustment(targetUserId, {
      delta,
      source,
      reason,
    });

    res.json({
      creditsBalance: usage.creditsBalance,
      totalImagesGenerated: usage.totalImagesGenerated,
      totalCardsGenerated: usage.totalCardsGenerated,
      totalCollectionsSaved: usage.totalCollectionsSaved,
      totalPdfsExported: usage.totalPdfsExported,
      totalCreditsSpent: usage.totalCreditsSpent,
    });
  } catch (error) {
    console.error('Error applying admin credit adjustment:', error);
    const status = error.status || 500;
    res.status(status).json({ error: error.message || 'Failed to adjust credits.' });
  }
});

router.get('/users/:userId/credit-transactions', async (req, res) => {
  try {
    if (!isAdmin(req.user)) {
      return res.status(403).json({ error: 'Forbidden', code: 'NOT_ADMIN' });
    }

    const targetUserId = req.params.userId;
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const offset = req.query.offset ? Number(req.query.offset) : undefined;

    const transactions = await getUserCreditTransactions(targetUserId, { limit, offset });

    res.json(transactions);
  } catch (error) {
    console.error('Error fetching credit transactions:', error);
    const status = error.status || 500;
    res.status(status).json({ error: error.message || 'Failed to fetch credit transactions.' });
  }
});

module.exports = router;
