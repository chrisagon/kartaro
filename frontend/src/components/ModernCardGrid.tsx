// src/components/ModernCardGrid.tsx
import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Alert,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Chip,
} from '@mui/material';
import {
  Download as DownloadIcon,
  GridView as GridIcon,
  ViewList as ListIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCards, useApp } from '../context/AppContext';
import { CardData } from '../types/app';
import ModernCard from './ModernCard';
import { CardEditModal } from './CardEditModal';
import { generatePdfFromCards } from '../services/PdfService';

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
  const { cards = [], selectedCard, setSelectedCard, updateCard } = useCards();
  const { state } = useApp();
  const [editingCard, setEditingCard] = useState<{ card: CardData; index: number } | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [compressionQuality, setCompressionQuality] = useState<'high' | 'medium' | 'low'>('medium');
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const handleEditCard = (card: CardData, index: number) => {
    setEditingCard({ card, index });
  };

  const handleSaveCard = (updatedCard: CardData) => {
    console.log('Saving card with ID:', updatedCard.id);
    console.log('Updated card:', updatedCard);
    updateCard(updatedCard);
    setEditingCard(null);
  };

  const handleDownloadPdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      const config = getCompressionConfig();
      await generatePdfFromCards(cards, `cards-${Date.now()}.pdf`, config);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleQualityChange = (event: SelectChangeEvent) => {
    setCompressionQuality(event.target.value as 'high' | 'medium' | 'low');
  };

  // Configuration de compression basée sur le choix utilisateur
  const getCompressionConfig = () => {
    switch (compressionQuality) {
      case 'high':
        return { imageQuality: 0.9, maxImageSize: 1024 };
      case 'medium':
        return { imageQuality: 0.7, maxImageSize: 512 };
      case 'low':
        return { imageQuality: 0.5, maxImageSize: 256 };
      default:
        return { imageQuality: 0.7, maxImageSize: 512 };
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
          {/* Bouton paramètres de compression */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<SettingsIcon />}
            onClick={handleSettingsClick}
            sx={{ minWidth: 'auto' }}
          >
            {isMobile ? '' : 'Qualité'}
          </Button>

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
                  onEdit={() => handleEditCard(card, index)}
                  elevation={selectedCard?.id === card.id ? 4 : 2}
                />
              </motion.div>
          ))}
        </Box>
      </AnimatePresence>

      {/* Modal d'édition */}
      <CardEditModal
        open={editingCard !== null}
        card={editingCard?.card || null}
        theme={state.lastGenerationResult?.cards[0]?.category || ''}
        context={''}
        onClose={() => setEditingCard(null)}
        onSave={handleSaveCard}
      />

      {/* Menu de paramètres de compression */}
      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={handleSettingsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, minWidth: 200 }}>
          <Typography variant="subtitle2" gutterBottom>
            Qualité de compression
          </Typography>
          <FormControl fullWidth size="small" sx={{ mt: 1 }}>
            <InputLabel>Qualité</InputLabel>
            <Select
              value={compressionQuality}
              label="Qualité"
              onChange={handleQualityChange}
            >
              <MenuItem value="high">
                <Box>
                  <Typography>Haute qualité</Typography>
                  <Typography variant="caption" color="text.secondary">
                    90% qualité, max 1024px
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="medium">
                <Box>
                  <Typography>Équilibrée</Typography>
                  <Typography variant="caption" color="text.secondary">
                    70% qualité, max 512px
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value="low">
                <Box>
                  <Typography>Comprimée</Typography>
                  <Typography variant="caption" color="text.secondary">
                    50% qualité, max 256px
                  </Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          <Chip
            label={`Taille estimée: ${compressionQuality === 'high' ? 'Grande' : compressionQuality === 'medium' ? 'Moyenne' : 'Petite'}`}
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>
      </Menu>

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
