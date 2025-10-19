import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
  IconButton,
  Alert,
} from '@mui/material';
import {
  Close as CloseIcon,
  Refresh as RefreshIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import { CardData } from '../types/app';
import * as ApiService from '../services/ApiService';

interface CardEditModalProps {
  open: boolean;
  card: CardData | null;
  theme?: string;
  context?: string;
  onClose: () => void;
  onSave: (updatedCard: CardData) => void;
}

export const CardEditModal: React.FC<CardEditModalProps> = ({
  open,
  card,
  theme,
  context,
  onClose,
  onSave,
}) => {
  const [editedCard, setEditedCard] = useState<CardData | null>(card);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    setEditedCard(card);
    setError(null);
  }, [card]);

  if (!editedCard) return null;

  const handleRegenerateImage = async () => {
    setIsRegenerating(true);
    setError(null);
    try {
      const result = await ApiService.regenerateCardImage(editedCard, theme, context);
      setEditedCard({ ...editedCard, image: result.image });
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la régénération de l\'image');
      console.error('Error regenerating image:', err);
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleSave = () => {
    if (editedCard) {
      onSave(editedCard);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Éditer la carte</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Image Preview */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Image de la carte
            </Typography>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 400,
                mx: 'auto',
                aspectRatio: '1',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {editedCard.image && (
                <img
                  src={editedCard.image}
                  alt={editedCard.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              )}
              {isRegenerating && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
            </Box>
            <Button
              variant="outlined"
              startIcon={isRegenerating ? <CircularProgress size={16} /> : <RefreshIcon />}
              onClick={handleRegenerateImage}
              disabled={isRegenerating}
              fullWidth
              sx={{ mt: 2 }}
            >
              {isRegenerating ? 'Régénération en cours...' : 'Régénérer l\'image'}
            </Button>
          </Box>

          {/* Title */}
          <TextField
            label="Titre"
            fullWidth
            value={editedCard.title}
            onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
            variant="outlined"
          />

          {/* Description */}
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={editedCard.description}
            onChange={(e) => setEditedCard({ ...editedCard, description: e.target.value })}
            variant="outlined"
          />

          {/* Icon */}
          <TextField
            label="Icône (emoji)"
            fullWidth
            value={editedCard.icon}
            onChange={(e) => setEditedCard({ ...editedCard, icon: e.target.value })}
            variant="outlined"
            inputProps={{ maxLength: 2 }}
          />

          {/* Category */}
          <TextField
            label="Catégorie"
            fullWidth
            value={editedCard.category}
            onChange={(e) => setEditedCard({ ...editedCard, category: e.target.value })}
            variant="outlined"
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Annuler
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          startIcon={<SaveIcon />}
          disabled={isRegenerating}
        >
          Sauvegarder
        </Button>
      </DialogActions>
    </Dialog>
  );
};
