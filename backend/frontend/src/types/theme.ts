// src/types/theme.ts
export interface AppTheme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      default: string;
      paper: string;
      card: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
    };
  };
  typography: {
    fontFamily: string;
    h1: {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    h2: {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    h3: {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    body1: {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    body2: {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  spacing: (factor: number) => string;
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  shadows: string[];
  shape: {
    borderRadius: number;
  };
}

// Types pour les composants personnalisés
export interface CardTheme {
  elevation: number;
  borderRadius: string;
  padding: string;
  hover: {
    transform: string;
    boxShadow: string;
  };
}

export interface NavigationTheme {
  height: string;
  backgroundColor: string;
  logoSize: string;
  itemSpacing: string;
}
