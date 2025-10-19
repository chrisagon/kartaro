// src/context/AppContext.tsx
import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { AppState, AppAction, AppSettings, ApiContextType } from '../types/app';
import { CardData, CardCollection } from '../types/app';
import * as ApiService from '../services/ApiService';

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
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id ? action.payload : card
        ),
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

    case 'SET_CURRENT_VIEW':
      return { ...state, currentView: action.payload };

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
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Fonctions API avec gestion d'état intégrée
  const api: ApiContextType = {
    generateCards: useCallback(async (theme: string, context: string, numCards?: number) => {
      dispatch({ type: 'SET_GENERATING', payload: true });
      try {
        const result = await ApiService.generateCards(theme, context, numCards);
        dispatch({ type: 'SET_CARDS', payload: result.cards });
        dispatch({ type: 'SET_METRICS', payload: result.metrics });
        dispatch({ type: 'SET_GENERATION_RESULT', payload: result });
        return result;
      } catch (error) {
        console.error('Erreur lors de la génération des cartes:', error);
        throw error;
      } finally {
        dispatch({ type: 'SET_GENERATING', payload: false });
      }
    }, []),

    getCollections: useCallback(async () => {
      dispatch({ type: 'SET_LOADING_COLLECTIONS', payload: true });
      try {
        const collections = await ApiService.getCollections();
        dispatch({ type: 'SET_COLLECTIONS', payload: collections });
        return collections;
      } catch (error) {
        console.error('Erreur lors du chargement des collections:', error);
        throw error;
      } finally {
        dispatch({ type: 'SET_LOADING_COLLECTIONS', payload: false });
      }
    }, []),

    getCollectionById: useCallback(async (id: string) => {
      const collection = await ApiService.getCollectionById(id);
      dispatch({ type: 'SET_CURRENT_COLLECTION', payload: collection });
      dispatch({ type: 'SET_CARDS', payload: collection.cards || [] });
      return collection;
    }, []),

    createCollection: useCallback(async (collectionData) => {
      const newCollection = await ApiService.createCollection(collectionData);
      dispatch({ type: 'ADD_COLLECTION', payload: newCollection });
      return newCollection;
    }, []),

    updateCollection: useCallback(async (collection) => {
      const updatedCollection = await ApiService.updateCollection(collection);
      dispatch({ type: 'UPDATE_COLLECTION', payload: updatedCollection });
      return updatedCollection;
    }, []),

    deleteCollection: useCallback(async (id) => {
      await ApiService.deleteCollection(id);
      dispatch({ type: 'DELETE_COLLECTION', payload: id });
    }, []),

    generatePdfForCards: useCallback(async (cards) => {
      dispatch({ type: 'SET_GENERATING_PDF', payload: true });
      try {
        const pdfBlob = await ApiService.generatePdfForCards(cards);
        return pdfBlob;
      } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
        throw error;
      } finally {
        dispatch({ type: 'SET_GENERATING_PDF', payload: false });
      }
    }, []),
  };

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
  const { state, dispatch, api } = useApp();
  return {
    isGenerating: state.isGenerating,
    isGeneratingPdf: state.isGeneratingPdf,
    metrics: state.metrics,
    lastGenerationResult: state.lastGenerationResult,
    generateCards: api.generateCards,
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

