const express = require('express');
const dbPromise = require('../services/DatabaseService'); // Renommé pour plus de clarté
const fs = require('fs');
const path = require('path');
const PdfService = require('../services/PdfService');

const router = express.Router();

// Define the path for storing images
const imagesDir = path.join(__dirname, '..', '..', '..', 'frontend', 'public', 'images', 'collections');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Get all collections
router.get('/', async (req, res) => {
  const db = await dbPromise;
  // Return only id and name for the list view
  const collectionsMetadata = db.data.collections.map(({ id, name }) => ({ id, name }));
  res.json(collectionsMetadata);
});

// Get a single collection by ID
router.get('/:id', async (req, res) => {
  const db = await dbPromise;
  const collection = db.data.collections.find(c => c.id === req.params.id);
  if (collection) {
    res.json(collection);
  } else {
    res.status(404).json({ error: 'Collection not found' });
  }
});

// Update a collection by ID
router.put('/:id', async (req, res) => {
  const db = await dbPromise;
  const { name, cards } = req.body;

  if (!name || !cards) {
    return res.status(400).json({ error: 'Name and cards are required' });
  }

  const collectionIndex = db.data.collections.findIndex(c => c.id === req.params.id);
  if (collectionIndex === -1) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  const processedCards = cards.map(card => {
    if (card.image && card.image.startsWith('data:image/')) {
      const matches = card.image.match(/^data:image\/([a-zA-Z+]+);base64,(.*)$/);
      if (matches && matches.length === 3) {
        const imageType = matches[1];
        const extension = imageType === 'svg+xml' ? 'svg' : imageType;
        const base64Data = matches[2];
        const imageBuffer = Buffer.from(base64Data, 'base64');
        const imageName = `${card.id || Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`;
        const imagePath = path.join(imagesDir, imageName);

        fs.writeFileSync(imagePath, imageBuffer);

        // Replace the base64 string with the URL path
        return { ...card, image: `/images/collections/${imageName}` };
      }
    }
    return card;
  });

  const updatedCollection = { id: req.params.id, name, cards: processedCards };
  db.data.collections[collectionIndex] = updatedCollection;
  await db.write();

  res.json(updatedCollection);
});

router.post('/', async (req, res) => {
  const db = await dbPromise; // Attend que la base de données soit prête
  const { name, cards } = req.body;

  if (!name || !cards) {
    return res.status(400).json({ error: 'Name and cards are required' });
  }

  const collectionId = Date.now().toString();
  const processedCards = cards.map(card => {
    if (card.image && card.image.startsWith('data:image/')) {
      const matches = card.image.match(/^data:image\/([a-zA-Z+]+);base64,(.*)$/);
      if (matches && matches.length === 3) {
                const imageType = matches[1];
        const extension = imageType === 'svg+xml' ? 'svg' : imageType;
        const base64Data = matches[2];
        const imageBuffer = Buffer.from(base64Data, 'base64');
        const imageName = `${card.id || Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`;
        const imagePath = path.join(imagesDir, imageName);
        
        fs.writeFileSync(imagePath, imageBuffer);

        // Replace the base64 string with the URL path
        return { ...card, image: `/images/collections/${imageName}` };
      }
    }
    return card;
  });

  const newCollection = { id: collectionId, name, cards: processedCards };

  db.data.collections.push(newCollection);
  await db.write();

  res.status(201).json(newCollection);
});

// Generate PDF for a temporary collection (POST)
router.post('/temp/pdf', async (req, res) => {
  try {
    console.log('PDF generation request received');
    console.log('Request body:', JSON.stringify(req.body, null, 2));

    const { name, cards } = req.body;

    if (!name || !cards || !Array.isArray(cards)) {
      console.error('Invalid request data:', { name: !!name, cards: !!cards, isArray: Array.isArray(cards) });
      return res.status(400).json({ error: 'Name and cards array are required' });
    }

    console.log(`Processing PDF for collection "${name}" with ${cards.length} cards`);

    // Create a temporary collection object
    const tempCollection = { id: 'temp', name, cards };

    console.log('Calling PdfService.generatePdf...');
    const pdfBuffer = await PdfService.generatePdf(tempCollection);
    console.log(`PDF generated successfully, size: ${pdfBuffer.length} bytes`);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${name}.pdf`);
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating temporary PDF:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

// Get PDF for a single collection by ID
router.get('/:id/pdf', async (req, res) => {
  const db = await dbPromise;
  const collection = db.data.collections.find(c => c.id === req.params.id);
  if (collection) {
    try {
      const pdfBuffer = await PdfService.generatePdf(collection);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${collection.name}.pdf`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  } else {
    res.status(404).json({ error: 'Collection not found' });
  }
});

module.exports = router;