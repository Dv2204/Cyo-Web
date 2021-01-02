import React from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavDiv,
  Dot,
  NavLogo,
  MobileIcons,
} from "./NavItems";
import Logo from "../../assets/logo-white.png";
import "../Nav/navbar.css";
import { Link } from "react-scroll";

const AboutGymsNav = ({ toggle }) => {
  return (
    <>
      <Nav style={{ position: "relative" }}>
        <MobileIcons onClick={toggle}>
          <Bars />
        </MobileIcons>

        <NavDiv>
          <NavLogo to="/" className="logo-name-img">
            <NavLink to="/">
              <img className="Logo" src={Logo} alt="logo" />
            </NavLink>
            <h2 className="LogoName">CYO GYMS</h2>
          </NavLogo>
          <NavMenu>
            <Link to="gym" smooth={true} duration={1000}>
              <NavLink activeStyle>Gyms</NavLink>
            </Link>
            <Dot />
            <Link to="products" smooth={true} duration={2000}>
              <NavLink activeStyle>Products</NavLink>
            </Link>
            <Dot />
            <NavLink to="/compare" activeStyle>
              Compare
            </NavLink>
            <Dot />
            <Link to="contact" smooth={true} duration={1500}>
              <NavLink activeStyle>Help Centre</NavLink>
            </Link>
            <Dot />
            <NavLink to="/about" activeStyle>
              About-Developers
            </NavLink>
          </NavMenu>
        </NavDiv>
      </Nav>
    </>
  );
};

export default AboutGymsNav;
