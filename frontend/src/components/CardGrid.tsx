import React from 'react';
import { Card as CardData } from '../services/ApiService';
import Card from './Card';

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;
