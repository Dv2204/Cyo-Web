import React, { Fragment } from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../components/pageNotFound/PageNotFound.json";
import { useStyles } from "./PageStyles/PageNotFoundStyles";

const PageNotFound = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Grid container lg={12} sm={12} justify="center">
        <Grid item className={classes.error} lg={8} md={8}>
          <Lottie options={defaultOptions} />
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={12} md={12}>
          <Typography variant="h3" className={classes.notfound}>
            PAGE NOT FOUND
          </Typography>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={4} md={4}>
          <Link to="/">
            <Chip label="Go to Home" className={classes.btn} />
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PageNotFound;
