const express = require('express');
const { generateCards } = require('../services/GeminiService');

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { theme, context } = req.body;

  if (!theme || !context) {
    return res.status(400).json({ error: 'Theme and context are required' });
  }

  try {
    const result = await generateCards(theme, context);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
