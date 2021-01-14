import React from "react";
import {
  SidebarContainer,
  Close,
  Icons,
  SideLink,
  SideMenu,
} from "../Sidebar/SidebarItems";
import { Chip } from "@material-ui/core";

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
          <SideLink to="/support">Support</SideLink>
          <SideLink>
            <Chip label="Register Your Gym" />
          </SideLink>
        </SideMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
