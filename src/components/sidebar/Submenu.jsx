import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/submenu.module.css';
import * as RiIcons from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';
export const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    dispatch(logout({ errorMessage: null }));
    localStorage.clear();
  };

  return (
    <>
      <Link
        className={styles.side_bar_link}
        to={item.prg_url_panel.startsWith('/') ? item.prg_url_panel : `/${item.prg_url_panel}`}
        onClick={
          item.dme_texto.includes('CERRAR') ? cerrarSesion : item.hijos ? showSubnav : showSidebar
        }
      >
        <div>
          {item.icon}
          <span className={styles.side_bar_label}>{item.dme_texto}</span>
        </div>
        <div>
          {item.hijos && subnav ? (
            <RiIcons.RiArrowUpSFill />
          ) : item.hijos ? (
            <RiIcons.RiArrowDownSFill />
          ) : null}
        </div>
      </Link>
      {subnav &&
        item.hijos.map((hijo, index) => {
          return (
            <Link
              className={styles.drop_down_link}
              to={
                hijo.prg_url_panel.startsWith('/') ? hijo.prg_url_panel : `/${hijo.prg_url_panel}`
              }
              key={index}
              onClick={showSidebar}
            >
              {hijo.icon}
              <span className={styles.side_bar_label}>{hijo.dme_texto}</span>
            </Link>
          );
        })}
    </>
  );
};
