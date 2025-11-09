const express = require('express');
const { generateCards, generateCardsTextOnly, regenerateCardImage, generateContextFromThemeAndPublic } = require('../services/GeminiService');
const pdfService = require('../services/PdfService');

const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Nouvelle route pour générer uniquement le texte des cartes
router.post('/generate-text', authMiddleware, async (req, res) => {
    const { theme, context, numCards } = req.body;

  if (!theme) {
        return res.status(400).json({ error: 'Le thème est requis.' });
  }

  try {
    const cards = await generateCardsTextOnly(theme, context, numCards);
        res.json({ cards });
  } catch (error) {
        console.error('Erreur lors de la génération du texte des cartes:', error);
    res.status(500).json({ error: error.message });
  }
});

// Nouvelle route pour générer l'image d'une seule carte
router.post('/generate-image', authMiddleware, async (req, res) => {
    const { card, theme, context, stylePreset } = req.body;

  if (!card || !theme) {
        return res.status(400).json({ error: 'Les données de la carte et le thème sont requis.' });
  }

  try {
    const imageUrl = await regenerateCardImage(card, theme, context, stylePreset);
        res.json({ imageUrl });
  } catch (error) {
        console.error('Erreur lors de la génération de limage de la carte:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route pour générer les cartes
router.post('/generate', authMiddleware, async (req, res) => {
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
router.post('/regenerate-image', authMiddleware, async (req, res) => {
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

// Route pour générer le contexte
router.post('/generate-context', authMiddleware, async (req, res) => {
    const { theme, publicTarget } = req.body;

  if (!theme || !publicTarget) {
        return res.status(400).json({ error: 'Le thème et le public sont requis.' });
  }

  try {
    const context = await generateContextFromThemeAndPublic(theme, publicTarget);
        res.json({ context });
  } catch (error) {
        console.error('Erreur lors de la génération du contexte:', error);
    res.status(500).json({ error: error.message });
  }
});

// Generate a PDF for unsaved cards with metadata
router.post('/generate-pdf', authMiddleware, async (req, res) => {
    const { cards, metadata = {}, name, description } = req.body || {};

  if (!Array.isArray(cards) || cards.length === 0) {
        return res.status(400).json({ error: 'Cards are required to generate a PDF.' });
  }

  const { theme = '', publicTarget = '', context = '' } = metadata || {};
  const collectionName = name || theme || 'Collection';

  const collectionPayload = {
        name: collectionName,
        description: description || '',
        cards,
        theme,
        publicTarget,
        context,
  };

  try {
    const pdfBuffer = await pdfService.generatePdf(collectionPayload, {
            assetBaseUrl: process.env.PDF_ASSET_BASE_URL,
    });

    const safeFileName = `${collectionName}`
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'collection';

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${safeFileName}.pdf`);
        res.send(pdfBuffer);
  } catch (error) {
        console.error('Error generating PDF for cards:', error);
    res.status(500).json({ error: 'Failed to generate PDF.' });
  }
});

module.exports = router;
