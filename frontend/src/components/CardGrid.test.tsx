import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGrid from './CardGrid';
import { Card as CardData } from '../services/ApiService';

jest.mock('./Card', () => ({ card }: { card: CardData }) => (
    <div data-testid="card">
        <h1>{card.title}</h1>
    </div>
));

test('renders a grid of cards', () => {
  const cards: CardData[] = [
    { id: '1', title: 'Card 1', description: 'Desc 1', icon: '1', category: 'Cat 1' },
    { id: '2', title: 'Card 2', description: 'Desc 2', icon: '2', category: 'Cat 2' },
  ];

  render(<CardGrid cards={cards} />);

  const cardElements = screen.getAllByTestId('card');
  expect(cardElements).toHaveLength(2);
  expect(screen.getByText('Card 1')).toBeInTheDocument();
  expect(screen.getByText('Card 2')).toBeInTheDocument();
});

test('renders nothing when there are no cards', () => {
    render(<CardGrid cards={[]} />);
    const cardElements = screen.queryAllByTestId('card');
    expect(cardElements).toHaveLength(0);
});
