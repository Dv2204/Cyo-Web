import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import AboutGymsNav from "../components/Nav/AboutGymsNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStyles } from "./PageStyles/PrivacyPolicyStyles";
import Contact from "../components/contactUs/Contact";

const AboutGyms = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <AboutGymsNav toggle={toggle} />
        <Grid container lg={12} md={12} xs={12} sm={12}>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Typography variant="h2" className={classes.text} justify="center">
              About Us
            </Typography>
            <Typography variant="h3" className={classes.name} justify="center">
              Choose Your Option Pvt. Ltd.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={8} sm={10} xs={10} md={8} justify="center">
            <Typography
              variant="h6"
              className={classes.textbody}
              style={{ color: "#494848" }}
            >
              CYO GYMS introduced in 2020-2021 when Mr. Harish Saini and Vikas
              Malik realized that users didn’t want to or couldn’t pay yearly
              gym membership fees upfront. There was intent since everyone tried
              several fitness centers and local parks, but it wasn’t practical
              for long. It was then that a simple idea was worked upon – working
              out should work out. What started with a handful of gyms in Rewari
              is now offering fitness enthusiasts across India the flexibility
              to workout whenever, wherever, and however they please. We have
              successfully digitized the Fitness Industry and created an
              interconnected community of fitness centers / gyms and fitness
              enthusiasts. Our new age functions have transformed the fitness
              ecosystem. CYO GYMS is an alias for comprehensive fitness
              solutions. We are successfully removing friction and creating
              marketplace efficiencies through technology and bringing in the
              age of Fittech in India.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={8} sm={10} xs={10} md={8} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Our Motto
            </Typography>
            <Typography
              variant="h6"
              className={classes.textbody}
              style={{ color: "#494848" }}
            >
              Inspire people to include fitness in their daily routine by
              creating a seamless network of gyms and fitness studios. Fitness
              is a basic of life that shouldn’t be expensive or inaccessible.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={8} sm={10} xs={10} md={8} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              Our Vision
            </Typography>
            <Typography
              variant="h6"
              className={classes.textbody}
              style={{ color: "#494848" }}
            >
              Economical, convenient, and non-restrictive fitness solutions to
              create a nexus of happy and healthy people.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} xs={12} sm={12} justify="center">
          <Grid item lg={8} sm={10} xs={10} md={8} justify="center">
            <Typography variant="h4" className={classes.textheading}>
              For our Users
            </Typography>
            <Typography
              variant="h6"
              className={classes.textbody}
              style={{ color: "#494848" }}
            >
              CYO GYMS dynamic approach will help user to stay fit & motivated.
              we have been breaking barriers – prices, fixed schedules, and
              boring routines , now you can workout when you want. CYO GYMS is
              where you start achieving your fitness goals!
              <br />
              <br />
              <Typography
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "4rem",
                }}
                className={classes.textbody}
                variant="h5"
              >
                “ All progress takes place outside the comfort zone ”
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Contact />
        </Grid>
      </div>
    </>
  );
};

export default AboutGyms;
