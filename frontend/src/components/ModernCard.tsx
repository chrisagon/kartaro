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
  IconButton,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { CardData } from '../types/app';
import { getCategoryColor } from '../constants/categories';

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
  const categoryColor = getCategoryColor(card.category);
  
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
          position: 'relative',
          '&:hover': {
            transform: onClick ? 'translateY(-8px)' : 'none',
            elevation: elevation + 2,
            boxShadow: 4,
          },
          borderRadius: 3,
          overflow: 'hidden',
          borderTop: `4px solid ${categoryColor}`,
        }}
      >
        {/* Bouton d'édition */}
        {onEdit && (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'background.paper',
              boxShadow: 2,
              zIndex: 1,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}

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
              sx={{
                borderRadius: 2,
                fontWeight: 500,
                backgroundColor: `${categoryColor}15`,
                borderColor: categoryColor,
                color: categoryColor,
                border: `1px solid ${categoryColor}`,
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
