import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { CardData, CardCollection, GenerationResult, GeneratePdfOptions, UsageSummary } from '../types/app';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

const getAuthToken = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};

async function request<T>(url: string, options?: any, isPublic = false): Promise<T> {
  try {
    const token = isPublic ? null : await getAuthToken();

    const headers: any = {
      'Content-Type': 'application/json',
      ...options?.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios({
      url: `${API_BASE_URL}${url}`,
      ...options,
      headers,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data as any;
      const message = data?.error || data?.message || error.message;

      const apiError: any = new Error(message);
      if (status) apiError.status = status;
      if (data?.code) apiError.code = data.code;
      apiError.raw = data;
      throw apiError;
    }
    throw error;
  }
}

export function generateContext(theme: string, publicTarget: string): Promise<{ context: string }> {
  return request<{ context: string }>('/cards/generate-context', {
    method: 'POST',
    data: { theme, publicTarget },
  });
}

export function generateCardsText(theme: string, context: string, numCards?: number): Promise<{ cards: CardData[] }> {
  return request<{ cards: CardData[] }>('/cards/generate-text', {
    method: 'POST',
    data: { theme, context, numCards },
  });
}

export function getUsageSummary(): Promise<UsageSummary> {
  return request<UsageSummary>('/users/me/usage');
}

export function generateCardImage(card: CardData, theme: string, context: string, stylePreset?: string): Promise<{ imageUrl: string }> {
  return request<{ imageUrl: string }>('/cards/generate-image', {
    method: 'POST',
    data: { card, theme, context, stylePreset },
  });
}

export function generateCards(theme: string, context: string, numCards?: number, stylePreset?: string): Promise<GenerationResult> {
  return request<GenerationResult>('/cards/generate', {
    method: 'POST',
    data: { theme, context, numCards, stylePreset },
  });
}

export function regenerateCardImage(card: CardData, theme?: string, context?: string, stylePreset?: string): Promise<{ image: string }> {
  return request<{ image: string }>('/cards/regenerate-image', {
    method: 'POST',
    data: { card, theme, context, stylePreset },
  });
}

export function getCollections(): Promise<CardCollection[]> {
  return request<CardCollection[]>('/collections');
}

export function getPublicCollections(): Promise<CardCollection[]> {
  return request<CardCollection[]>('/collections/public');
}

export function getCollectionById(id: string): Promise<CardCollection> {
  return request<CardCollection>(`/collections/${id}`);
}

export function createCollection(collection: Omit<CardCollection, 'id' | 'createdAt' | 'updatedAt'>): Promise<CardCollection> {
  return request<CardCollection>('/collections', {
    method: 'POST',
    data: collection,
  });
}

export function updateCollection(collection: CardCollection): Promise<CardCollection> {
  return request<CardCollection>(`/collections/${collection.id}`, {
    method: 'PUT',
    data: collection,
  });
}

export function deleteCollection(id: string): Promise<void> {
  return request<void>(`/collections/${id}`, {
    method: 'DELETE',
  });
}

export async function generatePdfForCards(cards: CardData[], options: GeneratePdfOptions = {}): Promise<Blob> {
  const token = await getAuthToken();

  const response = await axios.post(
    `${API_BASE_URL}/cards/generate-pdf`,
    {
      cards,
      metadata: options.metadata ?? null,
      name: options.name,
      description: options.description,
    },
    {
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  return response.data;
}
