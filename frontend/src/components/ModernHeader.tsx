// src/components/ModernHeader.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

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
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useApp();
  const { currentUser } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setSettingsAnchorEl(null);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleThemeToggle = () => {
    dispatch({
      type: 'SET_SETTINGS',
      payload: { darkMode: !state.settings.darkMode },
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

        <Box sx={{ mr: 3, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/decklab-logo.png`}
            alt="DECKLAB Logo"
            sx={{ height: 40, verticalAlign: 'middle' }}
          />
        </Box>

        {onSearch && (
          <TextField
            size="small"
            placeholder="Rechercher des cartes..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{
              mx: 2,
              minWidth: 250,
              '& .MuiOutlinedInput-root': { borderRadius: 3 },
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

                <Box sx={{ flexGrow: 1 }} />

        {currentUser && (
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Bonjour, {currentUser.displayName || currentUser.email}
          </Typography>
        )}

        {currentUser && (
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
        )}

        <Box sx={{ display: 'flex', gap: 1 }}>
          {currentUser && (
            <>
              <Button
                variant={location.pathname === '/collections' ? 'contained' : 'outlined'}
                startIcon={<CollectionsIcon />}
                onClick={() => navigate('/collections')}
                sx={{ borderRadius: 3 }}
              >
                Collections
              </Button>
              <Button
                variant={location.pathname === '/' ? 'contained' : 'outlined'}
                startIcon={<AddIcon />}
                onClick={() => navigate('/')}
                sx={{
                  borderRadius: 3,
                }}
              >
                Générer
              </Button>
            </>
          )}

          <IconButton
            color="inherit"
            onClick={(e) => setSettingsAnchorEl(e.currentTarget)}
          >
            <SettingsIcon />
          </IconButton>
        </Box>

        <Menu
          anchorEl={settingsAnchorEl}
          open={Boolean(settingsAnchorEl)}
          onClose={() => setSettingsAnchorEl(null)}
          PaperProps={{
            elevation: 2,
            sx: { minWidth: 220, mt: 1 },
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
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_SETTINGS',
                      payload: { animations: e.target.checked },
                    })
                  }
                  size="small"
                />
              }
              label="Animations"
            />
          </MenuItem>

          {currentUser && (
            <MenuItem onClick={handleLogout}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LogoutIcon fontSize="small" />
                Déconnexion
              </Box>
            </MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default ModernHeader;
