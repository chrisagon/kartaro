const express = require('express');
const GeminiService = require('../services/GeminiService');

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { theme, context } = req.body;

  if (!theme || !context) {
    return res.status(400).json({ error: 'Theme and context are required' });
  }

  try {
    const cards = await GeminiService.generateCards(theme, context);
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
