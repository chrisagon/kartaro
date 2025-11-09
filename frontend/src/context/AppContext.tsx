// src/context/AppContext.tsx
import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { AppState, AppAction, AppSettings, ApiContextType } from '../types/app';
import { CardData, CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';
import { generatePdfFromCards as buildPdfFromCards } from '../services/PdfService';

// État initial de l'application
const initialState: AppState = {
  cards: [],
  collections: [],
  currentCollection: null,
  selectedCard: null,
  isGenerating: false,
  isGeneratingPdf: false,
  isLoadingCollections: false,
  lastGenerationResult: null,
  metrics: null,
  imageGenerationProgress: null,
  generationMetadata: null,
  settings: {
    darkMode: false,
    animations: true,
    autoSave: true,
    cardsPerPage: 12,
    defaultCollectionName: 'Nouvelle Collection',
  },
  currentView: 'cards',
  sidebarOpen: false,
};

// Reducer pour gérer les actions
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: action.payload };

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };

    case 'UPDATE_CARD':
      console.log('UPDATE_CARD action:', action.payload);
      console.log('Updating card with ID:', action.payload.id);
      console.log('Current cards IDs:', state.cards.map(c => c.id));
      const updatedCards = state.cards.map(card => {
        const shouldUpdate = card.id === action.payload.id;
        console.log(`Card ${card.id}: ${shouldUpdate ? 'UPDATING' : 'keeping'}`);
        return shouldUpdate ? action.payload : card;
      });
      return {
        ...state,
        cards: updatedCards,
        selectedCard: state.selectedCard?.id === action.payload.id ? action.payload : state.selectedCard,
      };

    case 'DELETE_CARD':
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
        selectedCard: state.selectedCard?.id === action.payload ? null : state.selectedCard,
      };

    case 'SET_SELECTED_CARD':
      return { ...state, selectedCard: action.payload };

    case 'SET_COLLECTIONS':
      return { ...state, collections: action.payload };

    case 'ADD_COLLECTION':
      return { ...state, collections: [...state.collections, action.payload] };

    case 'UPDATE_COLLECTION':
      return {
        ...state,
        collections: state.collections.map(col =>
          col.id === action.payload.id ? action.payload : col
        ),
        currentCollection: state.currentCollection?.id === action.payload.id ? action.payload : state.currentCollection,
      };

    case 'DELETE_COLLECTION':
      return {
        ...state,
        collections: state.collections.filter(col => col.id !== action.payload),
        currentCollection: state.currentCollection?.id === action.payload ? null : state.currentCollection,
      };

    case 'SET_CURRENT_COLLECTION':
      return { ...state, currentCollection: action.payload };

    case 'SET_GENERATING':
      return { ...state, isGenerating: action.payload };

    case 'SET_GENERATING_PDF':
      return { ...state, isGeneratingPdf: action.payload };

    case 'SET_LOADING_COLLECTIONS':
      return { ...state, isLoadingCollections: action.payload };

    case 'SET_METRICS':
      return { ...state, metrics: action.payload };

    case 'SET_GENERATION_RESULT':
      return { ...state, lastGenerationResult: action.payload };

    case 'SET_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload }
      };

    case 'SET_GENERATION_METADATA':
      return { ...state, generationMetadata: action.payload };

    case 'SET_CURRENT_VIEW':
      return { ...state, currentView: action.payload };

    case 'SET_IMAGE_GENERATION_PROGRESS':
      return { ...state, imageGenerationProgress: action.payload };

    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case 'RESET_STATE':
      return initialState;

    default:
      return state;
  }
};

// Création du contexte
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  api: ApiContextType;
} | null>(null);

// Provider du contexte
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(appReducer, initialState);

  const generationMetadata = state.generationMetadata;

  const api: ApiContextType = useMemo(() => ({
    generateContext: async (theme, publicTarget) => {
      const result = await ApiService.generateContext(theme, publicTarget);
      return result;
    },
        generateCards: async (theme, context, numCards, stylePreset, metadataOverride) => {
      dispatch({ type: 'SET_GENERATING', payload: true });
      dispatch({ type: 'SET_CARDS', payload: [] }); // Clear previous cards
      dispatch({ type: 'SET_METRICS', payload: null });
      dispatch({ type: 'SET_GENERATION_RESULT', payload: null });
      dispatch({ type: 'SET_IMAGE_GENERATION_PROGRESS', payload: { current: 0, total: numCards || 0 } });

      let metadata = metadataOverride ?? null;
      if (!metadata && (theme || context)) {
        metadata = {
          theme,
          publicTarget: generationMetadata?.publicTarget ?? '',
          context,
        };
      }

      dispatch({ type: 'SET_GENERATION_METADATA', payload: metadata || null });

      try {
        // 1. Generate text content first
        const { cards: textOnlyCards } = await ApiService.generateCardsText(theme, context, numCards);
        dispatch({ type: 'SET_CARDS', payload: textOnlyCards });
        dispatch({ type: 'SET_IMAGE_GENERATION_PROGRESS', payload: { current: 0, total: textOnlyCards.length } });

        // 2. Generate images one by one
        const cardsWithImages: CardData[] = [];
        for (let i = 0; i < textOnlyCards.length; i++) {
          const card = textOnlyCards[i];
          try {
            const { imageUrl } = await ApiService.generateCardImage(card, theme, context, stylePreset);
            const cardWithImage = { ...card, image: imageUrl };
            cardsWithImages.push(cardWithImage);

            // Update the specific card in the state with its new image
            dispatch({ type: 'UPDATE_CARD', payload: cardWithImage });

          } catch (imageError) {
            console.error(`Error generating image for card "${card.title}":`, imageError);
            // Keep the card without an image or with a fallback
            cardsWithImages.push(card);
          }
          dispatch({ type: 'SET_IMAGE_GENERATION_PROGRESS', payload: { current: i + 1, total: textOnlyCards.length } });
        }

        // Final update with all data
        const finalResult = {
          cards: cardsWithImages,
          metrics: { // Simulate metrics for now
            textRequests: 1,
            imageRequests: textOnlyCards.length,
            imageFailures: cardsWithImages.filter(c => !c.image).length,
            totalRequests: 1 + textOnlyCards.length,
            responseBytes: 0, // Not calculated in this flow
            responseKilobytes: 0,
          }
        };

        dispatch({ type: 'SET_GENERATION_RESULT', payload: finalResult });
        dispatch({ type: 'SET_METRICS', payload: finalResult.metrics });

        return finalResult;

      } catch (error) {
        console.error('Erreur lors de la génération des cartes:', error);
        throw error;
      } finally {
        dispatch({ type: 'SET_GENERATING', payload: false });
        dispatch({ type: 'SET_IMAGE_GENERATION_PROGRESS', payload: null });
      }
    },
    getCollections: async () => {
      dispatch({ type: 'SET_LOADING_COLLECTIONS', payload: true });
      try {
        const collections = await ApiService.getCollections();
        dispatch({ type: 'SET_COLLECTIONS', payload: collections });
        return collections;
      } finally {
        dispatch({ type: 'SET_LOADING_COLLECTIONS', payload: false });
      }
    },
    getCollectionById: async (id) => {
      const collection = await ApiService.getCollectionById(id);
      dispatch({ type: 'SET_CURRENT_COLLECTION', payload: collection });
      dispatch({ type: 'SET_CARDS', payload: collection.cards || [] });
      return collection;
    },
    createCollection: async (collectionData) => {
      const collectionWithMetadata = {
        ...collectionData,
        theme: collectionData.theme ?? generationMetadata?.theme,
        publicTarget: collectionData.publicTarget ?? generationMetadata?.publicTarget,
        context: collectionData.context ?? generationMetadata?.context,
      };

      const newCollection = await ApiService.createCollection(collectionWithMetadata);
      dispatch({ type: 'ADD_COLLECTION', payload: newCollection });
      return newCollection;
    },
    updateCollection: async (collection) => {
      const collectionWithMetadata = {
        ...collection,
        theme: collection.theme ?? generationMetadata?.theme,
        publicTarget: collection.publicTarget ?? generationMetadata?.publicTarget,
        context: collection.context ?? generationMetadata?.context,
      };

      const updatedCollection = await ApiService.updateCollection(collectionWithMetadata);
      dispatch({ type: 'UPDATE_COLLECTION', payload: updatedCollection });
      return updatedCollection;
    },
    deleteCollection: async (id) => {
      await ApiService.deleteCollection(id);
      dispatch({ type: 'DELETE_COLLECTION', payload: id });
    },
    generatePdfForCards: async (cards, options = {}) => {
      dispatch({ type: 'SET_GENERATING_PDF', payload: true });
      try {
        const mergedOptions = {
          ...options,
          metadata: options.metadata ?? generationMetadata ?? null,
        };
        await buildPdfFromCards(cards, {
          ...mergedOptions,
          filename: options.name
            ? `${options.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-${Date.now()}.pdf`
            : undefined,
        });
      } finally {
        dispatch({ type: 'SET_GENERATING_PDF', payload: false });
      }
    },
  }), [dispatch, generationMetadata?.theme, generationMetadata?.publicTarget, generationMetadata?.context]);

  useEffect(() => {
    if (currentUser) {
      api.getCollections();
    } else {
      dispatch({ type: 'SET_COLLECTIONS', payload: [] });
    }
  }, [currentUser, api]);

  return (
    <AppContext.Provider value={{ state, dispatch, api }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Hooks spécialisés pour des parties spécifiques de l'état
export const useCards = () => {
  const { state, dispatch } = useApp();
  return {
    cards: state.cards,
    selectedCard: state.selectedCard,
    setCards: (cards: CardData[]) => dispatch({ type: 'SET_CARDS', payload: cards }),
    setSelectedCard: (card: CardData | null) => dispatch({ type: 'SET_SELECTED_CARD', payload: card }),
    addCard: (card: CardData) => dispatch({ type: 'ADD_CARD', payload: card }),
    updateCard: (card: CardData) => dispatch({ type: 'UPDATE_CARD', payload: card }),
    deleteCard: (id: string) => dispatch({ type: 'DELETE_CARD', payload: id }),
  };
};

export const useCollections = () => {
  const { state, dispatch, api } = useApp();
  return {
    collections: state.collections,
    currentCollection: state.currentCollection,
    isLoadingCollections: state.isLoadingCollections,
    getCollections: api.getCollections,
    getCollectionById: api.getCollectionById,
    createCollection: api.createCollection,
    updateCollection: api.updateCollection,
    deleteCollection: api.deleteCollection,
    setCollections: (collections: CardCollection[]) => dispatch({ type: 'SET_COLLECTIONS', payload: collections }),
    setCurrentCollection: (collection: CardCollection | null) => dispatch({ type: 'SET_CURRENT_COLLECTION', payload: collection }),
    addCollection: (collection: CardCollection) => dispatch({ type: 'ADD_COLLECTION', payload: collection }),
  };
};

export const useGeneration = () => {
  const { state, api } = useApp();
  return {
    isGenerating: state.isGenerating,
    isGeneratingPdf: state.isGeneratingPdf,
    metrics: state.metrics,
    lastGenerationResult: state.lastGenerationResult,
    imageGenerationProgress: state.imageGenerationProgress,
    generateCards: api.generateCards,
    generateContext: api.generateContext,
    generatePdfForCards: api.generatePdfForCards,
  };
};

export const useSettings = () => {
  const { state, dispatch } = useApp();
  return {
    settings: state.settings,
    updateSettings: (settings: Partial<AppSettings>) => dispatch({ type: 'SET_SETTINGS', payload: settings }),
  };
};

export const useNavigation = () => {
  const { state, dispatch } = useApp();
  return {
    currentView: state.currentView,
    sidebarOpen: state.sidebarOpen,
    setCurrentView: (view: AppState['currentView']) => dispatch({ type: 'SET_CURRENT_VIEW', payload: view }),
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
  };
};

