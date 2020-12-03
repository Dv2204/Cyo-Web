import React from 'react';
import {SidebarContainer, Close, Icons, SideLink, SideMenu} from '../Sidebar/SidebarItems';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icons onClick={toggle}>
                    <Close />
                </Icons>
                <SideMenu>
                    <SideLink to="/pages/gyms">Gyms</SideLink>
                    <SideLink to="/pages/products">Products</SideLink>
                    <SideLink to="/pages/compare">Compare</SideLink>
                    <SideLink to="/pages/guide">Help Centre</SideLink>
                    <SideLink to="/pages/about">About-Developers</SideLink>
                </SideMenu>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
