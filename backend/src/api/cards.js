const express = require('express');
const { generateCards, regenerateCardImage } = require('../services/GeminiService');

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { theme, context, numCards, stylePreset } = req.body;

  if (!theme || !context) {
    return res.status(400).json({ error: 'Theme and context are required' });
  }

  // Validate numCards (optional, default from env, min 1, max 200)
  const cardsToGenerate = numCards
    ? Math.min(Math.max(parseInt(numCards, 10), 1), 200)
    : undefined;

  // Validate stylePreset (optional, default to 'isometric', must be one of the allowed values)
  const allowedStylePresets = ['anime', 'comic-book', 'digital-art', 'enhance', 'fantasy-art', 'isometric', 'pixel-art'];
  const validStylePreset = stylePreset && allowedStylePresets.includes(stylePreset)
    ? stylePreset
    : 'isometric';

  try {
    const result = await generateCards(theme, context, cardsToGenerate, validStylePreset);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Regenerate image for a single card
router.post('/regenerate-image', async (req, res) => {
  const { card, theme, context, stylePreset } = req.body;

  if (!card || !card.title) {
    return res.status(400).json({ error: 'Card data is required' });
  }

  // Validate stylePreset (optional, default to 'isometric', must be one of the allowed values)
  const allowedStylePresets = ['anime', 'comic-book', 'digital-art', 'enhance', 'fantasy-art', 'isometric', 'pixel-art'];
  const validStylePreset = stylePreset && allowedStylePresets.includes(stylePreset)
    ? stylePreset
    : 'isometric';

  try {
    const newImageUrl = await regenerateCardImage(card, theme || '', context || '', validStylePreset);
    res.json({ image: newImageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
