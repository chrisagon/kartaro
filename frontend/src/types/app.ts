// src/types/app.ts
export interface CardData {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CardCollection {
  id: string;
  name: string;
  description?: string;
  cards?: CardData[];
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  tags?: string[];
}

export interface GenerateCardsMetrics {
  totalRequests: number;
  textRequests: number;
  imageRequests: number;
  imageFailures: number;
  responseBytes: number;
  responseKilobytes: number;
}

export interface GenerationResult {
  cards: CardData[];
  metrics: GenerateCardsMetrics;
}

// Types pour les composants UI
export interface InputFormData {
  theme: string;
  context: string;
}

export interface AppSettings {
  darkMode: boolean;
  animations: boolean;
  autoSave: boolean;
  cardsPerPage: number;
  defaultCollectionName: string;
}

// État global de l'application
export interface AppState {
  // Données
  cards: CardData[];
  collections: CardCollection[];
  currentCollection: CardCollection | null;
  selectedCard: CardData | null;

  // États de chargement
  isGenerating: boolean;
  isGeneratingPdf: boolean;
  isLoadingCollections: boolean;

  // Métriques et résultats
  metrics: GenerateCardsMetrics | null;
  lastGenerationResult: GenerationResult | null;

  // Paramètres UI
  settings: AppSettings;

  // Navigation et vue
  currentView: 'cards' | 'collections' | 'editor';
  sidebarOpen: boolean;
}

// Actions possibles
export type AppAction =
  | { type: 'SET_CARDS'; payload: CardData[] }
  | { type: 'ADD_CARD'; payload: CardData }
  | { type: 'UPDATE_CARD'; payload: CardData }
  | { type: 'DELETE_CARD'; payload: string }
  | { type: 'SET_SELECTED_CARD'; payload: CardData | null }
  | { type: 'SET_COLLECTIONS'; payload: CardCollection[] }
  | { type: 'ADD_COLLECTION'; payload: CardCollection }
  | { type: 'UPDATE_COLLECTION'; payload: CardCollection }
  | { type: 'DELETE_COLLECTION'; payload: string }
  | { type: 'SET_CURRENT_COLLECTION'; payload: CardCollection | null }
  | { type: 'SET_GENERATING'; payload: boolean }
  | { type: 'SET_GENERATING_PDF'; payload: boolean }
  | { type: 'SET_LOADING_COLLECTIONS'; payload: boolean }
  | { type: 'SET_METRICS'; payload: GenerateCardsMetrics | null }
  | { type: 'SET_GENERATION_RESULT'; payload: GenerationResult | null }
  | { type: 'SET_SETTINGS'; payload: Partial<AppSettings> }
  | { type: 'SET_CURRENT_VIEW'; payload: AppState['currentView'] }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'RESET_STATE' };

// Contexte pour les fonctions API
export interface ApiContextType {
  generateCards: (theme: string, context: string) => Promise<GenerationResult>;
  getCollections: () => Promise<CardCollection[]>;
  getCollectionById: (id: string) => Promise<CardCollection>;
  createCollection: (collection: Omit<CardCollection, 'id' | 'createdAt' | 'updatedAt'>) => Promise<CardCollection>;
  updateCollection: (collection: CardCollection) => Promise<CardCollection>;
  deleteCollection: (id: string) => Promise<void>;
  generatePdfForCards: (cards: CardData[]) => Promise<Blob>;
}
