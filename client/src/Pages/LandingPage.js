import React, { useState } from "react";
import Cards from "../components/cards/Cards";
import { Grid, Container } from "@material-ui/core";
import Main from "../components/mainPage/Main";
import Carousel from "../components/carousel/Carousel";
import Products from "../components/products/Products";
import ViewMoreProducts from "../components/products/ViewMoreProducts";
import ViewMore from "../components/more/More";
import ConnectWithUs from "../components/connect/ConnectWithUs";
import NavBar from "../components/Nav/NavBarMain";
import Contact from "../components/contactUs/Contact";
import "../components/Nav/navbar.css";
import "./PageStyles/landingpage.css";
import Sidebar from "../components/Sidebar/Sidebar";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <img src={phone} alt="phone" className="phoneview" style={{display:'none'}} /> */}
      <div
        style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
        className="bla"
      >
        {/* <LandingPage /> */}
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Grid container>
          <Main />
        </Grid>
        <Grid container>
          <Carousel />
        </Grid>
        <Container fixed>
          <Grid container spacing={8} style={{ marginTop: "0.2rem" }}>
            <Cards />
          </Grid>
          <ViewMore />
        </Container>
        <Grid
          container
          style={{ marginTop: "8rem", backgroundColor: "#3F3F3F" }}
        >
          <Products />
          <ViewMoreProducts />
        </Grid>
        <Grid container>
          <ConnectWithUs />
        </Grid>
        <Grid container>
          <Contact />
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
