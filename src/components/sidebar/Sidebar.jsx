import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import styles from "../../styles/sidebar.module.css";
import styled from "styled-components";
import { SubMenu } from "./Submenu";
import { useState } from "react";
import { useSelector } from "react-redux";

const SidebarNav = styled.nav`
  background: #003d95;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { menu } = useSelector((state) => state.common);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={styles.nav}>
          <Link to="#" className={styles.nav_icon}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <img src={logo} alt="lidera" className={styles.imagen} /> */}
        </div>
        <SidebarNav sidebar={sidebar}>
          <div className={styles.sidebar_wrap}>
            <Link to="#" className={styles.nav_icon}>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {menu.map((item, index) => {
              return (
                <SubMenu key={index} item={item} showSidebar={showSidebar} />
              );
            })}
          </div>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
