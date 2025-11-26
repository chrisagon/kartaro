// @ts-nocheck - Ignorer les erreurs TypeScript liées à MUI v7 Grid API
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Container, Dialog, DialogContent, Divider, Grid, Stack, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const palette = {
  primary: '#ff8a3c',
  primaryHover: '#e77409',
  primaryLight: '#fff2e5',
  text: '#1f1f1f',
  textSecondary: '#5f6368',
  bg: '#ffffff',
  bgAlt: '#fff9f5',
  border: 'rgba(0,0,0,0.08)',
};

const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Solution', href: '#solution' },
  { label: 'Pour qui ?', href: '#personas' },
  { label: 'Blog', href: 'https://medium.com/@kartaro/', external: true },
];

const missionIssues = [
  {
    icon: '😴',
    title: "Manque d'engagement",
    description: 'Les participants restent passifs et n’osent pas contribuer.',
  },
  {
    icon: '⏱️',
    title: 'Préparation complexe',
    description: 'Concevoir un atelier efficace demande beaucoup de temps et d’énergie.',
  },
  {
    icon: '💡',
    title: 'Résultats limités',
    description: "Les idées restent superficielles et l'apprentissage s’estompe vite.",
  },
];

const solutionFeatures = [
  {
    icon: '⚡',
    title: 'Prise en main rapide',
    description: 'Guides d’animation clairs pour démarrer immédiatement.',
  },
  {
    icon: '🎯',
    title: 'Thématiques variées',
    description: 'Design thinking, créativité, cohésion… pour tous vos contextes.',
  },
  {
    icon: '🤝',
    title: 'Engagement garanti',
    description: 'Méthodologies éprouvées pour lever les freins et mobiliser tous les profils.',
  },
  {
    icon: '📊',
    title: 'Résultats tangibles',
    description: 'Productions concrètes et partageables dès la fin de chaque session.',
  },
  {
    icon: '🔄',
    title: 'Modulable et évolutif',
    description: 'Personnalisez vos jeux et enrichissez votre bibliothèque au fil du temps.',
  },
];

const personas = [
  {
    icon: '🎯',
    title: 'Facilitateurs',
    description: 'Vous animez des ateliers de design thinking ou de créativité.',
    benefits: [
      'Structurez vos sessions efficacement',
      'Engagez tous les profils',
      'Stimulez la spontanéité et l’innovation',
      'Gardez le contrôle tout en libérant la créativité',
    ],
  },
  {
    icon: '📚',
    title: 'Enseignants',
    description: 'Vous cherchez à rendre vos cours plus participatifs.',
    benefits: [
      'Captez l’attention de toute la classe',
      'Favorisez l’apprentissage actif',
      'Rendez les concepts abstraits concrets',
      'Créez des moments mémorables',
    ],
  },
  {
    icon: '🚀',
    title: 'Formateurs',
    description: 'Vous accompagnez des professionnels en entreprise ou en centre.',
    benefits: [
      'Boostez l’engagement des stagiaires',
      'Ancrez l’apprentissage dans l’action',
      'Intégrez la gamification facilement',
      'Obtenez des feedbacks instantanés',
    ],
  },
];

const sampleIllustrations = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/echantillon_cartes_2.png`,
    alt: 'Exemples de cartes collaboratives Kartaro',
  },
};

const LandingPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [openImage, setOpenImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (currentUser) {
      navigate('/app', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleCta = () => navigate('/login');

  return (
    <Box sx={{ backgroundColor: palette.bg, color: palette.text }}>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          borderBottom: `1px solid ${palette.border}`,
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" py={2} spacing={2}>
            <Grid item xs={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  component="img"
                  src={`${import.meta.env.BASE_URL}logo-kartaro-transparent.png`}
                  alt="Logo Kartaro"
                  sx={{ width: 44 }}
                />
                <Typography variant="h6" fontWeight={700} color={palette.text}>
                  Kartaro
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Stack direction="row" spacing={3} component="nav">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component="a"
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    sx={{ color: palette.text, textTransform: 'none', fontWeight: 500 }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                onClick={handleCta}
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: palette.primary,
                  '&:hover': { backgroundColor: palette.primaryHover },
                  borderRadius: 2,
                  textTransform: 'none',
                }}
              >
                Essayer Kartaro
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="hero"
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${palette.primaryLight} 0%, #ffffff 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Transformez vos <Box component="span" color={palette.primary}>ateliers</Box> en expériences mémorables
              </Typography>
              <Typography variant="h6" color={palette.textSecondary} paragraph>
                Des jeux de cartes interactifs pour stimuler la créativité, renforcer la collaboration et dynamiser vos animations.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleCta}
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: palette.primary,
                    '&:hover': { backgroundColor: palette.primaryHover },
                    borderRadius: 3,
                    textTransform: 'none',
                    px: 4,
                  }}
                >
                  Découvrir Kartaro
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href="#solution"
                  sx={{
                    borderColor: palette.primary,
                    color: palette.primary,
                    borderRadius: 3,
                    textTransform: 'none',
                    px: 4,
                    '&:hover': { backgroundColor: palette.primaryLight, borderColor: palette.primary },
                  }}
                >
                  Comment ça marche ?
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src={sampleIllustrations.hero.src}
                  alt={sampleIllustrations.hero.alt}
                  loading="lazy"
                  onClick={() => setOpenImage(sampleIllustrations.hero)}
                  sx={{
                    width: '100%',
                    maxWidth: 520,
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    cursor: 'zoom-in',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.02)' },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="mission" sx={{ backgroundColor: palette.bgAlt, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            Notre mission
          </Typography>
          <Typography variant="body1" align="center" color={palette.textSecondary} sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
            Permettre des animations plus créatives et interactives en offrant des outils qui stimulent la réflexion et la collaboration.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              gap: 3,
            }}
          >
            {missionIssues.map((issue) => (
              <Card
                key={issue.title}
                sx={{
                  borderRadius: 3,
                  flex: { xs: '1 1 auto', md: '1 1 calc(33% - 24px)' },
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: palette.primaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                      mb: 3,
                    }}
                  >
                    {issue.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {issue.title}
                  </Typography>
                  <Typography color={palette.textSecondary}>{issue.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="solution" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            La solution Kartaro
          </Typography>
          <Typography variant="body1" align="center" color={palette.textSecondary} sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
            Une gamme de jeux de cartes clés en main pour animer vos sessions avec impact.
          </Typography>
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                {solutionFeatures.map((feature) => (
                  <Stack direction="row" spacing={2} key={feature.title} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: palette.primary,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography color={palette.textSecondary}>{feature.description}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 4, height: '100%', backgroundColor: palette.primaryLight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 4 }}>
                <Typography color={palette.textSecondary}>
                  <strong>Kartaro =</strong>
                  <br />
                  Kart (carte) + Ado (action/processus)
                  <br />
                  Le processus de création par les cartes
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Stack spacing={2} sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Comment l'utiliser ?
            </Typography>
            <Typography variant="body1" color={palette.textSecondary}>
              Découvrez en vidéo comment générer, personnaliser et lancer vos decks en quelques minutes.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Box
                component="iframe"
                width="700px"
                height="400px"
                src="https://embed.app.guidde.com/playbooks/kCvAUVJ78teVkygWMy2dyV?mode=videoOnly"
                title="Utiliser Kartaro Pour Générer Vos Decks De Cartes Personnalisés"
                frameBorder="0"
                referrerPolicy="unsafe-url"
                allowFullScreen
                allow="clipboard-write"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
                sx={{ borderRadius: 2, maxWidth: '100%' }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="personas" sx={{ backgroundColor: palette.bgAlt, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            Kartaro s’adresse à vous
          </Typography>
          <Typography variant="body1" align="center" color={palette.textSecondary} sx={{ maxWidth: 720, mx: 'auto', mb: 6 }}>
            Que vous soyez facilitateur, enseignant ou formateur, Kartaro s’adapte à votre pratique.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              gap: 4,
            }}
          >
            {personas.map((persona) => (
              <Card
                key={persona.title}
                sx={{
                  borderRadius: 3,
                  flex: { xs: '1 1 auto', md: '1 1 calc(33% - 32px)' },
                  textAlign: 'center',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: '50%',
                      backgroundColor: palette.primary,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 36,
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {persona.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {persona.title}
                  </Typography>
                  <Typography color={palette.textSecondary} paragraph>
                    {persona.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0, textAlign: 'left' }}>
                    {persona.benefits.map((benefit) => (
                      <Typography key={benefit} component="li" color={palette.textSecondary} sx={{ position: 'relative', pl: 3 }}>
                        <Box component="span" sx={{ position: 'absolute', left: 0, color: palette.primary }}>
                          ✓
                        </Box>
                        {benefit}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{
        py: { xs: 8, md: 10 },
        textAlign: 'center',
        background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.primaryHover} 100%)`,
        color: '#fff',
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Prêt à révolutionner vos ateliers ?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Rejoignez les facilitateurs, enseignants et formateurs qui utilisent déjà Kartaro.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              onClick={handleCta}
              sx={{
                backgroundColor: '#fff',
                color: palette.primary,
                '&:hover': { backgroundColor: palette.primaryLight },
                borderRadius: 999,
                px: 4,
                textTransform: 'none',
              }}
            >
              Demander une démo
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="mailto:contact@kartaro.com"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                borderRadius: 999,
                px: 4,
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.12)' },
              }}
            >
              contact@kartaro.com
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="footer" sx={{ backgroundColor: palette.text, color: '#fff', py: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center">
            <Typography align="center" sx={{ opacity: 0.8 }}>
              {new Date().getFullYear()} Kartaro – Des ateliers créatifs qui stimulent la réflexion et la collaboration.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ textAlign: 'center' }}>
              <Button
                component="a"
                href="/cgu"
                sx={{ color: '#fff', textTransform: 'none', opacity: 0.9 }}
              >
                CGU
              </Button>
              <Button
                component="a"
                href="/mentions-legales"
                sx={{ color: '#fff', textTransform: 'none', opacity: 0.9 }}
              >
                Mentions légales
              </Button>
              <Button
                component="a"
                href="/politique-confidentialite"
                sx={{ color: '#fff', textTransform: 'none', opacity: 0.9 }}
              >
                Politique de confidentialité
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {openImage && (
        <Dialog maxWidth="xl" open onClose={() => setOpenImage(null)} fullWidth>
          <DialogContent sx={{ p: 0 }}>
            <Box component="img" src={openImage.src} alt={openImage.alt} sx={{ width: '100%', display: 'block' }} />
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default LandingPage;
