import React from 'react';
import {Nav, Bars, NavMenu, NavLink, NavDiv, Dot, NavLogo, MobileIcons} from './NavItems';
import Logo from '../../assets/logo-white.png';
import '../Nav/navbar.css';
import {Link} from 'react-scroll';

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav style={{ position: 'relative'}}>
                <MobileIcons onClick={toggle}>
                    <Bars />
                </MobileIcons>
                
                <NavDiv>
                <NavLogo className="logo-name-img">
                    <NavLink to="/">
                    <img className="Logo" src={Logo} alt="logo" />
                    </NavLink>
                    <h2 className="LogoName">Choose Your Option</h2>
                    </NavLogo>
                    <NavMenu>
                        {/* <NavLink activeStyle>
                            Gyms
                        </NavLink> */}
                        {/* <Link to="gym" smooth={true} duration={1000}><NavLink activeStyle>
                            Gyms
                        </NavLink></Link>
                        <Dot /> */}
                        <NavLink to="/products" activeStyle>
                            Products
                        </NavLink>
                        <Dot />
                        <NavLink to="/compare" activeStyle>
                            Compare
                        </NavLink>
                        <Dot />
                        <Link to="contact" smooth={true} duration={1000}><NavLink activeStyle>
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
