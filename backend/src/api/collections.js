const express = require('express');
const { saveCollection, getCollections, getCollectionById, updateCollection, deleteCollection } = require('../services/LocalDatabaseService');
const authMiddleware = require('../middleware/auth');
const { uploadImageToStorage } = require('../services/R2Service');
const pdfService = require('../services/PdfService');

const toArrayBuffer = (payload) => {
  if (!payload) {
    return new ArrayBuffer(0);
  }

  if (payload instanceof ArrayBuffer) {
    return payload;
  }

  if (ArrayBuffer.isView(payload)) {
    return payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength);
  }

  if (typeof payload === 'string') {
    return new TextEncoder().encode(payload).buffer;
  }

  if (typeof payload === 'object' && Buffer?.isBuffer?.(payload)) {
    const view = new Uint8Array(payload);
    return view.buffer.slice(view.byteOffset, view.byteOffset + view.byteLength);
  }

  throw new Error('Unsupported PDF payload type');
};

const createCollectionsRouter = (pdfService) => {
  const router = express.Router();

  // Get all collections for the authenticated user
  router.get('/', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.uid;
      const collections = await getCollections(userId);
      res.json(collections);
    } catch (error) {
      console.error('Error fetching collections:', error);
      res.status(500).json({ error: 'Failed to fetch collections.' });
    }
  });

  // Get a single collection by ID
  router.get('/:id', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.uid;
      const collection = await getCollectionById(userId, req.params.id);
      res.json(collection);
    } catch (error) {
      const status = error.message === 'Collection not found' ? 404 : 500;
      res.status(status).json({ error: error.message });
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

      const savedCollection = await updateCollection(userId, updatedCollection);
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
        userId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // First, upload images to R2 and get their URLs
      const cardsWithImageUrls = await Promise.all(
        newCollection.cards.map(async (card) => {
          try {
            const imageUrl = await uploadImageToStorage(card.image, userId, newCollection.id);
            return { ...card, image: imageUrl };
          } catch (error) {
            console.error(`Failed to upload image for card "${card.title}":`, error);
            return card; // Keep original base64 if upload fails
          }
        })
      );

      const collectionToSave = {
        ...newCollection,
        cards: cardsWithImageUrls,
      };

      const savedCollection = await saveCollection(userId, collectionToSave);
      res.status(201).json(savedCollection);
    } catch (error) {
      console.error('Error saving collection:', error);
      res.status(500).json({ error: 'Failed to save collection.' });
    }
  });

  // Delete a collection by ID
  router.delete('/:id', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.uid;
      await deleteCollection(userId, req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete collection.' });
    }
  });

  // Generate PDF for a collection by ID
  router.get('/:id/pdf', authMiddleware, async (req, res) => {
    try {
      const userId = req.user.uid;
      const collection = await getCollectionById(userId, req.params.id);
      const pdfBuffer = await pdfService.generatePdf(collection, {
        assetBaseUrl: process.env.PDF_ASSET_BASE_URL,
      });
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${collection.name}.pdf`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  });

  return router;
};

module.exports = createCollectionsRouter(pdfService);