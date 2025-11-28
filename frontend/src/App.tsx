// src/App.tsx - Version finale avec tous les composants modernisés
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Fab,
  Zoom,
  useScrollTrigger,
  Chip,
} from '@mui/material';
import { KeyboardArrowUp as ScrollUpIcon } from '@mui/icons-material';

// Thème et contexte
import { appTheme, darkTheme } from './theme/appTheme';
import { AppProvider, useApp } from './context/AppContext';
import { useAuth } from './context/AuthContext';

// Composants modernisés
import ModernHeader from './components/ModernHeader';
import QwadrageChatbot from './components/QwadrageChatbot';

// Pages
import ModernMainPage from './pages/ModernMainPage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { Navigate, Outlet } from 'react-router-dom';

// Composant Scroll to Top
const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <ScrollUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

// Route de protection
const ProtectedRoute: React.FC = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

// Route pour les invités (non connectés)
const GuestRoute: React.FC = () => {
  const { currentUser } = useAuth();
  return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

// Layout principal avec le nouveau thème
const AppLayout: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <ModernHeader />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {currentUser && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Chip
              label={'Crédits : —'}
              color="primary"
              variant="outlined"
              size="small"
            />
          </Box>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<ModernMainPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:id" element={<CollectionDetailPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <ScrollToTop />
      <QwadrageChatbot />
    </Box>
  );
};

// Composant principal de l'application
const App: React.FC = () => {
  const { state } = useApp();

  return (
    <ThemeProvider theme={state.settings.darkMode ? darkTheme : appTheme}>
      <CssBaseline />
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
};

// Application complète avec providers
const AppWithProviders: React.FC = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default AppWithProviders;
