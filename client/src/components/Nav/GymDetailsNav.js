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

const DetailsNavBar = ({ toggle }) => {
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
            <NavLink to="/">
              <h2 className="LogoName">CYO GYMS</h2>
            </NavLink>
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
            <Link to="contact" smooth={true} duration={2500}>
              <NavLink activeStyle>Help Centre</NavLink>
            </Link>
            <Dot />
            <NavLink to="/aboutgyms" activeStyle>
              About-Us
            </NavLink>
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

export default DetailsNavBar;
