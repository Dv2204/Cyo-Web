import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./CarouselStyles";
import CarouselComp from "./CarouselComp";

const Carousel = () => {
  const classes = useStyles();
  return (
    <Grid item lg={12} md={12}>
      <Grid container lg={12} md={12}>
        <Grid item lg={12} md={12} >
          <Typography variant="h2" className={classes.text} justify="center">
            TRENDING GYMS
          </Typography>
        </Grid>
      </Grid>
      <Grid container md={12} lg={12} justify="center">
        <Grid item lg={10} md={10} xs={12} sm={12} justify="center">
          <CarouselComp />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Carousel;
