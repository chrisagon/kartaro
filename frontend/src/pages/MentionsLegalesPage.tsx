import React from 'react';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';

const MentionsLegalesPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', py: 8 }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Mentions légales
            </Typography>
            <Typography color="text.secondary">
              Version mise à jour le {new Date().toLocaleDateString('fr-FR')}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Responsable de la publication
            </Typography>
            <Typography>
              Christophe THOMAS — 46 rue d'Argenteuil, 95210 Saint Gratien, France.
              <br />
              Email : christof.thomas@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Hébergeur
            </Typography>
            <Typography>
              Render.com — 525 Brannan St Suite 300, San Francisco, CA 94107, États-Unis (serveur : Francfort, Allemagne).
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Propriété intellectuelle
            </Typography>
            <Typography>
              Les contenus et la marque Kartaro sont protégés. Toute reproduction partielle ou totale nécessite l’autorisation écrite de l’éditeur.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Données personnelles
            </Typography>
            <Typography>
              Kartaro applique le RGPD. Pour exercer vos droits (accès, rectification, suppression), contactez-nous à l’adresse email ci-dessus.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Références
            </Typography>
            <Typography>
              Consultez également nos Conditions Générales d’Utilisation (CGU) et notre Politique de confidentialité accessibles via le site.
            </Typography>
          </Box>

          <Divider />

          <Box>
            <Typography variant="h5" gutterBottom>
              Limitation de responsabilité
            </Typography>
            <Typography>
              L’éditeur ne peut être tenu responsable des dommages directs ou indirects liés à l’utilisation du service, ni des contenus générés par les utilisateurs.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MentionsLegalesPage;
