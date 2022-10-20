import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@mui/material';
import { AutoAwesomeMosaic, Home } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { SubmenuItem } from './SubmenuItem';
import { Link } from 'react-router-dom';

export const Sidebar = ({ drawerWidth = 271 }) => {
  const { openSidebar } = useSelector((state) => state.ui);
  const { menu } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const onHandleCloseSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={openSidebar}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        
      </Box>
    </Drawer>
  );
};
