import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import NavBar from "../components/Nav/NavBarMain";
import Contact from "../components/contactUs/Contact";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";

const PrivacyPolicy = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Grid container lg={12} md={12} xs={12} sm={12}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="h2" className={classes.text} justify="center">
              PRIVACY POLICY
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PrivacyPolicy;
