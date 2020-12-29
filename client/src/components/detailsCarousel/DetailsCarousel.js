import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./DetailsCarouselStyles";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CarouselComp from "./CarouselComp";
import StarIcon from "@material-ui/icons/Star";

const DetailsCarousel = () => {
  const classes = useStyles();
  return (
    <Paper eevation={4} className={classes.paper}>
      <Grid container className={classes.row}>
        <Grid item lg={1} md={1} style={{ marginTop: "1rem" }}>
          <LocationOnOutlinedIcon
            className={classes.location}
            fontSize="normal"
          />
        </Grid>
        <Grid item lg={8} md={8} style={{ marginTop: "1rem" }}>
          <Typography variant="caption" className={classes.locationtext}>
            Blah blah blah
          </Typography>
        </Grid>
        <Grid item lg={1} md={1} style={{ marginTop: "1rem" }}>
          <Typography className={classes.rating}>
            4.3
            <StarIcon className={classes.ratingIcon} />
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} style={{ marginTop: "1rem" }}>
          <Typography className={classes.count}>2.3k people</Typography>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={11} md={11}>
          <hr className={classes.line} />
        </Grid>
      </Grid>
      <Grid container md={12} lg={12} justify="center">
        <Grid item lg={12} md={12} xs={12} sm={12} justify="center">
          <CarouselComp />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DetailsCarousel;
