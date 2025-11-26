const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

// Mock services before importing APIs
const mockGenerateCards = jest.fn();
const mockSaveCollection = jest.fn();
const mockUploadImage = jest.fn();
const mockGetUserUsage = jest.fn().mockResolvedValue({
  userId: 'test-user',
  creditsBalance: 999,
  totalImagesGenerated: 0,
  totalCardsGenerated: 0,
  totalCollectionsSaved: 0,
  totalPdfsExported: 0,
  totalCreditsSpent: 0,
});
const mockApplyCreditChangeAndUsage = jest.fn().mockResolvedValue({
  userId: 'test-user',
  creditsBalance: 999,
  totalImagesGenerated: 0,
  totalCardsGenerated: 0,
  totalCollectionsSaved: 0,
  totalPdfsExported: 0,
  totalCreditsSpent: 0,
});

jest.mock('../src/services/GeminiService', () => ({
  generateCards: mockGenerateCards,
}));
jest.mock('../src/services/LocalDatabaseService', () => ({
  saveCollection: mockSaveCollection,
  getUserUsage: mockGetUserUsage,
  applyCreditChangeAndUsage: mockApplyCreditChangeAndUsage,
}));
jest.mock('../src/services/R2Service', () => ({
  uploadImageToStorage: mockUploadImage,
}));
jest.mock('../src/middleware/auth', () => (req, res, next) => {
  req.user = { uid: 'test-user' }; // Mock user for all requests
  next();
});

// Now, import the API routers
const cardsApi = require('../src/api/cards');
const collectionsApi = require('../src/api/collections');

// Setup express app for testing
const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // Increase limit for base64 images
app.use('/cards', cardsApi);
app.use('/collections', collectionsApi);

describe('API Endpoints', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('POST /cards/generate', () => {
    it('should stream chunks of data in NDJSON format', async () => {
      // Mock the generator function
      async function* mockStream() {
        yield { type: 'cards', data: [{ id: '1', title: 'Card 1' }] };
        yield { type: 'image', data: { cardId: '1', image: 'base64data' } };
      }
      mockGenerateCards.mockReturnValue(mockStream());

      const response = await request(app)
        .post('/cards/generate')
        .send({ theme: 'Test', context: 'Test' })
        .expect(200)
        .expect('Content-Type', /application\/x-ndjson/);

      // Check the streamed response body
      const chunks = response.text.trim().split('\n');
      expect(chunks).toHaveLength(2);
      expect(JSON.parse(chunks[0])).toEqual({ type: 'cards', data: [{ id: '1', title: 'Card 1' }] });
      expect(JSON.parse(chunks[1])).toEqual({ type: 'image', data: { cardId: '1', image: 'base64data' } });
    });
  });

  describe('POST /collections', () => {
    it('should create a new collection after uploading images', async () => {
      const newCollection = {
        name: 'Test Collection',
        cards: [{ id: '1', title: 'Card 1', image: 'base64_image_data' }]
      };

      // Mock the service functions
      mockUploadImage.mockResolvedValue('http://r2.dev/image.png');
      mockSaveCollection.mockImplementation((userId, collection) => Promise.resolve(collection));

      const response = await request(app)
        .post('/collections')
        .send(newCollection)
        .expect(201);

      // Check that the image was "uploaded"
      expect(mockUploadImage).toHaveBeenCalledWith('base64_image_data', 'test-user', expect.any(String));

      // Check that the collection was "saved" with the new image URL
      expect(mockSaveCollection).toHaveBeenCalledWith('test-user', expect.objectContaining({
        name: 'Test Collection',
        cards: [{ id: '1', title: 'Card 1', image: 'http://r2.dev/image.png' }],
      }));

      // Check the final HTTP response
      expect(response.body.name).toBe('Test Collection');
      expect(response.body.cards[0].image).toBe('http://r2.dev/image.png');
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('userId', 'test-user');
    });
  });
});
