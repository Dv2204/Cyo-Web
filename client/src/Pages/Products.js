import React, { useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import ProductsNavBar from "../components/Nav/ProductsNav";
import { useStyles } from "./PageStyles/ProductsStyles";
import ContactUsNew from "../components/contactUs/ContactUsNew";
import ProductsPageCards from "../components/productsPageCards/ProductsPageCards";
import Sidebar from "../components/Sidebar/Sidebar";

const Products = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProductsNavBar toggle={toggle} />
      <Grid container xs={12} lg={12} md={12}>
        <Grid item xs={12} lg={12} md={12}>
          <Typography variant="h2" className={classes.text} justify="center">
            EXPLORE OUR PRODUCTS
          </Typography>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid container lg={12} md={12} style={{ marginBottom: "5rem" }}>
          <ProductsPageCards />
        </Grid>
      </Container>
      <Grid container>
        <ContactUsNew />
      </Grid>
    </div>
  );
};

export default Products;
