// src/AppModern.tsx - Version simplifiée
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
} from '@mui/material';
import { KeyboardArrowUp as ScrollUpIcon } from '@mui/icons-material';

// Thème et contexte
import { appTheme, darkTheme } from './theme/appTheme';
import { AppProvider, useApp } from './context/AppContext';

// Composants modernisés
import ModernHeader from './components/ModernHeader';

// Pages modernisées
import ModernMainPage from './pages/ModernMainPage';

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

// Layout principal avec le nouveau thème
const AppLayout: React.FC = () => {
  const { state } = useApp();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <ModernHeader />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<ModernMainPage />} />
          <Route path="/collections" element={<div>Collections Page (à moderniser)</div>} />
          <Route path="/collections/:id" element={<div>Collection Detail Page (à moderniser)</div>} />
        </Routes>
      </Container>
      <ScrollToTop />
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
