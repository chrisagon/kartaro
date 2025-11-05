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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useGeneration } from '../context/AppContext';
import {
  AutoAwesome as GenerateIcon,
  Lightbulb as ThemeIcon,
  Description as ContextIcon,
  PlayArrow as StartIcon,
  Palette as StyleIcon,
  Group as PublicIcon, // Ajout de l'icône pour le public
  Cached as RegenerateIcon, // Ajout de l'icône pour la génération
} from '@mui/icons-material';

interface ModernInputFormProps {
  onGenerate?: (theme: string, context: string) => void;
}

export const ModernInputForm: React.FC<ModernInputFormProps> = ({ onGenerate }) => {
  const { isGenerating, generateCards, generateContext } = useGeneration();
  const [theme, setTheme] = useState('');
  const [publicTarget, setPublicTarget] = useState(''); // Nouvel état pour le public
  const [context, setContext] = useState('');
  const [isGeneratingContext, setIsGeneratingContext] = useState(false); // État de chargement pour le contexte
  const [numCards, setNumCards] = useState<number>(10);
  const [stylePreset, setStylePreset] = useState<string>('isometric');
  const [error, setError] = useState<string | null>(null);

  // Options de style disponibles pour Stability AI
  const stylePresetOptions = [
    { value: 'anime', label: 'Anime' },
    { value: 'comic-book', label: 'Comic Book' },
    { value: 'digital-art', label: 'Digital Art' },
    { value: 'enhance', label: 'Enhanced' },
    { value: 'fantasy-art', label: 'Fantasy Art' },
    { value: 'isometric', label: 'Isometric' },
    { value: 'pixel-art', label: 'Pixel Art' },
  ];

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

  const handleGenerateContext = async () => {
    if (!theme.trim() || !publicTarget.trim()) {
      setError('Veuillez renseigner le thème et le public pour générer le contexte.');
      return;
    }
    setError(null);
    setIsGeneratingContext(true);
    try {
      const result = await generateContext(theme, publicTarget);
      setContext(result.context);
    } catch (err) {
      setError('Erreur lors de la génération du contexte.');
      console.error('Erreur de génération de contexte:', err);
    } finally {
      setIsGeneratingContext(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!theme.trim() || !context.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setError(null);

    try {
      await generateCards(theme.trim(), context.trim(), numCards, stylePreset);
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

            {/* Champ Public Cible */}
            <Box>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                <PublicIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Public Cible
              </Typography>
              <TextField
                fullWidth
                placeholder="Ex: Jeunes professionnels, Adolescents, Experts IT..."
                value={publicTarget}
                onChange={(e) => setPublicTarget(e.target.value)}
                disabled={isGenerating || isGeneratingContext}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'background.paper',
                  },
                }}
              />
            </Box>

            {/* Bouton de génération de contexte */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateContext}
                disabled={isGenerating || isGeneratingContext || !theme.trim() || !publicTarget.trim()}
                startIcon={isGeneratingContext ? undefined : <RegenerateIcon />}
              >
                {isGeneratingContext ? 'Génération...' : 'Générer le contexte avec IA'}
              </Button>
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
                minRows={4}
                maxRows={12}
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

            {/* Nombre de cartes */}
            <Box>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                🔢 Nombre de cartes
              </Typography>
              <TextField
                fullWidth
                type="number"
                placeholder="Nombre de cartes à générer"
                value={numCards}
                onChange={(e) => setNumCards(Math.min(Math.max(parseInt(e.target.value) || 10, 1), 200))}
                disabled={isGenerating}
                variant="outlined"
                inputProps={{ min: 1, max: 200, step: 1 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'background.paper',
                  },
                }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Choisissez entre 1 et 200 cartes (par défaut: 10)
              </Typography>
            </Box>

            {/* Style preset pour Stability AI */}
            <Box>
              <Typography variant="subtitle1" gutterBottom fontWeight={500}>
                <StyleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Style d'image
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Style d'image</InputLabel>
                <Select
                  value={stylePreset}
                  onChange={(e) => setStylePreset(e.target.value)}
                  label="Style d'image"
                  disabled={isGenerating}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'background.paper',
                    },
                  }}
                >
                  {stylePresetOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Choisissez le style artistique pour les images générées
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
                background: 'linear-gradient(135deg, #ff983f 0%, #e77409 100%)',
                boxShadow: '0px 4px 12px rgba(231, 116, 9, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #e77409 0%, #c05d00 100%)',
                  boxShadow: '0px 6px 16px rgba(231, 116, 9, 0.4)',
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
