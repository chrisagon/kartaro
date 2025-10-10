// src/components/ModernCard.tsx
import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Icon,
  Box,
  Chip,
  Fade,
} from '@mui/material';
import { CardData } from '../types/app';

interface ModernCardProps {
  card: CardData;
  onClick?: () => void;
  onEdit?: () => void;
  elevation?: number;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  card,
  onClick,
  onEdit,
  elevation = 2,
}) => {
  return (
    <Fade in timeout={600}>
      <MuiCard
        elevation={elevation}
        onClick={onClick}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: onClick ? 'translateY(-8px)' : 'none',
            elevation: elevation + 2,
            boxShadow: 4,
          },
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {card.image && (
          <CardMedia
            component="img"
            height={160}
            image={card.image}
            alt={`Illustration pour ${card.title}`}
            sx={{
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        )}

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Icon sx={{ mr: 1, color: 'primary.main' }}>
              {card.icon}
            </Icon>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.5,
            }}
          >
            {card.description}
          </Typography>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Chip
              label={card.category}
              size="small"
              variant="outlined"
              sx={{
                borderRadius: 2,
                fontWeight: 500,
              }}
            />

            {onEdit && (
              <Typography
                variant="caption"
                color="primary"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
              >
                Modifier
              </Typography>
            )}
          </Box>
        </CardContent>
      </MuiCard>
    </Fade>
  );
};

export default ModernCard;
