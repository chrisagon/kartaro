import React from 'react';
import { CardData } from '../types/app';
import { IconButton } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

interface CardProps {
  card: CardData;
  onEdit?: () => void;
}

const Card: React.FC<CardProps> = ({ card, onEdit }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px', position: 'relative' }}>
      {onEdit && (
        <IconButton
          onClick={onEdit}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'white',
            },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      )}
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
