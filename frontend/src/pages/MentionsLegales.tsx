import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MentionsLegales: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Mentions Légales
        </Typography>
        
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Responsable de la publication
        </Typography>
        <Typography variant="body1" paragraph>
          Le responsable est Christophe THOMAS, 46 rue d&apos;Argenteuil, 95210 Saint Gratien, christof.thomas@gmail.com.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Hébergeur
        </Typography>
        <Typography variant="body1" paragraph>
          Render.com, 525 Brannan St Suite 300, San Francisco, CA 94107, United States. Serveur (Frankfurt, Allemagne).
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Propriété intellectuelle
        </Typography>
        <Typography variant="body1" paragraph>
          Les contenus et la marque Kartaro sont protégés par le droit d&apos;auteur, que toute reproduction est interdite sans autorisation.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Données personnelles
        </Typography>
        <Typography variant="body1" paragraph>
          Conformité RGPD : nous contacter pour exercer vos droits (accès, rectification, suppression).
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Conditions générales d'utilisation
        </Typography>
        <Typography variant="body1" paragraph>
          Lien explicite vers les CGU et la politique de confidentialité via les mentions légales.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Limitation de responsabilité
        </Typography>
        <Typography variant="body1" paragraph>
          L&apos;éditeur ne peut être tenu responsable des dommages directs/indirects liés à l&apos;utilisation du service, ni des contenus générés par les utilisateurs.
        </Typography>

        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ mt: 4 }}>
          <Typography 
            variant="body2" 
            color="primary" 
            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            onClick={() => navigate('/')}
          >
            ← Retour à l'accueil
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default MentionsLegales;
