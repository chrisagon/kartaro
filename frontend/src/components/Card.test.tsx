import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Card as CardData } from '../services/ApiService';

test('renders card content', () => {
  const card: CardData = {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    icon: '🧪',
    category: 'Test Category',
  };

  render(<Card card={card} />);

  expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
  expect(screen.getByText(/🧪/i)).toBeInTheDocument();
});
