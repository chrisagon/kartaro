const path = require('path');

// Mock node-fetch at the top level
jest.mock('node-fetch');

describe('GeminiService', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    // Reset modules to ensure mocks are fresh for each test
    jest.resetModules();
    // Set mock API keys for the service
    process.env = {
      ...ORIGINAL_ENV,
      GEMINI_API_KEY: 'test-gemini-key',
      STABILITY_API_KEY: 'test-stability-key',
    };
  });

  afterEach(() => {
    // Restore original environment and clear all mocks
    process.env = ORIGINAL_ENV;
    jest.clearAllMocks();
  });

  it('should stream cards and images successfully', async () => {
    // 1. Import mocked dependencies inside the test
    // This is crucial because of jest.resetModules() in beforeEach()
    const fetch = require('node-fetch');

    // 2. Mock the service responses
    // Mock for Gemini text generation and title translation
    const mockTextResponse = {
      response: { text: () => '[{"title":"Test Card","description":"Test Description","icon":"🧪","category":"Test"}]' },
    };
    const mockTranslateResponse = {
      response: { text: () => 'Translated Test Card' },
    };
    const textModel = {
      generateContent: jest.fn()
        .mockResolvedValueOnce(mockTextResponse) // For card text generation
        .mockResolvedValueOnce(mockTranslateResponse), // For title translation
    };
    const mockGetGenerativeModel = jest.fn(() => textModel);
    jest.doMock('@google/generative-ai', () => ({
      GoogleGenerativeAI: jest.fn(() => ({
        getGenerativeModel: mockGetGenerativeModel,
      })),
    }));

    // Mock for Stability AI (which uses fetch)
    const mockStabilityResponse = {
      ok: true,
      json: () => Promise.resolve({ artifacts: [{ base64: 'STABILITY_BASE64_DATA' }] }),
    };
    fetch.mockResolvedValue(mockStabilityResponse);

    // 3. Run the function under test
    const GeminiService = require(path.resolve(__dirname, '../src/services/GeminiService'));
    const stream = GeminiService.generateCards('Test Theme', 'Test Context');

    // 4. Collect results from the stream
    const results = [];
    for await (const chunk of stream) {
      results.push(chunk);
    }

    // 5. Assertions
    expect(results).toHaveLength(2);

    // First chunk should be the text-only card data
    const cardId = results[0].data[0].id;
    expect(results[0].type).toBe('cards');
    expect(results[0].data[0].title).toBe('Test Card');
    expect(cardId).toBeDefined();

    // Second chunk should be the image update for that card
    expect(results[1].type).toBe('image');
    expect(results[1].data.cardId).toBe(cardId);
    expect(results[1].data.image).toBe('data:image/png;base64,STABILITY_BASE64_DATA');

    // Verify that the mocks were called as expected
    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-2.5-flash-lite' });
    expect(textModel.generateContent).toHaveBeenCalledTimes(2); // text + translation
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('stability.ai'), expect.any(Object));
  });
});
