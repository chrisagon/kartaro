const GeminiService = require('../src/services/GeminiService');
const { GoogleGenerativeAI } = require('@google/generative-ai');

jest.mock('@google/generative-ai', () => {
  const mockModel = {
    generateContent: jest.fn(),
  };
  const mockGenAI = {
    getGenerativeModel: jest.fn(() => mockModel),
  };
  return {
    GoogleGenerativeAI: jest.fn(() => mockGenAI),
  };
});

describe('GeminiService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate cards successfully', async () => {
    const mockResponseText = '```json\n[\n  {\n    "title": "Test Card",\n    "description": "Test Description",\n    "icon": "🧪",\n    "category": "Test"\n  }\n]\n```';
    const mockResponse = {
      response: {
        text: () => mockResponseText,
      },
    };
    
    // Get the mock model from the mocked library to set the resolved value
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI();
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    model.generateContent.mockResolvedValue(mockResponse);

    const cards = await GeminiService.generateCards('Test Theme', 'Test Context');

    expect(cards).toEqual([
      {
        title: 'Test Card',
        description: 'Test Description',
        icon: '🧪',
        category: 'Test',
      },
    ]);
    expect(model.generateContent).toHaveBeenCalled();
  });
});

