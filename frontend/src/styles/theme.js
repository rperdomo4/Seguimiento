import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Verde principal
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#FFC107', // Amarillo
      light: '#FFD54F',
      dark: '#FFA000',
    },
    background: {
      default: '#F5F5F5', // Gris claro para el fondo
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
    },
    error: {
      main: '#F44336', // Rojo para errores
    },
    warning: {
      main: '#FF9800', // Naranja para advertencias
    },
    info: {
      main: '#2196F3', // Azul para información
    },
    success: {
      main: '#4CAF50', // Verde para éxito
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F5F5F5',
          color: '#333333',
        },
      },
    },
  },
});

export default theme;