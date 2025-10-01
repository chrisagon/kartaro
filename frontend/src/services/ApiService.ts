import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export interface Card {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface CardCollection {
  id: string;
  name: string;
  cards: Card[];
}

export const generateCards = async (theme: string, context: string): Promise<Card[]> => {
  const response = await axios.post(`${API_URL}/cards/generate`, { theme, context });
  return response.data;
};

export const createCollection = async (name: string, cards: Card[]): Promise<CardCollection> => {
  const response = await axios.post(`${API_URL}/collections`, { name, cards });
  return response.data;
};

export const getCollections = async (): Promise<CardCollection[]> => {
  const response = await axios.get(`${API_URL}/collections`);
  return response.data;
};
