import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useStyles } from "./CarouselStyles";
import { LANDING_IMAGE } from "../../graphql/requests";
import { IMAGE_URL } from "../../graphql/requests";
import { useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import Loader from "../Loader";
import "./carousel.css";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const CarouselComp = () => {
  const classes = useStyles();
  const { data: landingImage, loading, error } = useQuery(LANDING_IMAGE);
  if (loading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="rgba(244, 0, 117, 0.42)" />
        </Grid>
      </Grid>
    );
  }

  if (error) {
    return <p style={{ color: "#000" }}>{error.message}</p>;
  }

  console.log(landingImage);
  return (
    <>
      <div className={classes.carousel}>
        <Carousel breakPoints={breakPoints}>
          {landingImage.landingImage.map((item, index) => (
            <Item>
              <img
                className={classes.images}
                src={`${IMAGE_URL}${item.image}`}
                alt="Gym"
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
