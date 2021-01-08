import React from "react";
import { Grid, Paper, Typography, Button, Divider } from "@material-ui/core";
import { useStyles } from "./ContactUsNewStyles";
import MobileStoreButton from "react-mobile-store-button";

const ContactUsNew = () => {
  const classes = useStyles();
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl = "https://play.google.com";
  return (
    <Grid
      container
      lg={12}
      md={12}
      style={{ backgroundColor: "#3F3F3F", marginTop: "1.7rem" }}
    >
      <Grid item lg={12} md={12}>
        <Grid
          container
          justify="center"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <Grid item lg={2} md={2}>
            <Typography variant="h4" className={classes.headingone}>
              CYO GYM
            </Typography>
          </Grid>
          <Grid item lg={8} md={8}>
            <Typography variant="h5" className={classes.headingtwo}>
              The World's Fastest Growing Hotel Chain {"  "}&nbsp;&nbsp; Join
              our network and grow your business!
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Button className={classes.headingbutton}>
              <Typography className={classes.headindbuttontext}>
                List your Gym
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <hr />
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} style={{ marginBottom: "2.5rem" }}>
          <Grid item lg={5} md={5}>
            <Grid container lg={12} md={12}>
              <Grid item lg={12} md={12}>
                <Typography variant="h6" className={classes.download}>
                  Download CYO app for exciting offers.
                </Typography>
              </Grid>
            </Grid>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={4}>
                <MobileStoreButton
                  store="ios"
                  url={iOSUrl}
                  linkProps={{ title: "iOS Store Button" }}
                  className={classes.mac}
                />
              </Grid>
              <Grid item lg={4}>
                <MobileStoreButton
                  store="android"
                  url={androidUrl}
                  linkProps={{ title: "Android Store Button" }}
                  className={classes.google}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.divider}
            flexItem
          />
          <Grid item lg={4} md={4}>
            <Grid container>
              <Grid item lg={6} md={6}>
                <Typography variant="h6" className={classes.pagestop}>
                  About Us
                </Typography>
                <Typography variant="h6" className={classes.pages}>
                  Support
                </Typography>
              </Grid>
              <Grid item lg={6} md={6}>
                <Typography variant="h6" className={classes.pagestwotop}>
                  About Developers
                </Typography>
                <Typography variant="h6" className={classes.pagestwo}>
                  Support
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            className={classes.divider}
            flexItem
          />
          <Grid item lg={2} md={2}>
            <Typography variant="h6" className={classes.pagesthreetop}>
              Privacy policy
            </Typography>
            <Typography variant="h6" className={classes.pagesthree}>
              Support
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ContactUsNew;
