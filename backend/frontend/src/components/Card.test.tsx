import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardData } from '../types/app';

test('renders card content', () => {
  const card: CardData = {
    id: '1',
    title: 'Test Title',
    description: 'Test Description',
    icon: '🧪',
    category: 'Test Category',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  render(<Card card={card} />);

  expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
  expect(screen.getByText(/🧪/i)).toBeInTheDocument();
});
