const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cardsApi = require('../src/api/cards');
const collectionsApi = require('../src/api/collections');
const GeminiService = require('../src/services/GeminiService');

jest.mock('../src/services/GeminiService');

const app = express();
app.use(bodyParser.json());
app.use('/cards', cardsApi);
app.use('/collections', collectionsApi);

describe('API Endpoints', () => {
  describe('POST /cards/generate', () => {
    it('should return a list of cards', async () => {
      const mockCards = [{ id: '1', title: 'Card 1' }];
      GeminiService.generateCards.mockResolvedValue(mockCards);

      const response = await request(app)
        .post('/cards/generate')
        .send({ theme: 'Test', context: 'Test' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockCards);
    });
  });

  describe('POST /collections', () => {
    it('should create a new collection', async () => {
      const newCollection = { name: 'Test Collection', cards: [{ id: '1', title: 'Card 1' }] };

      const response = await request(app)
        .post('/collections')
        .send(newCollection);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newCollection));
    });
  });
});
