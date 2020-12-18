import React from 'react';
import {Nav, Bars, NavMenu, NavLink, NavDiv, Dot, NavLogo, MobileIcons} from './NavItems';
import Logo from '../../assets/logo-white.png';
import '../Nav/navbar.css';
import {Link} from 'react-router-dom';

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav style={{ position: 'relative'}}>
                <MobileIcons onClick={toggle}>
                    <Bars />
                </MobileIcons>
                
                <NavDiv>
                <NavLogo className="logo-name-img">
                    <Link to="/">
                    <img className="Logo" src={Logo} alt="logo" />
                    </Link>
                    <h2 className="LogoName">Choose Your Option</h2>
                    </NavLogo>
                    <NavMenu>
                        {/* <NavLink activeStyle>
                            Gyms
                        </NavLink> */}
                        <NavLink  to="/gyms" activeStyle>
                            Gyms
                        </NavLink>
                        <Dot />
                        {/* <Link to="products" smooth={true} duration={2000}><NavLink activeStyle>
                            Products
                        </NavLink></Link>
                        <Dot /> */}
                        <NavLink to="/compare" activeStyle>
                            Compare
                        </NavLink>
                        <Dot />
                        <NavLink to="/guide" activeStyle>
                            Help Centre
                        </NavLink>
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
