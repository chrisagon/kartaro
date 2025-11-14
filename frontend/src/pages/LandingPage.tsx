import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ArrowForward, Bolt, Brush, RocketLaunch } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const categories = [
  {
    label: 'Objets / Matériel',
    description: 'Liste les ressources concrètes pour l’analyse.',
  },
  {
    label: 'Exemples de Lieux',
    description: 'Oriente les participants dans le contexte.',
  },
  {
    label: 'Personnes et Métiers',
    description: 'Identifie acteurs et rôles clés.',
  },
  {
    label: 'Processus de Travail',
    description: 'Montre comment les tâches s’enchaînent.',
  },
  {
    label: 'Concepts Liés',
    description: 'Stimule la réflexion profonde.',
  },
];

const personalizationHighlights = [
  {
    title: 'Volume Flexible',
    description: 'De 8 à 100 cartes pour un simple index ou un cadrage complexe.',
  },
  {
    title: 'Styles Graphiques',
    description: 'Anime, Comic Book, Digital Art, Fantasy… Rendez l’abstrait concret.',
  },
  {
    title: 'Édition Fine',
    description: 'Modifiez chaque carte (texte, image, docs) pour un fit parfait.',
  },
];

const intelligenceBoosters = [
  'Tangibles & Fun : déclenchent des conversations ludiques.',
  'Structurées & Flexibles : cartographie, tri et priorisation facilités.',
  'Inclusives : un langage partagé pour résoudre les problèmes ensemble.',
];

const landingChips = ['Consultants', 'Facilitateurs', 'Product teams', 'Formateurs'];

const LandingPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/app', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleCta = () => navigate('/login');

  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary' }}>
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at top, rgba(33,150,243,0.25), transparent 60%)'
              : 'linear-gradient(135deg, #f3f6ff 0%, #ffffff 55%)',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip label="Qwadrage IA" color="primary" sx={{ mb: 3, fontWeight: 600 }} />
              <Typography variant="h3" component="h1" gutterBottom>
                Fatigué de perdre des heures à créer des jeux de cartes collaboratifs ?
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Qwadrage IA mixe l’IA générative et la méthode Qwadrage pour créer des decks
                uniques en minutes. Plus de brainstorm interminable : juste de la créativité boostée !
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ my: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={handleCta}
                >
                  Se connecter gratuitement
                </Button>
                <Button variant="outlined" size="large" onClick={() => navigate('/register')}>
                  Créer un compte
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                « Un formateur a créé un deck sur la gestion de projet en 15 min, libérant son équipe
                pour des débats productifs ! »
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: 'wrap' }}>
                {landingChips.map((chip) => (
                  <Chip key={chip} label={chip} variant="outlined" />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                      Votre allié ludique et intelligent
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Bolt color="warning" />
                      <Typography variant="body1">
                        30 % des idées essentielles révélées en un clin d’œil.
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Brush color="info" />
                      <Typography variant="body1">
                        Univers visuels sur mesure, prêts à être manipulés.
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <RocketLaunch color="success" />
                      <Typography variant="body1">
                        Passez de l’idée à l’action en quelques minutes.
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Créez votre univers en un clin d’œil
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              L’IA devient votre partenaire créatif : entrez votre thème et votre public, elle génère
              un contexte structuré basé sur les piliers du Qwadrage. Vous gardez le contrôle :
              vérifiez, enrichissez ou simplifiez.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Table size="small" sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Catégorie Qwadrage</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Rôle</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.label}>
                    <TableCell>{category.label}</TableCell>
                    <TableCell>{category.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" color="primary" gutterBottom>
              Personnalisation
            </Typography>
            <Typography variant="h4" gutterBottom>
              Forgez des cartes uniques et impactantes
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Vos cartes deviennent des artefacts magiques : tangibles, portables et persistants,
              elles libèrent les esprits pour une analyse fluide.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {personalizationHighlights.map((highlight) => (
                <Grid item xs={12} sm={4} key={highlight.title}>
                  <Card sx={{ borderRadius: 3, height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <Box
            component="iframe"
            width="100%"
            height="500px"
            src="https://embed.app.guidde.com/playbooks/kCvAUVJ78teVkygWMy2dyV?mode=videoOnly"
            title="Utiliser DeckLab Pour Générer Vos Decks De Cartes Personnalisés"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            allowFullScreen
            allow="clipboard-write"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
            sx={{
              borderRadius: 2,
              maxWidth: 700,
              boxShadow: 6,
            }}
          />
        </Box>

        <Divider sx={{ my: 8 }} />

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary" gutterBottom>
              Intelligence collective
            </Typography>
            <Typography variant="h4" gutterBottom>
              Boostez vos ateliers collaboratifs
            </Typography>
            <Stack spacing={2}>
              {intelligenceBoosters.map((text) => (
                <Card key={text} sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Typography>{text}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Transparence et confiance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nos méthodes sont testées par des pros, avec transparence totale sur le processus.
                  Les cartes servent de starters de conversations idéales pour Ouverture, Exploration
                  et Finalisation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" color="primary" gutterBottom>
              Action
            </Typography>
            <Typography variant="h4" gutterBottom>
              Prêt à passer à l’action ?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Exporte ton Qwadrage final au format PDF pour des ateliers physiques ou sauvegarde
              tes collections en ligne pour les réutiliser facilement.
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              <Typography>• Export PDF prêt à imprimer.</Typography>
              <Typography>• Collections en ligne toujours accessibles.</Typography>
              <Typography>
                • Bonus exclusif : template + guide PDF sur l’animation Qwadrage (valeur 49 €).
              </Typography>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" onClick={handleCta}>
                Créer mon premier deck
              </Button>
              <Button variant="text" size="large" onClick={() => navigate('/register')}>
                Je découvre l’app
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 4, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Offre limitée
                </Typography>
                <Typography variant="body1" paragraph>
                  Pour les 50 premiers inscrits : un template gratuit + guide PDF sur l’animation
                  Qwadrage.
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Crée ton premier deck gratuit en 2 clics. Commence maintenant – offre limitée !
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
