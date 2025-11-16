import React, { forwardRef } from 'react';
import { CardData } from '../types/app';
import { IconButton } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import './Card.css';

interface CardProps {
  card: CardData;
  onEdit?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ card, onEdit }, ref) => {
  return (
    <div ref={ref} className="card-container">
      {onEdit && (
        <IconButton
          onClick={onEdit}
          size="small"
          className="edit-button"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      )}
      {card.image && (
        <img
          src={card.image}
          alt={`Illustration for ${card.title}`}
          className="card-image"
        />
      )}
      <h2>{card.icon} {card.title}</h2>
      <p>{card.description}</p>
      <p><em>{card.category}</em></p>
    </div>
  );
});

export default Card;
