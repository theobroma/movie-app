import React from 'react';
import { CssBaseline, PaletteType } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { themeSelector } from '../@store/ui/selectors';
import { THEME_COLORS } from '../@types';

/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 */
const FRONT_COLORS = {
  info: {
    main: '#0277bd', // Light Blue 800
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#2e7d32', // Green 800
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#f9a825', // Yellow 800
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#c62828', // Red 800
    contrastText: '#FFFFFF',
  },
};

/**
 * Material UI theme config for "Light Mode"
 */
const LIGHT_THEME = {
  palette: {
    type: 'light' as PaletteType,
    background: {
      paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF',
    },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

/**
 * Material UI theme config for "Dark Mode"
 */
const DARK_THEME = {
  palette: {
    type: 'dark' as PaletteType,
    background: {
      paper: '#424242', // Gray 800 - Background of "Paper" based component
      default: '#303030',
    },
    primary: {
      main: '#81c784', // Green 300
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffb74d', // Orange 300
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const AppThemeProvider: React.FC = ({ children }) => {
  const currentTheme = useSelector(themeSelector);
  const theme =
    currentTheme === THEME_COLORS.DARK
      ? createMuiTheme(DARK_THEME)
      : createMuiTheme(LIGHT_THEME);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
