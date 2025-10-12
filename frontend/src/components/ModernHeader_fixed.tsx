// src/components/ModernHeader.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Badge,
  Switch,
  FormControlLabel,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Collections as CollectionsIcon,
  Add as AddIcon,
  Settings as SettingsIcon,
  Brightness6 as ThemeIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { useApp } from '../context/AppContext';

interface ModernHeaderProps {
  onToggleSidebar?: () => void;
  onSearch?: (query: string) => void;
  cardCount?: number;
  collectionCount?: number;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  onToggleSidebar,
  onSearch,
  cardCount = 0,
  collectionCount = 0,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { state, dispatch, api } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleGeneratePdf = async () => {
    if (state.cards.length > 0) {
      try {
        const pdfBlob = await api.generatePdfForCards(state.cards);
        const url = window.URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `cartes-${Date.now()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
      }
    }
  };

  const handleThemeToggle = () => {
    dispatch({
      type: 'SET_SETTINGS',
      payload: { darkMode: !state.settings.darkMode }
    });
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        {/* Menu mobile */}
        {isMobile && onToggleSidebar && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={onToggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo/Titre */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: isMobile ? 1 : 0,
            mr: 3,
            fontWeight: 700,
            background: theme.palette.primary.main,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Card Generator
        </Typography>

        {/* Recherche */}
        {onSearch && (
          <TextField
            size="small"
            placeholder="Rechercher des cartes..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{
              mx: 2,
              minWidth: 250,
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* Compteurs */}
        <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
          <Badge badgeContent={cardCount} color="primary" max={99}>
            <Typography variant="body2" color="text.secondary">
              Cartes
            </Typography>
          </Badge>

          <Badge badgeContent={collectionCount} color="secondary" max={99}>
            <Typography variant="body2" color="text.secondary">
              Collections
            </Typography>
          </Badge>
        </Box>

        {/* Actions principales */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* Générer PDF */}
          {state.cards.length > 0 && (
            <IconButton
              color="primary"
              onClick={handleGeneratePdf}
              disabled={state.isGeneratingPdf}
              title="Télécharger PDF 2"
            >
              <DownloadIcon />
            </IconButton>
          )}

          {/* Collections */}
          <Button
            variant="outlined"
            startIcon={<CollectionsIcon />}
            onClick={() => dispatch({ type: 'SET_CURRENT_VIEW', payload: 'collections' })}
            sx={{ borderRadius: 3 }}
          >
            Collections
          </Button>

          {/* Nouvelle génération */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => dispatch({ type: 'SET_CURRENT_VIEW', payload: 'cards' })}
            sx={{
              borderRadius: 3,
              background: theme.palette.primary.main,
            }}
          >
            Générer
          </Button>

          {/* Menu paramètres */}
          <IconButton
            color="inherit"
            onClick={(e) => setSettingsAnchorEl(e.currentTarget)}
          >
            <SettingsIcon />
          </IconButton>
        </Box>

        {/* Menu paramètres */}
        <Menu
          anchorEl={settingsAnchorEl}
          open={Boolean(settingsAnchorEl)}
          onClose={() => setSettingsAnchorEl(null)}
          PaperProps={{
            elevation: 2,
            sx: { minWidth: 200, mt: 1 },
          }}
        >
          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={state.settings.darkMode}
                  onChange={handleThemeToggle}
                  size="small"
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ThemeIcon fontSize="small" />
                  Mode sombre
                </Box>
              }
            />
          </MenuItem>

          <MenuItem>
            <FormControlLabel
              control={
                <Switch
                  checked={state.settings.animations}
                  onChange={(e) => dispatch({
                    type: 'SET_SETTINGS',
                    payload: { animations: e.target.checked }
                  })}
                  size="small"
                />
              }
              label="Animations"
            />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default ModernHeader;

