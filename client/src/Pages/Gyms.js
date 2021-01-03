import React, { useState } from "react";
import GymPageCardCity from "../components/GymPageCard/GymPageCardCity";
import { Grid, Container, Typography } from "@material-ui/core";
import GymNavBar from "../components/Nav/GymNav";
import { useStyles } from "./PageStyles/GymsStyles";
import Contact from "../components/contactUs/Contact";
import Sidebar from "../components/Sidebar/Sidebar";

const Gyms = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <GymNavBar toggle={toggle} />
      <Grid container xs={12} lg={12} md={12}>
        <Grid item xs={12} lg={12} md={12}>
          <Typography variant="h2" className={classes.text} justify="center">
            GYMS
          </Typography>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid
          container
          spacing={8}
          style={{ marginTop: "1rem", paddingBottom: "6rem" }}
        >
          <GymPageCardCity />
        </Grid>
      </Container>
      <Grid container>
        <Contact />
      </Grid>
    </div>
  );
};

export default Gyms;
