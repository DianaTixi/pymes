import { Box, Grid, Toolbar } from '@mui/material';
import { NavBar } from '../ui/NavBar';
import { Sidebar } from '../ui/Sidebar';
import { useSelector } from 'react-redux';

export const PymesLayout = ({ children }) => {

  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <NavBar />
      
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          p: 3,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar /> {/* Espacio superior en el container */}
        <Grid
          container
          sx={{
            mb: 1,
            p: 2
          }}
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
};
