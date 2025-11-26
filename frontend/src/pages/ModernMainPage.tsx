// src/pages/ModernMainPage.tsx
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Fab,
  Zoom,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { 
  Add as AddIcon,
  Save as SaveIcon,
  Print as PrintIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

import ModernInputForm from '../components/ModernInputForm';
import ModernCardGrid from '../components/ModernCardGrid';
import GenerationMetrics from '../components/GenerationMetrics';
import { useCards, useCollections, useApp, useGeneration } from '../context/AppContext';
import { generatePdfFromCards } from '../services/PdfService';
import { Visibility } from '../types/app';

export const ModernMainPage: React.FC = () => {
  const { cards = [] } = useCards();
  const { getCollections, createCollection } = useCollections();
  const { state } = useApp();
  const { imageGenerationProgress } = useGeneration();
  
  const [isSavingQuick, setIsSavingQuick] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [collectionName, setCollectionName] = useState('');
  const [collectionVisibility, setCollectionVisibility] = useState<Visibility>('private');

  // Chargement initial des collections
  useEffect(() => {
    getCollections();
  }, [getCollections]);

  const handleQuickSave = () => {
    setSaveDialogOpen(true);
    setCollectionName('');
    setCollectionVisibility('private');
  };

  const handleSaveConfirm = async () => {
    if (!collectionName.trim() || cards.length === 0) {
      return;
    }

    setIsSavingQuick(true);
    try {
      await createCollection({
        name: collectionName.trim(),
        cards: cards,
        isPublic: collectionVisibility === 'public',
        theme: state.generationMetadata?.theme,
        publicTarget: state.generationMetadata?.publicTarget,
        context: state.generationMetadata?.context,
      });
      await getCollections();
      setSaveDialogOpen(false);
      setCollectionName('');
    } catch (error: any) {
      console.error('Error saving collection:', error);
      if (error && error.code === 'INSUFFICIENT_CREDITS') {
        alert("Crédits insuffisants pour sauvegarder cette collection. Contactez un administrateur pour recharger votre compte.");
      } else {
        alert(error instanceof Error ? error.message : 'Failed to save collection. Please try again.');
      }
    } finally {
      setIsSavingQuick(false);
    }
  };

  const handleGeneratePdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      await generatePdfFromCards(cards, {
        metadata: state.generationMetadata ?? undefined,
        name: state.currentCollection?.name ?? state.generationMetadata?.theme,
        description: state.currentCollection?.description,
      });
    } catch (error: any) {
      console.error('Error generating PDF:', error);
      if (error && error.code === 'INSUFFICIENT_CREDITS') {
        alert("Crédits insuffisants pour générer ce PDF. Contactez un administrateur pour recharger votre compte.");
      } else {
        alert(error instanceof Error ? error.message : 'Failed to generate PDF. Please try again.');
      }
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Animation des éléments principaux
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  } as const;

  return (
    <Container maxWidth="xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* En-tête de la page */}
        <motion.div variants={itemVariants}>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight={700}
              sx={{
                background: 'linear-gradient(135deg, #ff983f 0%, #e77409 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kartaro IA : votre laboratoire de Deck IA
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Créez des cartes d'apprentissage personnalisées avec l'intelligence artificielle.
              Définissez votre thème et votre contexte pour des résultats optimaux.
            </Typography>
          </Box>
        </motion.div>

        <Divider sx={{ my: 4 }} />

        {/* Formulaire de génération */}
        <motion.div variants={itemVariants}>
          <ModernInputForm />
        </motion.div>

        {/* Métriques de génération */}
        <AnimatePresence>
          {state.lastGenerationResult && state.lastGenerationResult.metrics && (
            <motion.div
              key="metrics-block"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GenerationMetrics />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grille de cartes */}
        <motion.div variants={itemVariants}>
          <ModernCardGrid />
        </motion.div>

        {/* Boutons d'action */}
        <AnimatePresence>
          {cards.length > 0 && (
            <motion.div
              key="actions-block"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={isSavingQuick ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                  onClick={handleQuickSave}
                  disabled={isSavingQuick}
                  sx={{
                    background: 'linear-gradient(135deg, #ff983f 0%, #e77409 100%)',
                    color: '#ffffff',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #e77409 0%, #c05d00 100%)',
                      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {isSavingQuick ? 'Sauvegarde...' : 'Sauvegarder la Collection'}
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={isGeneratingPdf ? <CircularProgress size={20} color="inherit" /> : <PrintIcon />}
                  onClick={handleGeneratePdf}
                  disabled={isGeneratingPdf}
                  sx={{
                    background: 'linear-gradient(135deg, #ff983f 0%, #e77409 100%)',
                    color: '#ffffff',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #e77409 0%, #c05d00 100%)',
                      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {isGeneratingPdf ? 'Génération...' : 'Télécharger PDF'}
                </Button>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* État de génération */}
        {state.isGenerating && (
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Génération en cours...
              </Typography>
              {imageGenerationProgress && imageGenerationProgress.total > 0 ? (
                <Typography variant="body2">
                  Génération de l'image {imageGenerationProgress.current} / {imageGenerationProgress.total}
                </Typography>
              ) : (
                <Typography variant="body2">
                  Génération du texte des cartes...
                </Typography>
              )}
            </Box>
          </motion.div>
        )}

        {/* Bouton flottant pour nouvelle génération */}
        {cards.length > 0 && (
          <Zoom in={true}>
            <Fab
              color="primary"
              aria-label="nouvelle génération"
              sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                background: 'linear-gradient(135deg, #ff983f 0%, #e77409 100%)',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </motion.div>

      {/* Dialog de sauvegarde */}
      <Dialog open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Sauvegarder la Collection</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom de la collection"
            type="text"
            fullWidth
            variant="outlined"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && collectionName.trim()) {
                handleSaveConfirm();
              }
            }}
          />
          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="collection-visibility-label">Visibilité</InputLabel>
              <Select
                labelId="collection-visibility-label"
                value={collectionVisibility}
                label="Visibilité"
                onChange={(event) => setCollectionVisibility(event.target.value as Visibility)}
              >
                <MenuItem value="private">Privée (visible uniquement par vous)</MenuItem>
                <MenuItem value="public">Publique (visible par tous)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSaveDialogOpen(false)}>Annuler</Button>
          <Button 
            onClick={handleSaveConfirm} 
            variant="contained"
            disabled={!collectionName.trim() || isSavingQuick}
          >
            {isSavingQuick ? 'Sauvegarde...' : 'Sauvegarder'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ModernMainPage;
