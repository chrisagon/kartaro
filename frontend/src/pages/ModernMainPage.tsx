// src/pages/ModernMainPage.tsx
import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Fab,
  Zoom,
  useScrollTrigger,
  Divider,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

import ModernInputForm from '../components/ModernInputForm';
import ModernCardGrid from '../components/ModernCardGrid';
import GenerationMetrics from '../components/GenerationMetrics';
import { useCards, useCollections, useApp } from '../context/AppContext';

export const ModernMainPage: React.FC = () => {
  const { cards, selectedCard, setSelectedCard } = useCards();
  const { collections, getCollections } = useCollections();
  const { state } = useApp();

  // Chargement initial des collections
  useEffect(() => {
    getCollections();
  }, [getCollections]);

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
              onClick={() => setSelectedCard(null)}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </motion.div>
    </Container>
  );
};

export default ModernMainPage;
