// @ts-nocheck - Ignorer les erreurs TypeScript liées à MUI v7 Grid API
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
  Dialog,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
import { 
  ArrowForward, 
  Bolt, 
  Brush, 
  RocketLaunch,
  Speed,
  GpsFixed,
  Handshake,
  Assessment,
  Loop,
  School,
  Groups,
  EmojiEvents,
  Close as CloseIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const problemCards = [
  {
    icon: '😴',
    title: "Manque d'engagement",
    description: "Les participants peinent à s'investir, restent passifs et n'osent pas prendre la parole.",
  },
  {
    icon: '⏱️',
    title: 'Préparation complexe',
    description: "Concevoir et animer un atelier efficace demande beaucoup de temps et d'énergie.",
  },
  {
    icon: '💡',
    title: 'Résultats limités',
    description: "Les idées restent superficielles et l'apprentissage n'est pas durablement ancré.",
  },
];

const solutionFeatures = [
  {
    icon: <Speed color="primary" />,
    title: 'Prise en main rapide',
    description: "Guides d'animation complets pour démarrer immédiatement, sans formation préalable.",
  },
  {
    icon: <GpsFixed color="primary" />,
    title: 'Thématiques variées',
    description: "Design thinking, créativité, cohésion d'équipe, pédagogie active... adaptés à tous contextes.",
  },
  {
    icon: <Handshake color="primary" />,
    title: 'Engagement garanti',
    description: 'Méthodologies éprouvées pour lever les freins et faire participer tous les profils.',
  },
  {
    icon: <Assessment color="primary" />,
    title: 'Résultats tangibles',
    description: 'Productions concrètes et partageables dès la fin de chaque session.',
  },
  {
    icon: <Loop color="primary" />,
    title: 'Modulable et évolutif',
    description: 'Personnalisez vos jeux selon vos besoins et enrichissez votre bibliothèque au fil du temps.',
  },
];

const personas = [
  {
    avatar: '🎯',
    title: 'Facilitateurs',
    description: "Vous animez des ateliers de design thinking, de créativité ou de cohésion d'équipe.",
    benefits: [
      'Structurez vos sessions efficacement',
      'Engagez tous les profils de participants',
      "Stimulez la spontanéité et l'innovation",
      'Gardez le contrôle tout en libérant la créativité',
    ],
  },
  {
    avatar: '📚',
    title: 'Enseignants',
    description: 'Vous enseignez et cherchez à rendre vos cours plus vivants et participatifs.',
    benefits: [
      "Captez l'attention de toute la classe",
      "Favorisez l'apprentissage actif",
      'Rendez les concepts abstraits concrets',
      'Créez des moments mémorables',
    ],
  },
  {
    avatar: '🚀',
    title: 'Formateurs',
    description: 'Vous formez des adultes en entreprise ou en centre de formation.',
    benefits: [
      "Boostez l'engagement de vos stagiaires",
      "Ancrez l'apprentissage dans l'action",
      'Intégrez la gamification facilement',
      'Obtenez des feedbacks instantanés',
    ],
  },
];

const LandingPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      navigate('/app', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleCta = () => navigate('/login');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', color: 'text.primary' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at top, rgba(33,150,243,0.25), transparent 60%)'
              : 'linear-gradient(135deg, #e8f4f5 0%, #ffffff 55%)',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}logo-kartaro-transparent.png`}
              alt="Kartaro Logo"
              sx={{ 
                height: { xs: 60, md: 80 }, 
                verticalAlign: 'middle',
                display: 'block',
                mx: 'auto'
              }}
            />
          </Box>
          
          {/* Navigation Bar */}
          <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: 'transparent', mb: 6 }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                <Button 
                  variant="text" 
                  onClick={() => scrollToSection('mission')}
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                  Notre mission
                </Button>
                <Button 
                  variant="text" 
                  onClick={() => scrollToSection('problem')}
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                  Votre problème
                </Button>
                <Button 
                  variant="text" 
                  onClick={() => scrollToSection('solution')}
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                  La solution
                </Button>
                <Button 
                  variant="text" 
                  onClick={() => scrollToSection('personas')}
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                  Pour qui ?
                </Button>
                <Button 
                  variant="contained" 
                  href="https://medium.com/@kartaro" 
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: 'none', fontSize: '1rem' }}
                >
                  Blog 📝
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" component="h1" gutterBottom>
                Transformez vos <Box component="span" color="primary">ateliers</Box> en expériences mémorables
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Des jeux de cartes interactifs pour stimuler la créativité, renforcer la collaboration et dynamiser vos animations.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ my: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={handleCta}
                >
                  Découvrir Kartaro
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  onClick={() => scrollToSection('solution')}
                >
                  Comment ça marche ?
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box id="mission" sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Notre mission
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            Permettre des animations plus créatives et interactives en offrant des outils uniques qui stimulent la réflexion et la collaboration.
          </Typography>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box id="problem" sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Votre problème
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            Les ateliers traditionnels souffrent de 3 problèmes majeurs qui limitent leur efficacité.
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {problemCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                <Card sx={{ borderRadius: 3, height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>{card.icon}</Typography>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Solution Section */}
      <Box id="solution" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            La solution Kartaro
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            Une gamme de jeux de cartes clés en main pour animer vos sessions avec impact.
          </Typography>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                {solutionFeatures.map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ mt: 0.5 }}>{feature.icon}</Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 4, backgroundColor: 'primary.light', p: 4, textAlign: 'center', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    <strong>Kartaro =</strong>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Kart (carte) + Ado (action/processus)
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Le processus de création<br />par les cartes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Card Samples Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Découvrez quelques exemples de cartes générées
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={`${import.meta.env.BASE_URL}cards-sample-2.png`}
                  alt="Exemples de cartes - Thème archéologie"
                  onClick={() => handleImageClick(`${import.meta.env.BASE_URL}cards-sample-2.png`)}
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 4,
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: 6,
                    }
                  }}
                />
                <Typography variant="body1" color="text.secondary">
                  Exemple de cartes sur le thème de l'archéologie
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={`${import.meta.env.BASE_URL}cards-sample-1.png`}
                  alt="Exemples de cartes - Thème entrepreneuriat"
                  onClick={() => handleImageClick(`${import.meta.env.BASE_URL}cards-sample-1.png`)}
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 4,
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: 6,
                    }
                  }}
                />
                <Typography variant="body1" color="text.secondary">
                  Exemple de cartes sur le thème de l'entrepreneuriat
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Personas Section */}
      <Box id="personas" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Kartaro s'adresse à vous
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            Que vous soyez facilitateur, enseignant ou formateur, Kartaro s'adapte à votre pratique.
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {personas.map((persona, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                <Card sx={{ borderRadius: 3, height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography variant="h2" sx={{ mb: 2 }}>{persona.avatar}</Typography>
                    <Typography variant="h6" gutterBottom>
                      {persona.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {persona.description}
                    </Typography>
                    <Box sx={{ textAlign: 'left', mt: 3, pt: 3, borderTop: 1, borderColor: 'divider' }}>
                      {persona.benefits.map((benefit, benefitIndex) => (
                        <Typography key={benefitIndex} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                          <Box component="span" color="primary" sx={{ mr: 1 }}>✓</Box>
                          {benefit}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box 
        id="contact"
        sx={{ 
          py: { xs: 8, md: 10 }, 
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(33,150,243,0.8) 0%, rgba(25,118,210,0.9) 100%)'
              : 'linear-gradient(135deg, #2d8a8d 0%, #217377 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Prêt à révolutionner vos ateliers ?
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.95, mb: 4 }}>
            Rejoignez les facilitateurs, enseignants et formateurs qui utilisent déjà Kartaro
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={handleCta}
              sx={{ 
                backgroundColor: 'white', 
                color: 'primary.main',
                '&:hover': { 
                  backgroundColor: 'grey.100',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Essayer Kartaro gratuitement
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:christof.thomas@gmail.com"
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': { 
                  borderColor: 'grey.200',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Demander une démo
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: 'background.paper', py: 6, mt: 0 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary">
                Kartaro
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Des ateliers créatifs qui stimulent la réflexion et favorisent la collaboration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                © 2025 Kartaro - Tous droits réservés
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <Link href="#/cgu" color="primary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    Conditions Générales d'Utilisation
                  </Link>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <Link href="#/mentions-legales" color="primary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    Mentions Légales
                  </Link>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <Link href="#/politique-confidentialite" color="primary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    Politique de Confidentialité
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Contact : christof.thomas@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Image Enlargement Modal */}
      <Dialog
        open={!!enlargedImage}
        onClose={handleCloseEnlarged}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden'
          }
        }}
      >
        <Box sx={{ position: 'relative', p: 2 }}>
          <IconButton
            onClick={handleCloseEnlarged}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {enlargedImage && (
            <Box
              component="img"
              src={enlargedImage}
              alt="Image agrandie"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default LandingPage;
