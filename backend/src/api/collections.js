const express = require('express');
const dbPromise = require('../services/DatabaseService'); // Renommé pour plus de clarté

const router = express.Router();

// Get all collections
router.get('/', async (req, res) => {
  const db = await dbPromise; // Attend que la base de données soit prête
  res.json(db.data.collections);
});

router.post('/', async (req, res) => {
  const db = await dbPromise; // Attend que la base de données soit prête
  const { name, cards } = req.body;

  if (!name || !cards) {
    return res.status(400).json({ error: 'Name and cards are required' });
  }

  const newCollection = { id: Date.now().toString(), name, cards };

  db.data.collections.push(newCollection);
  await db.write();

  res.status(201).json(newCollection);
});

module.exports = router;