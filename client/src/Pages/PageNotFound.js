import React, { Fragment } from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../components/pageNotFound/PageNotFound.json";
import { useStyles } from "./PageStyles/PageNotFoundStyles";
import dumbbell from "../components/pageNotFound/dumbbell.json";

const PageNotFound = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dumbbell,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Grid container lg={12} sm={12} justify="center">
        <Grid item className={classes.error} lg={7} md={7}>
          <Lottie options={defaultOptions} />
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={12} md={12}>
          <Typography variant="h2" className={classes.notfound}>
            PAGE NOT FOUND
          </Typography>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={2} md={2}>
          <Link to="/">
            <Chip label="Go to Home" className={classes.btn} />
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PageNotFound;
