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
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.8rem",
      padding: "0.7rem 0.95rem",
    },
  },
  links:{
    padding: '0.3rem 0',
    "&:hover":{
      borderBottom:'2px solid #fff',
    }
  }
}));


const NavBar = ({ toggle }) => {
  const classes = useStyles();
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
              <h2 className="LogoName" style={{ fontFamily: "Bauman" }} >
                CYO GYMS
              </h2>
            </NavLink>
          </NavLogo>
          <NavMenu>
            <Link to="gym" smooth={true} duration={1000}>
              <NavLink activeStyle className={classes.links} >Gyms</NavLink>
            </Link>
            <Dot />
            <Link to="products" smooth={true} duration={2000}>
              <NavLink activeStyle className={classes.links} >Products</NavLink>
            </Link>
            <Dot />
            <NavLink to="/compare" activeStyle className={classes.links} >
              Compare
            </NavLink>
            <Dot />
            <NavLink to="/support" activeStyle className={classes.links} >
              Support
            </NavLink>
            <Chip label="Register Your Gym" className={classes.chipStyle} />
          </NavMenu>
        </NavDiv>
      </Nav>
    </>
  );
};

export default NavBar;
