import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
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
          <Loader color="#FB5B21" />
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
        <Slider autoplay={2500} breakPoints={breakPoints}>
          {landingImage.landingImage.map((item, index) => (
            <div>
              <div
                key={index}
                style={{
                  background: `url('${IMAGE_URL}${item.image}') `,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  height: "93vh",
                }}
                className={classes.images}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselComp;
