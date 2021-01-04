import React, { useState } from "react";
import { useStyles } from "./PageStyles/MainCompareStyles";
import CompareNavBar from "../components/Nav/CompareNav";
import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import Accordion from "../components/dropdownCompare/Accordion";
import "./PageStyles/compare.css";
import CarouselComp from "../components/carousel/CarouselComp";
import { GET_DETAIL } from "../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader";

const MainCompare = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, SetSelectedIndex] = useState(0);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const {
    data: detailDataOne,
    loading: detailLoadingOne,
    error: detailErrorOne,
  } = useQuery(GET_DETAIL, {
    variables: {
      id: props.match.params.idone,
    },
  });
  const {
    data: detailDataTwo,
    loading: detailLoadingTwo,
    error: detailErrorTwo,
  } = useQuery(GET_DETAIL, {
    variables: {
      id: props.match.params.idtwo,
    },
  });
  if (detailLoadingOne || detailLoadingTwo) {
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

  if (detailErrorOne) {
    return <p style={{ color: "#fff" }}>{detailErrorOne.message}</p>;
  }
  if (detailErrorTwo) {
    return <p style={{ color: "#fff" }}>{detailErrorTwo.message}</p>;
  }
  console.log(detailDataOne);
  console.log(detailDataTwo);
  return (
    <>
      <div style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <CompareNavBar toggle={toggle} />

        <Grid
          container
          lg={12}
          md={12}
          justify="space-around"
          className={classes.top}
        >
          <Grid item xs={12} lg={12} md={12}>
            <Typography
              variant="h2"
              className={classes.text}
              style={{ textAlign: "center" }}
              justify="center"
            >
              COMPARE THE GYMS
            </Typography>
          </Grid>
          <Grid item lg={4} md={4}>
            <Typography variant="h4" justify="center">
              {detailDataOne.gymDetail.gym.name.length > 0 ? (
                detailDataOne.gymDetail.gym.name
              ) : (
                <p>Gym 1</p>
              )}
            </Typography>
          </Grid>
          <Grid item lg={4} md={4}>
            <Typography variant="h4" justify="center">
              {detailDataTwo.gymDetail.gym.name.length > 0 ? (
                detailDataTwo.gymDetail.gym.name
              ) : (
                <p>Gym 2</p>
              )}
            </Typography>
          </Grid>

          <Grid container lg={12} md={12} justify="space-around">
            <Grid item lg={5} md={5}>
              <CarouselComp />
            </Grid>
            <Grid item lg={5} md={5}>
              <CarouselComp />
            </Grid>
          </Grid>

          <Grid item xs={10} style={{ margin: "5vh 1vw" }}>
            <Accordion className="accordion" selectedIndex={SetSelectedIndex}>
              <div data-header="Description" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      {detailDataOne.gymDetail.description}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      {detailDataTwo.gymDetail.description}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Price Info" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit .Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit .Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Trainers" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit .Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Machines" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      {detailDataOne.gymDetail.machines.length > 0 ? (
                        detailDataOne.gymDetail.machines.name
                      ) : (
                        <p>No Machines</p>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      {detailDataTwo.gymDetail.machines.length > 0 ? (
                        detailDataTwo.gymDetail.machines.name
                      ) : (
                        <p>No Machines</p>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Time Slots" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit .Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                      urna.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainCompare;
