'use client';

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#546e7a',
          light: '#819ca9',
          dark: '#29434e',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#979797',
          light: '#c8c8c8',
          dark: '#696969',
        },
        action: {
          selectedOpacity: 0.33,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#546e7a',
          light: '#819ca9',
          dark: '#29434e',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#979797',
          light: '#c8c8c8',
          dark: '#696969',
        },
        action: {
          selectedOpacity: 0.33,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.4rem',
    },
    h3: {
      fontSize: '1.2rem',
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.0rem',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    body1: {
      fontStyle: 'normal',
      fontWeight: 400,
    },
    body2: {
      fontStyle: 'normal',
    },
  },
});

export default theme;
