import React from 'react';
import { Box, Container, Typography, Stack, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', py: 8 }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Politique de confidentialité
            </Typography>
            <Typography color="text.secondary">
              Version mise à jour le {new Date().toLocaleDateString('fr-FR')}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              1. Données collectées
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="À l’inscription : pseudonyme, email, crédits, dates de création et de dernière connexion." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sur le serveur Render.com (UE, Francfort) : adresse IP conservée 1 mois." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prestataires de paiement (Stripe, Paypal) : données de paiement non accessibles à l’éditeur." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              2. Utilisation des données
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Gestion des comptes utilisateurs et des crédits." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sécurité, support et bon fonctionnement du service." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aucune donnée personnelle n’est transmise aux services IA, seulement les données techniques nécessaires." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              3. Confidentialité et conservation
            </Typography>
            <Typography>
              Les contenus utilisateurs sont privés par défaut. Les données ne sont pas revendues et les comptes inactifs plus d’un an sont supprimés automatiquement.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              4. Droits des utilisateurs
            </Typography>
            <Typography>
              Chaque utilisateur peut accéder, corriger ou supprimer ses données via son espace personnel ou sur simple demande à christof.thomas@gmail.com.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              5. Cookies et suivi
            </Typography>
            <Typography>
              Aucun cookie tiers ou outil d’analytics externe n’est utilisé à ce jour.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              6. Sécurité
            </Typography>
            <Typography>
              Les données sont hébergées sur Render.com (UE) avec des mesures techniques appropriées pour assurer leur protection.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              7. Contact
            </Typography>
            <Typography>
              Pour toute question liée à la confidentialité, contactez Christophe THOMAS : christof.thomas@gmail.com.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
