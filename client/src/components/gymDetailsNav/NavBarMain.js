import React from 'react';
// import { NavLink as Link} from 'react-router-dom';
import {Nav, Bars, NavMenu, NavLink, NavDiv, Dot, NavLogo, MobileIcons} from './NavItems';
import Logo from '../../assets/logo-white.png';
import '../Nav/navbar.css';
import {Link} from 'react-scroll';
// import { Link } from "react-router-dom";

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav style={{ position: 'relative'}}>
                <MobileIcons onClick={toggle}>
                    <Bars />
                </MobileIcons>
                
                <NavDiv>
                    <NavLogo to="/" className="logo-name-img">
                    <NavLink to="/" >
                    <img className="Logo" src={Logo} alt="logo" />
                        </NavLink>
                        <h2 className="LogoName">Choose Your Option</h2>
                    </NavLogo>
                    <NavMenu>
                        <NavLink to="/gyms" activeStyle>
                            Gyms
                        </NavLink>
                        <Dot />
                        <NavLink to="/products" activeStyle>
                            Products
                        </NavLink>
                        <Dot />
                        <NavLink to="/compare" activeStyle>
                            Compare
                        </NavLink>
                        <Dot />
                        <Link to="connect" smooth={true} duration={2500}><NavLink activeStyle>
                            Help Centre
                        </NavLink></Link>
                        <Dot />
                        <NavLink  to="/about" activeStyle>
                            About-Developers
                        </NavLink>
                    </NavMenu>
                </NavDiv>             
            </Nav>            
        </>
    )
}

export default NavBar;
