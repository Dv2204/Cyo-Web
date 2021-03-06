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
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipStyle: {
    padding: "1rem 1.3rem",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1rem",
    marginLeft: "1.5rem",
    letterSpacing: "0.1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  links: {
    padding: "0.3rem 0",
    "&:hover": {
      borderBottom: "2px solid #fff",
      transform: "translateY(-8%)",
    },
  },
}));

const AboutNavBar = ({ toggle }) => {
  const classes = useStyles();
  return (
    <>
      <Nav style={{ position: "relative" }}>
        <MobileIcons onClick={toggle}>
          <Bars />
        </MobileIcons>

        <NavDiv>
          <NavLogo className="logo-name-img">
            <NavLink to="/">
              <img className="Logo" src={Logo} alt="logo" />
            </NavLink>
            <NavLink to="/">
              <h2 className="LogoName" style={{fontFamily: "Bauman",}}>CYO GYMS</h2>
            </NavLink>
          </NavLogo>
          <NavMenu>
            <NavLink to="/gyms" activeStyle className={classes.links}>
              Gyms
            </NavLink>
            <Dot />
            <NavLink to="/products" activeStyle className={classes.links}>
              Products
            </NavLink>
            <Dot />
            <NavLink to="/compare" activeStyle className={classes.links}>
              Compare
            </NavLink>
            <Dot />
            <NavLink to="/support" activeStyle className={classes.links}>
              Support
            </NavLink>
            <Chip label="Register Your Gym" className={classes.chipStyle} />
          </NavMenu>
        </NavDiv>
      </Nav>
    </>
  );
};

export default AboutNavBar;
