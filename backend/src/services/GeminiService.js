require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

// IMPORTANT: Make sure to create a .env file in the backend directory with your API key
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('GEMINI_API_KEY is not defined. GeminiService will throw on usage.');
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash-lite';
const IMAGE_MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';

const CATEGORY_METADATA = [
  {
    label: 'Processus',
    color: '#2563eb',
    aliases: ['process', 'processus', 'processes'],
  },
  {
    label: 'Étapes',
    color: '#7c3aed',
    aliases: ['steps', 'step', 'workflow step', 'workflow steps'],
  },
  {
    label: 'Composants',
    color: '#0ea5e9',
    aliases: ['components', 'component', 'elements', 'element', 'parts', 'part'],
  },
  {
    label: 'Actions',
    color: '#10b981',
    aliases: ['actions', 'action', 'activities', 'activity', 'tasks', 'task'],
  },
  {
    label: 'Bonus et Malus',
    color: '#f97316',
    aliases: ['bonus and malus', 'bonus', 'malus', 'pros and cons', 'advantages', 'disadvantages', 'risks', 'risk'],
  },
  {
    label: 'Catégories et Critères',
    color: '#facc15',
    aliases: ['categories and criteria', 'criteria', 'category criteria', 'evaluation criteria', 'criteria category'],
  },
  {
    label: 'Lieux/Sites et Objets',
    color: '#14b8a6',
    aliases: [
      'locations/sites and things/objects',
      'locations and sites',
      'things/objects',
      'things',
      'objects',
      'locations',
      'sites',
      'places',
      'locations and objects',
      'things and objects',
    ],
  },
  {
    label: 'Personas',
    color: '#db2777',
    aliases: ['personas', 'persona', 'roles', 'role', 'characters', 'character'],
  },
  {
    label: 'Concepts',
    color: '#ef4444',
    aliases: ['concepts', 'concept', 'ideas', 'idea', 'visions', 'vision'],
  },
];

const DEFAULT_CATEGORY_COLOR = '#6b7280';

const FALLBACK_SVG = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">',
  '<rect width="512" height="512" rx="48" fill="#f0f4ff"/>',
  '<path d="M256 112c-60.9 0-110.4 41.4-110.4 99.2h67.4c0-21.9 17.8-38.3 43-38.3 23.8 0 42.3 14.4 42.3 36.2 0 17.2-9.9 28.6-28.1 36.8-31.5 14.2-51.9 37.6-51.9 76.3v19.5h67.4v-17.4c0-17.5 7.5-28.2 27-37.8 35.6-17.4 56.2-42.4 56.2-78.6 0-54.5-45.3-95.9-112.9-95.9Z" fill="#1f3a8a"/>',
  '<circle cx="256" cy="386" r="32" fill="#1f3a8a"/>',
  '</svg>',
].join('');
const FALLBACK_IMAGE_DATA_URL = `data:image/svg+xml;base64,${Buffer.from(FALLBACK_SVG).toString('base64')}`;

const extractInlineImage = (response) => {
  const candidates = response?.candidates || [];
  for (const candidate of candidates) {
    const parts = candidate?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData?.data) {
        return part.inlineData.data;
      }
    }
  }
  return null;
};

const parseJsonArray = (raw) => {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error('Model response JSON is not an array.');
  }
  return parsed;
};

const buildImagePrompt = (card, theme, context) => `You are an art director creating a single illustrative visual for a printed ideation card.
Title: "${card.title}".
Category: ${card.categoryOriginal || card.category}.
Theme: ${theme}.
Context: ${context}.
Design a 1:1 aspect ratio illustration that conveys the card idea using bold shapes, rich colours, and no overlaid typography.
Use modern flat illustration style, high contrast lighting, and ensure the main subject is centred.
Return only the visual.`;

const generateCards = async (theme, context) => {
  if (!genAI) {
    throw new Error('Gemini client is not initialised. Please set GEMINI_API_KEY.');
  }

  const metrics = {
    textRequests: 0,
    imageRequests: 0,
    imageFailures: 0,
  };

  try {
    const textModel = genAI.getGenerativeModel({ model: TEXT_MODEL });

    const prompt = `Generate a JSON array of workshop cards for the theme "${theme}" and context "${context}".
The categories are: Process, Steps, Components, Actions, Bonus and Malus, Categories and Criteria, Locations/Sites and Things/Objects, Personas, Concepts.
Each card must provide a title, description, emoji icon, and category.
Respond with a JSON array similar to:
[
  {
    "title": "Card title",
    "description": "Card description",
    "icon": "*",
    "category": "Concept"
  }
]`;

    metrics.textRequests += 1;

    const result = await textModel.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });
    const response = await result.response;
    const text = await response.text();

    const cards = parseCardsFromText(text);
    const cardsWithMetadata = cards.map(card => applyCategoryMetadata(card));
    const enrichedCards = await appendImagesToCards(
      cardsWithMetadata,
      theme,
      context,
      metrics,
    );

    const serializedCards = JSON.stringify(enrichedCards);
    const responseBytes = Buffer.byteLength(serializedCards, 'utf8');
    metrics.responseBytes = responseBytes;
    metrics.responseKilobytes = Number((responseBytes / 1024).toFixed(2));
    metrics.totalRequests = metrics.textRequests + metrics.imageRequests;

    return {
      cards: enrichedCards,
      metrics,
    };
  } catch (error) {
    console.error('Error generating cards from Gemini:', error.message || error);
    throw new Error('Failed to generate cards via external service.');
  }
};

const parseCardsFromText = (text) => {
  try {
    return JSON.parse(text);
  } catch (initialError) {
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch && jsonMatch[1]) {
      try {
        return JSON.parse(jsonMatch[1]);
      } catch (parseError) {
        console.error('Failed to parse JSON from markdown:', parseError);
        console.error('Original text that failed parsing:', jsonMatch[1]);
        throw new Error('Invalid JSON format in model response.');
      }
    }

    const startIndex = text.indexOf('[');
    const endIndex = text.lastIndexOf(']');
    if (startIndex !== -1 && endIndex !== -1) {
      const jsonText = text.substring(startIndex, endIndex + 1);
      try {
        return JSON.parse(jsonText);
      } catch (parseError) {
        console.error('Failed to parse substring JSON:', parseError);
        console.error('Original text that failed parsing:', jsonText);
        throw new Error('Invalid JSON format in model response.');
      }
    }

    console.error('Could not find valid JSON in model response. Full text:', text);
    throw new Error('No valid JSON found in model response.');
  }
};

const applyCategoryMetadata = (card) => {
  const rawCategory = card.category ?? '';
  const normalizedCategory = normalizeCategory(rawCategory);
  const metadata = CATEGORY_METADATA.find(({ aliases }) =>
    aliases.some(alias => normalizeCategory(alias) === normalizedCategory),
  );

  return {
    ...card,
    categoryOriginal: rawCategory,
    category: metadata ? metadata.label : rawCategory,
    categoryColor: metadata ? metadata.color : DEFAULT_CATEGORY_COLOR,
  };
};

const normalizeCategory = (value) => {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
};

const appendImagesToCards = async (cards, theme, context, metrics = null) => {
  if (!genAI) {
    throw new Error('Gemini client is not initialised. Please set GEMINI_API_KEY.');
  }

  const imageModel = genAI.getGenerativeModel({ model: IMAGE_MODEL });
  const cardsWithImages = [];

  for (const card of cards) {
    const cardWithImage = { ...card };

    try {
      const prompt = buildImagePrompt(card, theme, context);
      if (metrics) {
        metrics.imageRequests += 1;
      }
      const result = await imageModel.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
      });
      const response = await result.response;
      const inlineData = extractInlineImage(response);

      if (!inlineData) {
        console.warn(`Image model did not return inline data for card "${card.title}". Using fallback image.`);
      }

      cardWithImage.image = inlineData
        ? `data:image/png;base64,${inlineData}`
        : FALLBACK_IMAGE_DATA_URL;
    } catch (imageError) {
      console.error(
        `Failed to generate image for card "${card.title}":`,
        imageError.message || imageError,
      );
      if (metrics) {
        metrics.imageFailures += 1;
      }
      cardWithImage.image = FALLBACK_IMAGE_DATA_URL;
    }

    cardsWithImages.push(cardWithImage);
  }

  return cardsWithImages;
};

module.exports = {
  generateCards,
  parseCardsFromText,
  applyCategoryMetadata,
  normalizeCategory,
  appendImagesToCards,
  CATEGORY_METADATA,
};




