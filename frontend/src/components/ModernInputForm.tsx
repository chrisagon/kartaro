// src/components/ModernInputForm.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  LinearProgress,
  Chip,
  Stack,
  Paper,
} from '@mui/material';
import {
  AutoAwesome as GenerateIcon,
  Lightbulb as ThemeIcon,
  Description as ContextIcon,
  PlayArrow as StartIcon,
} from '@mui/icons-material';
import { useGeneration } from '../context/AppContext';

interface ModernInputFormProps {
  onGenerate?: (theme: string, context: string) => void;
}

export const ModernInputForm: React.FC<ModernInputFormProps> = ({ onGenerate }) => {
  const { isGenerating, generateCards } = useGeneration();
  const [theme, setTheme] = useState('');
  const [context, setContext] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Suggestions de thèmes prédéfinis
  const themeSuggestions = [
    'Intelligence Artificielle',
    'Responsabilité sociale de l\'entreprise',
    'Cybersécurité',
    'Archéologie',
    'Jeux vidéos',
    'Entrepreneuriat',
    'Santé et Bien-être',
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!theme.trim() || !context.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setError(null);

    try {
      await generateCards(theme.trim(), context.trim());
    } catch (err) {
      setError('Erreur lors de la génération. Veuillez réessayer.');
      console.error('Erreur de génération:', err);
    }
  };

  const handleThemeSuggestion = (suggestion: string) => {
    setTheme(suggestion);
  };

  return (
    <Card elevation={2} sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <GenerateIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h5" component="h2" fontWeight={600}>
            Générer de nouvelles cartes
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {/* Champ thème */}
            <Box>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                <ThemeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Thème
              </Typography>
              <TextField
                fullWidth
                placeholder="Ex: Intelligence Artificielle, Archéologie, Jeux vidéos..."
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                disabled={isGenerating}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'background.paper',
                  },
                }}
              />
            </Box>

            {/* Suggestions de thèmes */}
            <Box>
              <Typography variant="subtitle2" gutterBottom color="text.secondary">
                Suggestions de thèmes :
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {themeSuggestions.map((suggestion) => (
                  <Chip
                    key={suggestion}
                    label={suggestion}
                    onClick={() => handleThemeSuggestion(suggestion)}
                    variant={theme === suggestion ? 'filled' : 'outlined'}
                    color={theme === suggestion ? 'primary' : 'default'}
                    size="small"
                    sx={{ cursor: 'pointer' }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Champ contexte */}
            <Box>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                <ContextIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Contexte
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Décrivez le contexte, les objectifs d'apprentissage, ou les spécificités que vous souhaitez aborder..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                disabled={isGenerating}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'background.paper',
                  },
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Décrivez le contexte détaillé pour des cartes plus pertinentes
              </Typography>
            </Box>

            {/* Barre de progression */}
            {isGenerating && (
              <Box>
                <Typography variant="body2" color="primary" gutterBottom>
                  Génération en cours...
                </Typography>
                <LinearProgress />
              </Box>
            )}

            {/* Bouton de génération */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isGenerating || !theme.trim() || !context.trim()}
              startIcon={isGenerating ? undefined : <StartIcon />}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)',
                  boxShadow: '0px 6px 16px rgba(37, 99, 235, 0.4)',
                },
                '&:disabled': {
                  background: 'grey.400',
                  boxShadow: 'none',
                },
              }}
            >
              {isGenerating ? 'Génération en cours...' : 'Générer les cartes'}
            </Button>
          </Stack>
        </Box>

        {/* Informations d'aide */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: 'primary.50',
            border: '1px solid',
            borderColor: 'primary.100',
          }}
        >
          <Typography variant="body2" color="primary.main" fontWeight={500}>
            💡 Astuce : Plus votre contexte est détaillé, plus les cartes générées seront pertinentes et adaptées à vos besoins !
          </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default ModernInputForm;
