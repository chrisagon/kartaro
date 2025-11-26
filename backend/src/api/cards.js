const express = require('express');
const { generateCards, generateCardsTextOnly, regenerateCardImage, generateContextFromThemeAndPublic } = require('../services/GeminiService');
const pdfService = require('../services/PdfService');
const { requireCredits, consumeCredits } = require('../middleware/standaloneCredits');
// const CreditService = require('../services/CreditService');

const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Nouvelle route pour générer uniquement le texte des cartes
router.post('/generate-text', authMiddleware, requireCredits('context_generation', { allowZero: true }), async (req, res) => {
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
router.post('/generate-image', 
  authMiddleware, 
  /* requireCredits('image_regeneration', { numImages: 1 }),
  consumeCredits('image_regeneration', { 
    source: 'image_generation',
    payload: { operation: 'single_image_generation' }
  }), */
  async (req, res) => {
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

// Route pour générer les cartes en streaming
router.post('/generate', 
  authMiddleware, 
  // TODO: Re-enable credit middleware once it's properly implemented
  // requireCredits('image_generation', { numImages: (req) => req.body.numCards || 10 }),
  // consumeCredits('image_generation', { 
  //   numImages: (req) => req.body.numCards || 10,
  //   source: 'image_generation',
  //   payload: { operation: 'batch_image_generation' }
  // }),
  async (req, res) => {
    const { theme, context, numCards, stylePreset } = req.body;

  if (!theme || !context) {
        return res.status(400).json({ error: 'Theme and context are required' });
  }

  const cardsToGenerate = numCards ? Math.min(Math.max(parseInt(numCards, 10), 1), 200) : undefined;
  const allowedStylePresets = ['anime', 'comic-book', 'digital-art', 'enhance', 'fantasy-art', 'isometric', 'pixel-art'];
  const validStylePreset = stylePreset && allowedStylePresets.includes(stylePreset) ? stylePreset : 'isometric';

  try {
        res.setHeader('Content-Type', 'application/x-ndjson');
        res.setHeader('Transfer-Encoding', 'chunked');

    const cardStream = generateCards(theme, context, cardsToGenerate, validStylePreset);

    for await (const chunk of cardStream) {
            res.write(JSON.stringify(chunk) + '\n');
    }

        res.end();
  } catch (error) {
        console.error('Error in card generation stream:', error.message);
    if (!res.headersSent) {
            res.status(500).json({ error: 'Failed to generate cards.' });
    } else {
            res.end();
    }
  }
});

// Regenerate image for a single card
router.post('/regenerate-image', 
  authMiddleware, 
  /* requireCredits('image_regeneration', { numImages: 1 }),
  consumeCredits('image_regeneration', { 
    source: 'image_generation',
    payload: { operation: 'image_regeneration' }
  }), */
  async (req, res) => {
    const { card, theme, context, stylePreset } = req.body;

  if (!card || !card.title) {
        return res.status(400).json({ error: 'Card data is required' });
  }

  const allowedStylePresets = ['anime', 'comic', 'digital-art', 'enhance', 'fantasy-art', 'isometric', 'pixel-art'];
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
router.post('/generate-context', 
  authMiddleware, 
  /* requireCredits('context_generation'),
  consumeCredits('context_generation', { 
    source: 'context_generation',
    payload: { operation: 'context_generation' }
  }), */
  async (req, res) => {
  const { theme, publicTarget } = req.body;

  if (!theme || !publicTarget) {
    return res.status(400).json({ error: 'Le thème et le public sont requis.' });
  }

  try {
    const context = await generateContextFromThemeAndPublic(theme, publicTarget);
    res.json({ context });
  } catch (error) {
    console.error('Erreur lors de la génération du contexte:', error);
    res.status(500).json({ error: error.message || 'Failed to generate context.' });
  }
});

// Generate a PDF for unsaved cards with metadata
router.post('/generate-pdf', 
  authMiddleware, 
  /* requireCredits('pdf_export', { allowZero: true }),
  consumeCredits('pdf_export', { 
    source: 'pdf_export',
    payload: { operation: 'pdf_export' }
  }), */
  async (req, res) => {
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
