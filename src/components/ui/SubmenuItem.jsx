import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const SubmenuItem = ({ hijo }) => {
  const dispatch = useDispatch();
  const onHandleCloseSidebar = () => {
    
  };

  return (
    <ListItemButton
      component={Link}
      to={hijo.prg_url_panel.startsWith('/') ? hijo.prg_url_panel : `/${hijo.prg_url_panel}`}
      onClick={() => {
        onHandleCloseSidebar();
      }}
    >
      <ListItemText primary={hijo.dme_texto} />
    </ListItemButton>
  );
};
