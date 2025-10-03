import React from 'react';
import { Card as CardData } from '../services/ApiService';

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px' }}>
      {card.image && (
        <img
          src={card.image}
          alt={`Illustration for ${card.title}`}
          style={{ width: '100%', height: 'auto', borderRadius: '6px', marginBottom: '8px' }}
        />
      )}
      <h2>{card.icon} {card.title}</h2>
      <p>{card.description}</p>
      <p><em>{card.category}</em></p>
    </div>
  );
};

export default Card;
