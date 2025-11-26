import React from 'react';
import { Box, Container, Typography, Stack, List, ListItem, ListItemText } from '@mui/material';

const TermsPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', py: 8 }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              Conditions Générales d’Utilisation (CGU)
            </Typography>
            <Typography color="text.secondary">
              Version mise à jour le {new Date().toLocaleDateString('fr-FR')}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              1. Informations sur l’éditeur
            </Typography>
            <Typography>
              Kartaro est édité par Christophe THOMAS, particulier domicilié au 46 rue d’Argenteuil,
              95210 Saint Gratien (France). Contact : christof.thomas@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              2. Objet
            </Typography>
            <Typography>
              Kartaro permet de générer, personnaliser et sauvegarder des jeux de cartes pédagogiques sur inscription.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              3. Accès au service
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Création de compte obligatoire (pseudo, email requis)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="L’utilisateur est responsable de la confidentialité de son mot de passe." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Les utilisateurs mineurs doivent avoir l’autorisation préalable de leur responsable légal." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              4. Conditions d’utilisation
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Les contenus générés via Kartaro sont privés, sauf partage explicite." />
              </ListItem>
              <ListItem>
                <ListItemText primary="L’usage doit rester pédagogique et collaboratif." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tout usage illégal ou contraire aux chartes IA partenaires est interdit." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              5. Gestion des crédits & paiements
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Paiement par carte (Stripe) ou Paypal. Les crédits ne sont pas remboursables." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Suppression de compte possible à tout moment ; comptes inactifs &gt; 1 an supprimés." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Les organisations peuvent acheter des crédits pour des tiers." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              6. Responsabilités
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="L’éditeur ne garantit pas l’absence d’interruption ni la pertinence des contenus générés." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Les contenus produits restent soumis aux règles d’utilisation des partenaires IA." />
              </ListItem>
              <ListItem>
                <ListItemText primary="L’éditeur peut fermer un compte en cas d’usage abusif, frauduleux ou illicite." />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              7. Propriété intellectuelle
            </Typography>
            <Typography paragraph>
              Les créations générées avec Kartaro sont sous licence CC BY. Cela autorise leur usage, modification et distribution,
              y compris à des fins commerciales (animations, formations, vente de supports) à condition de créditer la source.
            </Typography>
            <Typography>
              L’utilisateur conserve les droits sur ses créations. L’éditeur peut utiliser anonymement les contenus publics pour sa communication.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              8. Modification des CGU
            </Typography>
            <Typography>
              L’éditeur peut modifier les CGU à tout moment ; toute modification substantielle sera communiquée par email ou sur le site.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TermsPage;
