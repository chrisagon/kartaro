import axios from 'axios';
import { CardData, CardCollection, GenerationResult } from '../types/app';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

async function request<T>(url: string, options?: any): Promise<T> {
  try {
    const response = await axios({
      url: `${API_BASE_URL}${url}`,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw error;
  }
}

export function generateCards(theme: string, context: string, numCards?: number): Promise<GenerationResult> {
  return request<GenerationResult>('/cards/generate', {
    method: 'POST',
    data: { theme, context, numCards },
  });
}

export function getCollections(): Promise<CardCollection[]> {
  return request<CardCollection[]>('/collections');
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

export async function generatePdfForCards(cards: CardData[]): Promise<Blob> {
  const response = await axios.post(
    `${API_BASE_URL}/cards/generate-pdf`,
    { cards },
    { responseType: 'blob' }
  );
  return response.data;
}
