import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PolitiqueConfidentialite: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Politique de confidentialité
        </Typography>
        
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          1. Données collectées
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>À l&apos;inscription : pseudonyme, email, nombre de crédits, dates de création et dernière connexion.</li>
            <li>Sur le serveur (Render.com – UE, Francfort) : IP conservée 1 mois.</li>
            <li>Processeurs de paiement (Stripe, Paypal) : Données de paiement, non accessibles à l&apos;éditeur.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          2. Utilisation des données
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>Pour la gestion du compte utilisateur et des crédits.</li>
            <li>Pour assurer le bon fonctionnement, la sécurité et le support du service.</li>
            <li>Aucune donnée personnelle n&apos;est transmise aux services IA (Gemini, Stability.ai), seulement les données techniques nécessaires à la génération.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          3. Confidentialité et durée de conservation
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>Les contenus utilisateurs sont privés par défaut.</li>
            <li>L&apos;éditeur ne vend ni ne partage de données personnelles à des tiers non partenaires.</li>
            <li>Les adresses email et comptes inactifs &gt;1 an sont supprimés automatiquement.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          4. Droit d'accès, de modification et de suppression
        </Typography>
        <Typography variant="body1" paragraph>
          Chaque utilisateur peut accéder, corriger ou supprimer son compte et ses données à tout moment via son espace personnel ou sur simple demande à christof.thomas@gmail.com.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          5. Cookies et suivi
        </Typography>
        <Typography variant="body1" paragraph>
          Aucun cookie tiers, tracker ou outil d&apos;analytics externe n&apos;est utilisé à ce jour.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          6. Sécurité
        </Typography>
        <Typography variant="body1" paragraph>
          Les données sont hébergées sur Render.com (UE), avec des mesures techniques appropriées pour protéger leur sécurité.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          7. Contact
        </Typography>
        <Typography variant="body1" paragraph>
          Pour toute question relative à la confidentialité, contacter Christophe THOMAS à christof.thomas@gmail.com.
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

export default PolitiqueConfidentialite;
