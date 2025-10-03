const path = require('path');

describe('GeminiService', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV, GEMINI_API_KEY: 'test-key' };
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    jest.clearAllMocks();
  });

  it('should generate cards successfully', async () => {
    const mockTextResponse = {
      response: {
        text: () => '[{"title":"Test Card","description":"Test Description","icon":"??","category":"Test"}]',
      },
    };

    const mockImageResponse = {
      response: {
        candidates: [
          {
            content: {
              parts: [
                {
                  inlineData: { data: 'BASE64DATA' },
                },
              ],
            },
          },
        ],
      },
    };

    const textModel = { generateContent: jest.fn().mockResolvedValue(mockTextResponse) };
    const imageModel = { generateContent: jest.fn().mockResolvedValue(mockImageResponse) };

    const mockGetGenerativeModel = jest.fn(({ model }) => {
      if (model === 'gemini-2.5-flash-image') {
        return imageModel;
      }
      return textModel;
    });

    jest.doMock('@google/generative-ai', () => ({
      GoogleGenerativeAI: jest.fn(() => ({
        getGenerativeModel: mockGetGenerativeModel,
      })),
    }), { virtual: true });

    const GeminiService = require(path.resolve(__dirname, '../src/services/GeminiService'));

    const cards = await GeminiService.generateCards('Test Theme', 'Test Context');

    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-2.5-flash-lite' });
    expect(mockGetGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-2.5-flash-image' });
    expect(textModel.generateContent).toHaveBeenCalledTimes(1);
    expect(imageModel.generateContent).toHaveBeenCalledTimes(1);

    expect(cards).toEqual([
      {
        title: 'Test Card',
        description: 'Test Description',
        icon: '??',
        category: 'Test',
        image: 'data:image/png;base64,BASE64DATA',
      },
    ]);
  });
});
