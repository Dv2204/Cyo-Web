import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import DetailsNavBar from "../components/Nav/GymDetailsNav";
import { useStyles } from "./PageStyles/GymDetailsStyles";
import Contact from "../components/contactUs/Contact";
import Sidebar from "../components/Sidebar/Sidebar";
import CircleDetails from "../components/circle/CircleDetails";
import ReviewCard from "../components/reviewCard/ReviewCard";
import DetailsCarousel from "../components/detailsCarousel/DetailsCarousel";
import head from "../assets/3.png";
import { GET_DETAIL } from "../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader";

const GymDetails = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.location.detailsProps);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const {
    data: detailData,
    loading: detailLoading,
    error: detailError,
  } = useQuery(GET_DETAIL, {
    variables: {
      id: props.match.params.id,
    },
  });
  if (detailLoading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="rgba(38, 38, 38, 0.7)" />
        </Grid>
      </Grid>
    );
  }

  if (detailError) {
    return <p style={{ color: "#fff" }}>{detailError.message}</p>;
  }
  console.log(detailData);
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <DetailsNavBar toggle={toggle} />
        <Grid container xs={12} lg={12} md={12} justify="center">
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <DetailsCarousel
              images={detailData.gymDetail.gymimageSet}
              rating={detailData.gymDetail.rating}
              address={detailData.gymDetail.address}
              seats={detailData.gymDetail.gym.counter}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} lg={12} md={12}>
          <Grid item xs={2} lg={1} md={1}>
            <img src={head} className={classes.headingicon} alt="Profile" />
          </Grid>
          <Grid item xs={7} lg={11} md={11}>
            <Typography variant="h3" className={classes.heading}>
              {detailData.gymDetail.gym.name.length > 0 ? (
                detailData.gymDetail.gym.name
              ) : (
                <p>Gym</p>
              )}
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={8} md={8}>
            <Typography
              variant="body1"
              className={classes.body}
              style={{ color: "rgba(92, 92, 92, 1)", marginTop: "0.5rem" }}
            >
              {detailData.gymDetail.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <Typography variant="h4" className={classes.facheading}>
              FACILITIES:
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={7}
          lg={12}
          md={12}
          justify="center"
          style={{ marginTop: "0.5rem" }}
          className={classes.circle}
        >
          <CircleDetails machines={detailData.gymDetail.machines} />
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={8} md={8}>
            <Typography variant="h4" className={classes.detailsheading}>
              REVIEWS:
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <ReviewCard rating={detailData.gymDetail.userfeedbackSet} />
        </Grid>
        <Grid container style={{ marginTop: "6rem" }}>
          <Contact />
        </Grid>
      </div>
    </>
  );
};

export default GymDetails;
