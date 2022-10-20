import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e8244c'
    },
    secondary: {
      main: '#0d47a1'
    },
    azul: {
      main: '#0d47a1'
    },
    rojo: {
      main: '#e82626'
    },
    error: {
      main: red.A400
    }
  }
});
