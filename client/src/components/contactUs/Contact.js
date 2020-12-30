import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { useStyles } from "./ContactStyles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MobileStoreButton from "react-mobile-store-button";
import { Link } from "react-router-dom";

const Contact = () => {
  const classes = useStyles();
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  const androidUrl = "https://play.google.com";
  return (
    <>
      <Grid item md={12} style={{ backgroundColor: "#3F3F3F" }}>
        <Grid container lg={12} md={12} className={classes.row}>
          <Grid container lg={12} md={12} justify="center" id="contact">
            <Typography variant="h3" className={classes.heading}>
              CONTACT US
            </Typography>
            <Grid container justify="center">
              <Grid item lg={5} md={5} justify="center">
                <Typography className={classes.about} variant="h6">
                  Choose Your Option Pvt Ltd 2020-2021 / All Rights Reserved /
                  Web Desgin and Develop by Cybersify Technologies Pvt Ltd{" "}
                  {"  "}
                  <a
                    className={classes.footerlink}
                    href="https://cybersifytech.com"
                  >
                    www.cybersifytech.com
                  </a>
                </Typography>
                <Link to="/privacypolicy">
                  <Typography className={classes.privacy} variant="h5">
                    Detailed Privacy Policy
                  </Typography>
                </Link>
                <Grid container>
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
              <Grid lg={1} />

              <Grid item lg={5} md={5} justify="center">
                <Paper
                  elevation={5}
                  variant="outlined"
                  className={classes.mailbox}
                >
                  <Typography
                    variant="h6"
                    className={classes.mailus}
                    style={{ textAlign: "center", marginBottom: "2vh" }}
                  >
                    Mail Us at <b>support@cyogyms.com</b>
                  </Typography>
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item>
                        <TextField id="input-with-icon-grid" label="Name" />
                      </Grid>
                    </Grid>
                    <TextField
                      id="outlined-basic"
                      label="Your Message"
                      variant="outlined"
                      style={{ margin: "4vh 0", width: "30rem" }}
                      className={classes.body}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ backgroundColor: "#282828", height: "8vh" }}
      >
        <Typography variant="h6" className={classes.link}>
          Choose Your Option &copy; 2020
        </Typography>
      </Grid>
    </>
  );
};

export default Contact;
