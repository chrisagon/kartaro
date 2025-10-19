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
} from '@mui/material';
import { 
  Add as AddIcon,
  Save as SaveIcon,
  Print as PrintIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import ModernInputForm from '../components/ModernInputForm';
import ModernCardGrid from '../components/ModernCardGrid';
import GenerationMetrics from '../components/GenerationMetrics';
import { useCards, useCollections, useApp } from '../context/AppContext';
import { generatePdfFromCards } from '../services/PdfService';
import * as ApiService from '../services/ApiService';

export const ModernMainPage: React.FC = () => {
  const { cards = [] } = useCards();
  const { getCollections } = useCollections();
  const { state } = useApp();
  
  const [isSavingQuick, setIsSavingQuick] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [collectionName, setCollectionName] = useState('');

  // Chargement initial des collections
  useEffect(() => {
    getCollections();
  }, [getCollections]);

  const handleQuickSave = () => {
    setSaveDialogOpen(true);
    setCollectionName('');
  };

  const handleSaveConfirm = async () => {
    if (!collectionName.trim() || cards.length === 0) {
      return;
    }

    setIsSavingQuick(true);
    try {
      await ApiService.createCollection({
        name: collectionName.trim(),
        cards: cards,
        isPublic: false
      });
      await getCollections();
      setSaveDialogOpen(false);
      setCollectionName('');
    } catch (error) {
      console.error('Error saving collection:', error);
      alert('Failed to save collection. Please try again.');
    } finally {
      setIsSavingQuick(false);
    }
  };

  const handleGeneratePdf = async () => {
    if (cards.length === 0 || isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      await generatePdfFromCards(cards, `cards-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
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
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Générateur de Cartes IA
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
        {state.metrics && (
          <motion.div variants={itemVariants}>
            <GenerationMetrics />
          </motion.div>
        )}

        {/* Grille de cartes */}
        <motion.div variants={itemVariants}>
          <ModernCardGrid />
        </motion.div>

        {/* Boutons d'action */}
        {cards.length > 0 && (
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={isSavingQuick ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                onClick={handleQuickSave}
                disabled={isSavingQuick}
                sx={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
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
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {isGeneratingPdf ? 'Génération...' : 'Télécharger PDF 3'}
              </Button>
            </Box>
          </motion.div>
        )}

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
              <Typography variant="body2">
                L'IA crée vos cartes personnalisées
              </Typography>
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
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
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
