// src/components/ModernCardGrid.tsx
import React, { useState, useRef } from 'react';
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
  CircularProgress,
  Tooltip,
} from '@mui/material';
import {
  Download as DownloadIcon,
  GridView as GridIcon,
  ViewList as ListIcon,
  Settings as SettingsIcon,
  Archive as ZipIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useCards, useApp } from '../context/AppContext';
import { CardData } from '../types/app';
import ModernCard from './ModernCard';
import { CardEditModal } from './CardEditModal';
import { exportElementAsPng, renderElementAsDataUrl } from '../utils/exportToPng';
import JSZip from 'jszip';

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
  const { state, api } = useApp();
  const [editingCard, setEditingCard] = useState<{ card: CardData; index: number } | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [compressionQuality, setCompressionQuality] = useState<'high' | 'medium' | 'low'>('medium');
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);
  const [isExportingPng, setIsExportingPng] = useState<number | null>(null);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    if (isGeneratingPdf) {
      return;
    }

    if (!cards || cards.length === 0) {
      alert('Cette collection ne contient aucune carte à exporter.');
      return;
    }

    setIsGeneratingPdf(true);
    try {
      await api.generatePdfForCards(cards, {
        metadata: state.generationMetadata ?? undefined,
        name: state.currentCollection?.name ?? state.generationMetadata?.theme,
        description: state.currentCollection?.description,
      });
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

  const handleExportCardPng = async (card: CardData, index: number) => {
    const ref = cardRefs.current[card.id];
    if (!ref) return;
    setIsExportingPng(index);
    try {
      await exportElementAsPng(ref, {
        fileName: `${card.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${card.id}.png`,
        pixelRatio: 2,
      });
    } catch (err) {
      console.error('Erreur export PNG:', err);
      alert('Échec de l\'export PNG.');
    } finally {
      setIsExportingPng(null);
    }
  };

  const handleExportCollectionZip = async () => {
    if (cards.length === 0) {
      alert('Aucune carte à exporter.');
      return;
    }
    setIsExportingZip(true);
    const zip = new JSZip();
    try {
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const ref = cardRefs.current[card.id];
        if (ref) {
          const dataUrl = await renderElementAsDataUrl(ref, 2);
          const base64 = dataUrl.split(',')[1];
          zip.file(`${card.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${card.id}.png`, base64, { base64: true });
        }
      }
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${state.currentCollection?.name || 'collection'}_${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error('Erreur export ZIP:', err);
      alert('Échec de l\'export ZIP.');
    } finally {
      setIsExportingZip(false);
    }
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

          {/* Bouton téléchargement ZIP */}
          <Tooltip title="Télécharger toutes les cartes au format PNG dans un fichier ZIP">
            <Button
              variant="outlined"
              startIcon={isExportingZip ? <CircularProgress size={16} /> : <ZipIcon />}
              onClick={handleExportCollectionZip}
              disabled={isExportingZip || cards.length === 0}
              size={isMobile ? 'small' : 'medium'}
            >
              {isExportingZip ? 'Export...' : 'ZIP'}
            </Button>
          </Tooltip>

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
                  ref={(el) => { cardRefs.current[card.id] = el; }}
                  card={card}
                  onClick={() => handleCardClick(card)}
                  onEdit={() => handleEditCard(card, index)}
                  onExport={() => handleExportCardPng(card, index)}
                  isExporting={isExportingPng === index}
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
