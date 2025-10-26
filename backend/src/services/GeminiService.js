require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');
const fetch = require('node-fetch');

// IMPORTANT: Make sure to create a .env file in the backend directory with your API key
const API_KEY = process.env.GEMINI_API_KEY;
const STABILITY_API_KEY = process.env.STABILITY_API_KEY;

if (!API_KEY) {
  console.warn('GEMINI_API_KEY is not defined. GeminiService will throw on usage.');
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// Image generation provider
const IMAGE_PROVIDER = process.env.IMAGE_PROVIDER || 'stability'; // 'stability' or 'vertex'

// Stability AI configuration
if (IMAGE_PROVIDER === 'stability' && !STABILITY_API_KEY) {
  console.warn('STABILITY_API_KEY is not defined. Image generation will use fallback.');
}

const TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash-lite';
const STABILITY_MODEL = process.env.STABILITY_MODEL || 'stable-diffusion-xl-1024-v1-0';

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


const parseJsonArray = (raw) => {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error('Model response JSON is not an array.');
  }
  return parsed;
};

const translateTitleToEnglish = async (title) => {
  if (!genAI) {
    console.warn('Gemini client not available for translation, using original title');
    return title;
  }

  try {
    const textModel = genAI.getGenerativeModel({ model: TEXT_MODEL });

    const prompt = `Translate the following French text to English. Provide only the translation, no explanations or additional text:

"${title}"

English translation:`;

    const result = await textModel.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });

    const response = await result.response;
    const translatedText = await response.text();

    // Clean up the response (remove quotes, extra whitespace, etc.)
    const cleanTranslation = translatedText
      .replace(/^["']|["']$/g, '') // Remove surrounding quotes
      .replace(/\n/g, ' ') // Replace newlines with spaces
      .trim();

    return cleanTranslation || title;
  } catch (error) {
    console.error('Error translating title to English:', error.message || error);
    return title; // Fallback to original title
  }
};

const buildImagePrompt = async (card, theme, context) => {
  // Keep prompt under 2000 chars for Stability AI
  // Use only title and key style keywords in English
  const titleShort = card.title.substring(0, 80);

  // Translate title to English for better image generation
  const translatedTitle = await translateTitleToEnglish(titleShort);

  // Simple, effective prompt in English
  return `Professional illustration of "${translatedTitle}" for ${theme} educational card, Vector Art, concept art, Graphic design, vibrant colors, centered composition, no text or labels, clean minimalist design, digital art`;
};

const generateCards = async (theme, context, numCards = null, stylePreset = 'isometric') => {
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

    // Use provided numCards or fallback to env variable (default 10)
    const NUM_CARDS = numCards !== null 
      ? numCards 
      : parseInt(process.env.NUM_CARDS_TO_GENERATE || '10', 10);
    
    const prompt = `Generate a JSON array of exactly ${NUM_CARDS} workshop cards for the theme "${theme}" and context "${context}".

Categories available: Process, Steps, Components, Actions, Bonus and Malus, Categories and Criteria, Locations/Sites and Things/Objects, Personas, Concepts.

Each card must have:
- title: A clear, concise title
- description: A detailed description (2-3 sentences)
- icon: A relevant emoji
- category: One of the categories above

Respond with ONLY a valid JSON array, no markdown, no explanations:
[
  {
    "title": "Card title",
    "description": "Card description",
    "icon": "🎯",
    "category": "Concept"
  }
]

Generate exactly ${NUM_CARDS} cards with diverse categories.`;

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
    // Add unique IDs to each card
    const cardsWithIds = cards.map((card, index) => ({
      ...card,
      id: `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
    }));
    const cardsWithMetadata = cardsWithIds.map(card => applyCategoryMetadata(card));
    const enrichedCards = await appendImagesToCards(
      cardsWithMetadata,
      theme,
      context,
      metrics,
      stylePreset,
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

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate image with Stability AI
const generateImageWithStability = async (prompt, stylePreset = 'isometric') => {
  if (!STABILITY_API_KEY) {
    throw new Error('STABILITY_API_KEY not configured');
  }

  const response = await fetch(
    `https://api.stability.ai/v1/generation/${STABILITY_MODEL}/text-to-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STABILITY_API_KEY}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
            weight: 1,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 1,
        style_preset: stylePreset
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Stability AI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  
  if (!data.artifacts || data.artifacts.length === 0) {
    throw new Error('No image generated by Stability AI');
  }

  return `data:image/png;base64,${data.artifacts[0].base64}`;
};

const appendImagesToCards = async (cards, theme, context, metrics = null, stylePreset = 'isometric') => {
  if (IMAGE_PROVIDER !== 'stability' || !STABILITY_API_KEY) {
    console.warn('Stability AI not configured. Using fallback images for all cards.');
    return cards.map(card => ({ ...card, image: FALLBACK_IMAGE_DATA_URL }));
  }

  const cardsWithImages = [];
  const DELAY_BETWEEN_REQUESTS = parseInt(process.env.IMAGE_DELAY_MS || '1000', 10); // 1 seconde par défaut

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardWithImage = { ...card };

    try {
      const prompt = await buildImagePrompt(card, theme, context);
      if (metrics) {
        metrics.imageRequests += 1;
      }

      console.log(`Generating image ${i + 1}/${cards.length} for "${card.title}"...`);

      // Generate image with Stability AI
      const imageDataUrl = await generateImageWithStability(prompt, stylePreset);
      cardWithImage.image = imageDataUrl;
      console.log(`✓ Image generated for "${card.title}"`);
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

    // Attendre avant la prochaine requête (sauf pour la dernière carte)
    if (i < cards.length - 1) {
      console.log(`Waiting ${DELAY_BETWEEN_REQUESTS / 1000}s before next request...`);
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }

  return cardsWithImages;
};

// Regenerate image for a single card
const regenerateCardImage = async (card, theme = '', context = '', stylePreset = 'isometric') => {
  if (IMAGE_PROVIDER !== 'stability' || !STABILITY_API_KEY) {
    console.warn('Stability AI not configured. Using fallback image.');
    return FALLBACK_IMAGE_DATA_URL;
  }

  try {
    const prompt = await buildImagePrompt(card, theme, context);
    console.log(`Regenerating image for "${card.title}"...`);

    const imageDataUrl = await generateImageWithStability(prompt, stylePreset);
    console.log(`✓ Image regenerated for "${card.title}"`);

    return imageDataUrl;
  } catch (error) {
    console.error(`Failed to regenerate image for card "${card.title}":`, error.message || error);
    return FALLBACK_IMAGE_DATA_URL;
  }
};

module.exports = {
  generateCards,
  parseCardsFromText,
  applyCategoryMetadata,
  normalizeCategory,
  appendImagesToCards,
  regenerateCardImage,
  translateTitleToEnglish,
  buildImagePrompt,
  CATEGORY_METADATA,
};




