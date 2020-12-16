import React from 'react';
// import { NavLink as Link} from 'react-router-dom';
import {Nav, Bars, NavMenu, NavLink, NavDiv, Dot, NavLogo, MobileIcons} from './NavItems';
import Logo from '../../assets/logo-white.png';
import '../Nav/navbar.css';
import {Link} from 'react-scroll'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav style={{ position: 'relative'}}>
                <MobileIcons onClick={toggle}>
                    <Bars />
                </MobileIcons>
                
                <NavDiv>
                    <NavLogo to="/" className="logo-name-img">
                        <img className="Logo" src={Logo} alt="logo" />
                        <h2 className="LogoName">Choose Your Option</h2>
                    </NavLogo>
                    <NavMenu>
                        {/* <NavLink activeStyle>
                            Gyms
                        </NavLink> */}
                        <Link to="gym" smooth={true} duration={1000}><NavLink activeStyle>
                            Gyms
                        </NavLink></Link>
                        <Dot />
                        <Link to="products" smooth={true} duration={2000}><NavLink activeStyle>
                            Products
                        </NavLink></Link>
                        <Dot />
                        <NavLink to="/pages/compare" activeStyle>
                            Compare
                        </NavLink>
                        <Dot />
                        <NavLink to="/pages/guide" activeStyle>
                            Help Centre
                        </NavLink>
                        <Dot />
                        <NavLink to="/pages/about" activeStyle>
                            About-Developers
                        </NavLink>
                    </NavMenu>
                </NavDiv>             
            </Nav>            
        </>
    )
}

export default NavBar;
