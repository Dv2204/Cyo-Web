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
import ContactUsNew from "../components/contactUs/ContactUsNew";
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
      <div
        style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
        className="bla"
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Grid container>
          <Main />
        </Grid>
        <Grid container>
          <Carousel />
        </Grid>
        <Container fixed>
          <Grid
            container
            spacing={8}
            style={{ marginTop: "0.2rem", width: "100%" }}
          >
            <Cards />
          </Grid>
          <ViewMore />
        </Container>
        <div style={{backgroundColor: "#3F3F3F"}}>
        <Container fixed>
      <Grid
          container
          style={{ marginTop: "8rem" }}
        >
          <Products />
          <ViewMoreProducts />
        </Grid>
      </Container>
        </div>
        <Grid container>
          <ConnectWithUs />
        </Grid>
        <Grid container>
          <ContactUsNew />
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
