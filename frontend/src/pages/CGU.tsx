import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CGU: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Conditions Générales d&apos;Utilisation (CGU)
        </Typography>
        
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          1. Informations sur l'éditeur
        </Typography>
        <Typography variant="body1" paragraph>
          Kartaro est édité par Christophe THOMAS, particulier domicilié au 46 rue d&apos;Argenteuil, 95210 Saint Gratien (France).<br />
          Contact : christof.thomas@gmail.com
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          2. Objet
        </Typography>
        <Typography variant="body1" paragraph>
          Kartaro permet de générer, personnaliser et sauvegarder des jeux de cartes pédagogiques sur inscription.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          3. Accès au service
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>Création de compte obligatoire (pseudo, email requis).</li>
            <li>L&apos;utilisateur est responsable de la confidentialité de son mot de passe.</li>
            <li>Les utilisateurs mineurs doivent avoir l&apos;autorisation préalable de leur responsable légal.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          4. Conditions d'utilisation
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>Les contenus générés via Kartaro sont privés, sauf partage explicite par l&apos;utilisateur.</li>
            <li>L&apos;usage de l&apos;application doit rester conforme à sa finalité pédagogique et collaboratrice.</li>
            <li>Toute utilisation détournée, notamment pour des fins contraires à la loi, à la morale ou à la charte des fournisseurs IA (contenus violents, haineux, illégaux...), est interdite.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          5. Gestion des crédits & paiements
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>L&apos;achat de crédits se fait par carte bancaire (via Stripe) ou Paypal.</li>
            <li>Les crédits ne sont pas remboursables.</li>
            <li>Suppression de compte : possible à tout moment par l&apos;utilisateur ; comptes inactifs &gt;1 an peuvent être supprimés sans préavis.</li>
            <li>Les représentants d&apos;organisations ou écoles peuvent acheter des crédits au bénéfice de tiers.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          6. Responsabilités
        </Typography>
        <Typography variant="body1" component="div" paragraph>
          <ul>
            <li>L&apos;éditeur ne garantit pas que le service soit exempt d&apos;interruptions ou d&apos;erreurs, ni la pertinence des contenus générés, leur exploitation relevant de la responsabilité exclusive de l&apos;utilisateur.</li>
            <li>Les contenus produits avec les IA partenaires sont soumis à leurs règles d&apos;utilisation.</li>
            <li>L&apos;éditeur se réserve le droit de fermer un compte en cas d&apos;usage abusif, frauduleux ou illicite.</li>
          </ul>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          7. Propriété intellectuelle
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Les créations générées avec Kartaro sont sous licence CC BY. Ceci autorise leur usage, modification et distribution, y compris à des fins commerciales, dans le cadre de prestations d&apos;animation, formations ou vente de supports, à condition que la source soit créditée.</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          L&apos;utilisateur conserve donc les droits sur ses créations et dispose d&apos;un droit d&apos;usage commercial de ses créations.
        </Typography>
        <Typography variant="body1" paragraph>
          L&apos;éditeur garde la possibilité d&apos;utiliser (de manière anonymisée) les contenus publiés en mode public à des fins de communication, sauf refus explicite.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          8. Modification des CGU
        </Typography>
        <Typography variant="body1" paragraph>
          L&apos;éditeur peut modifier les CGU à tout moment ; l&apos;utilisateur sera informé de toute modification substantielle par email ou sur le site.
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

export default CGU;
