import {
  AppBar,
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material';
import { AccountCircle, MenuOpen, Menu as MenuIcon } from '@mui/icons-material';
import { theme } from '../../theme';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokenToUser } from '../../helpers/tokenToUser';
import { getWithExpiry } from '../../helpers/ExpireToken';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion = () => {
    
  };

  const onHandleOpenSidebar = () => {
    
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          sx={{
            marginLeft: -1,
            marginRight: 2
          }}
          onClick={onHandleOpenSidebar}
        >
          
        </IconButton>

        <Grid
          sx={{
            background: '#FFFFFF',
            borderRadius: 6,
            px: 2,
            my: 1
          }}
        >
        </Grid>

        <Box sx={{ flexGrow: 1 }} />

        <Chip
          avatar={
            <Avatar>
              <AccountCircle />
            </Avatar>
          }
          
          color="secondary"
          sx={{
            background: blue[900],
            color: theme.palette.common.white,
            marginRight: theme.spacing(1),
            '&:hover': {
              background: blue[700]
            },
            '&:active': {
              background: blue[700]
            }
          }}
          onClick={handleClick}
        />
        <Menu
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={cerrarSesion}>Cerrar sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
