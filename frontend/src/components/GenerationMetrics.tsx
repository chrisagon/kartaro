import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Alert,
  Stack,
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Speed as SpeedIcon,
  Storage as StorageIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { useGeneration } from '../context/AppContext';

export const GenerationMetrics: React.FC = () => {
  const { metrics } = useGeneration();

  if (!metrics) {
    return null;
  }

  const successRate = metrics.totalRequests > 0
    ? ((metrics.totalRequests - metrics.imageFailures) / metrics.totalRequests) * 100
    : 0;

  return (
    <Card elevation={1} sx={{ mb: 3, backgroundColor: 'primary.50' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AnalyticsIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600}>
            Statistiques de génération
          </Typography>
        </Box>

        <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {/* Requêtes totales */}
          <Box sx={{ textAlign: 'center', minWidth: 120 }}>
            <Typography variant="h4" fontWeight={700} color="primary.main">
              {metrics.totalRequests}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Requêtes totales
            </Typography>
          </Box>

          {/* Requêtes texte */}
          <Box sx={{ textAlign: 'center', minWidth: 120 }}>
            <Typography variant="h4" fontWeight={700} color="secondary.main">
              {metrics.textRequests}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Requêtes texte
            </Typography>
          </Box>

          {/* Requêtes images */}
          <Box sx={{ textAlign: 'center', minWidth: 120 }}>
            <Typography variant="h4" fontWeight={700} color="success.main">
              {metrics.imageRequests}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Requêtes images
            </Typography>
          </Box>

          {/* Taux de succès */}
          <Box sx={{ textAlign: 'center', minWidth: 120 }}>
            <Typography variant="h4" fontWeight={700} color="warning.main">
              {successRate.toFixed(1)}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Taux de succès
            </Typography>
          </Box>
        </Stack>

        {/* Barre de progression du taux de succès */}
        <Box sx={{ mt: 3, mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Taux de succès des images
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {successRate.toFixed(1)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={successRate}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundColor: successRate > 80 ? 'success.main' : successRate > 60 ? 'warning.main' : 'error.main',
              },
            }}
          />
        </Box>

        {/* Informations détaillées */}
        <Stack direction="row" spacing={2} sx={{ mt: 1, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 200px' }}>
            <StorageIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">
              <strong>Taille de réponse :</strong> {metrics.responseKilobytes} KB
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 200px' }}>
            <SpeedIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">
              <strong>Performance :</strong> {metrics.responseBytes} bytes
            </Typography>
          </Box>
        </Stack>

        {/* Alertes pour les échecs */}
        {metrics.imageFailures > 0 && (
          <Alert
            severity="warning"
            sx={{ mt: 2 }}
            icon={<ErrorIcon />}
          >
            <Typography variant="body2">
              {metrics.imageFailures} images n'ont pas pu être générées.
              Cela peut être dû à des limitations de l'API ou à des problèmes de réseau.
            </Typography>
          </Alert>
        )}

        {/* Succès total */}
        {metrics.imageFailures === 0 && metrics.totalRequests > 0 && (
          <Alert
            severity="success"
            sx={{ mt: 2 }}
            icon={<SuccessIcon />}
          >
            <Typography variant="body2">
              Excellente génération ! Toutes les requêtes ont réussi avec un taux de succès de 100%.
            </Typography>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default GenerationMetrics;
