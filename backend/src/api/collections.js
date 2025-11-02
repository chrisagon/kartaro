const express = require('express');
const { saveCollectionToFirestore, getCollectionsFromFirestore, getCollectionByIdFromFirestore, updateCollectionInFirestore, deleteCollectionFromFirestore } = require('../services/GeminiService');
const authMiddleware = require('../middleware/auth');
const fs = require('fs');
const path = require('path');
const PdfService = require('../services/PdfService');

const router = express.Router();

// Define the path for storing images
const imagesDir = path.join(__dirname, '..', '..', '..', 'frontend', 'public', 'images', 'collections');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Get all collections for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const collections = await getCollectionsFromFirestore(userId);
    res.json(collections);
  } catch (error) {
    console.error('Error fetching collections from Firestore:', error);
    res.status(500).json({ error: 'Failed to fetch collections.' });
  }
});

// Get a single collection by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const collection = await getCollectionByIdFromFirestore(userId, req.params.id);
    res.json(collection);
  } catch (error) {
    res.status(error.message === 'Collection not found' ? 404 : 500).json({ error: error.message });
  }
});

// Update a collection by ID
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const collectionData = req.body;

    if (req.params.id !== collectionData.id) {
      return res.status(400).json({ error: 'Collection ID mismatch.' });
    }

    const updatedCollection = {
      ...collectionData,
      updatedAt: new Date().toISOString(),
    };

    const savedCollection = await updateCollectionInFirestore(userId, updatedCollection);
    res.json(savedCollection);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update collection.' });
  }
});

// Save a new collection for the authenticated user
router.post('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const collectionData = req.body;

    if (!collectionData || !collectionData.name || !collectionData.cards) {
      return res.status(400).json({ error: 'Collection name and cards are required.' });
    }

    // Add user-specific data and timestamps
    const newCollection = {
      ...collectionData,
      id: collectionData.id || Date.now().toString(),
      userId: userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const savedCollection = await saveCollectionToFirestore(userId, newCollection);
    res.status(201).json(savedCollection);
  } catch (error) {
    console.error('Error saving collection to Firestore:', error);
    res.status(500).json({ error: 'Failed to save collection.' });
  }
});

// Generate PDF for a temporary collection (POST)
router.post('/temp/pdf', authMiddleware, async (req, res) => {
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

// Delete a collection by ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    await deleteCollectionFromFirestore(userId, req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete collection.' });
  }
});

// Get PDF for a single collection by ID
router.get('/:id/pdf', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const collection = await getCollectionByIdFromFirestore(userId, req.params.id);
    const pdfBuffer = await PdfService.generatePdf(collection);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${collection.name}.pdf`);
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    if (error.message === 'Collection not found') {
      return res.status(404).json({ error: 'Collection not found' });
    }
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

module.exports = router;