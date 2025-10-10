// src/components/ModernCardGrid.tsx
import React from 'react';
import {
  Typography,
  Box,
  Button,
  Alert,
  Skeleton,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import {
  Download as DownloadIcon,
  GridView as GridIcon,
  ViewList as ListIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCards, useGeneration } from '../context/AppContext';
import { CardData } from '../types/app';
import ModernCard from './ModernCard';

interface ModernCardGridProps {
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
}

export const ModernCardGrid: React.FC<ModernCardGridProps> = ({
  viewMode = 'grid',
  onViewModeChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { cards, selectedCard, setSelectedCard } = useCards();
  const { isGeneratingPdf, generatePdfForCards } = useGeneration();

  const handleCardClick = (card: CardData) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const handleDownloadPdf = async () => {
    if (cards.length > 0) {
      try {
        const pdfBlob = await generatePdfForCards(cards);
        const url = window.URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `cartes-${Date.now()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
      }
    }
  };

  if (cards.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          border: '2px dashed',
          borderColor: 'divider',
        }}
      >
        <GridIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Aucune carte générée
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Utilisez le formulaire ci-dessus pour générer vos premières cartes
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* En-tête avec statistiques et contrôles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Cartes générées ({cards.length})
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* Bouton téléchargement PDF */}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf || cards.length === 0}
            size={isMobile ? 'small' : 'medium'}
          >
            {isGeneratingPdf ? 'Génération...' : 'Télécharger PDF'}
          </Button>

          {/* Contrôles de vue (si callback fourni) */}
          {onViewModeChange && (
            <Box sx={{ display: 'flex', border: 1, borderColor: 'divider', borderRadius: 1 }}>
              <Button
                size="small"
                variant={viewMode === 'grid' ? 'contained' : 'text'}
                onClick={() => onViewModeChange('grid')}
                sx={{ borderRadius: 0.5, minWidth: 'auto', px: 2 }}
              >
                <GridIcon />
              </Button>
              <Button
                size="small"
                variant={viewMode === 'list' ? 'contained' : 'text'}
                onClick={() => onViewModeChange('list')}
                sx={{ borderRadius: 0.5, minWidth: 'auto', px: 2 }}
              >
                <ListIcon />
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Grille de cartes avec animations */}
      <AnimatePresence mode="wait">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
          {cards.map((card: CardData, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <ModernCard
                  card={card}
                  onClick={() => handleCardClick(card)}
                  elevation={selectedCard?.id === card.id ? 4 : 2}
                />
              </motion.div>
          ))}
        </Box>
      </AnimatePresence>

      {/* Message de succès après génération */}
      {cards.length > 0 && (
        <Alert
          severity="success"
          sx={{
            mt: 3,
            borderRadius: 2,
            '& .MuiAlert-icon': {
              color: 'success.main',
            },
          }}
        >
          <Typography variant="body2">
            <strong>{cards.length} cartes</strong> ont été générées avec succès !
            Cliquez sur une carte pour la sélectionner ou utilisez le bouton de téléchargement pour exporter en PDF.
          </Typography>
        </Alert>
      )}
    </Box>
  );
};

export default ModernCardGrid;
