import React from "react";
import {
  SidebarContainer,
  Close,
  Icons,
  SideLink,
  SideMenu,
} from "../Sidebar/SidebarItems";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icons onClick={toggle}>
          <Close />
        </Icons>
        <SideMenu>
          <SideLink to="/gyms">Gyms</SideLink>
          <SideLink to="/products">Products</SideLink>
          <SideLink to="/compare">Compare</SideLink>
          <SideLink to="/contact">Help Centre</SideLink>
          <SideLink to="/aboutgyms">About-Us</SideLink>
          <SideLink to="/about">About-Developers</SideLink>
        </SideMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
