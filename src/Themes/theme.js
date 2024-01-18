import { createTheme } from '@mui/material/styles';
import { Roboto } from '@fontsource/roboto';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '32px',
      fontWeight: 600,
      marginBottom: '20px',
    },
    h2: {
      fontSize: '29px',
      fontWeight: 500,
      marginBottom: '20px',
    },
    h3: {
      fontSize: '26px',
      fontWeight: 400,
      marginBottom: '20px',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 400,
      marginBottom: '20px',
    },
    h5: {
      fontSize: '21px',
      fontWeight: 400,
      marginBottom: '20px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 400,
      marginBottom: '20px',
    },
  },
  background: {
    default: '#f2f2f2',
  },
  components: {
    MuiGrid: {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease-in-out',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '100px 0 0 240px',
          '@media (max-width: 768px)': {
            margin: '0',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '20px',
        },
        h2: {
          fontSize: '29px',
          fontWeight: 500,
          marginBottom: '20px',
        },
        h3: {
          fontSize: '26px',
          fontWeight: 400,
          marginBottom: '20px',
        },
        h4: {
          fontSize: '24px',
          fontWeight: 400,
          marginBottom: '20px',
        },
        h5: {
          fontSize: '20px',
          fontWeight: 400,
          marginBottom: '20px',
        },
        h6: {
          fontSize: '18px',
          fontWeight: 400,
          marginBottom: '20px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#262a34',
    },
    secondary: {
      main: '#00000',
    },
    icon: {
      main: 'white',
    },
  },
});

export default theme;
