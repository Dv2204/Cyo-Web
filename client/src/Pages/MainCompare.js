import React, { useState } from "react";
import { useStyles } from "./PageStyles/MainCompareStyles";
import CompareNavBar from "../components/Nav/CompareNav";
import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import Accordion from "../components/dropdownCompare/Accordion";
import "./PageStyles/compare.css";
import MainCompareCarousel from "../components/carousel/MainCompareCarousel";
import { GET_DETAIL } from "../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader";

const MainCompare = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
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
            <Typography
              variant="h4"
              justify="center"
              className={classes.gymname}
            >
              {detailDataOne.gymDetail.gym.name.length > 0 ? (
                detailDataOne.gymDetail.gym.name
              ) : (
                <p>Gym 1</p>
              )}
            </Typography>
          </Grid>
          <Grid item lg={4} md={4}>
            <Typography
              variant="h4"
              justify="center"
              className={classes.gymname}
            >
              {detailDataTwo.gymDetail.gym.name.length > 0 ? (
                detailDataTwo.gymDetail.gym.name
              ) : (
                <p>Gym 2</p>
              )}
            </Typography>
          </Grid>

          <Grid container lg={12} md={12} justify="space-around">
            <Grid item lg={5} md={5}>
              <MainCompareCarousel
                images={detailDataOne.gymDetail.gymimageSet}
              />
            </Grid>
            <Grid item lg={5} md={5}>
              <MainCompareCarousel
                images={detailDataTwo.gymDetail.gymimageSet}
              />
            </Grid>
          </Grid>

          <Grid item xs={10} style={{ margin: "5vh 1vw" }}>
            <Accordion className="accordion" selectedIndex={SetSelectedIndex}>
              <div data-header="Description" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      {detailDataOne.gymDetail.description?.length > 0 ? (
                        detailDataOne.gymDetail.description
                      ) : (
                        <Typography variant="body1" justify="center">
                          No Description Found
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography
                      variant="body1"
                      justify="center"
                      className={classes.texthead}
                    >
                      {detailDataTwo.gymDetail.description?.length > 0 ? (
                        detailDataTwo.gymDetail.description
                      ) : (
                        <Typography variant="body1" justify="center">
                          No Description Found
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Price Info" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Weekly Price : {detailDataOne.gymDetail.weeklyPrice}
                      <br />
                      Monthly Price : {detailDataOne.gymDetail.monthlyPrice}
                      <br />
                      Quarterly Price : {detailDataOne.gymDetail.quaterlyPrice}
                      <br />
                    </Typography>
                    <br />
                    {detailDataOne.gymDetail.discountSet?.length > 0 ? (
                      detailDataOne.gymDetail.discountSet.map((item, image) => (
                        <>
                          <Typography variant="body1" justify="center">
                            Discount Type : {item.discType}
                            <br />
                            Discount Per : {item.discPer}
                            <br />
                            conspetype : {item.conspetype}
                            <br />
                            No of bookings : {item.noOfBookings}
                            <br />
                            Left Bookings : {item.leftbookings}
                            <br />
                          </Typography>
                          <br />
                        </>
                      ))
                    ) : (
                      <Typography variant="body1" justify="center">
                        No Discount Price Found
                      </Typography>
                    )}
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography
                      variant="body1"
                      justify="center"
                      className={classes.texthead}
                    >
                      Weekly Price : {detailDataTwo.gymDetail.weeklyPrice}
                      <br />
                      Monthly Price : {detailDataTwo.gymDetail.monthlyPrice}
                      <br />
                      Quarterly Price : {detailDataTwo.gymDetail.quaterlyPrice}
                      <br />
                    </Typography>
                    <br />
                    {detailDataTwo.gymDetail.discountSet?.length > 0 ? (
                      detailDataTwo.gymDetail.discountSet.map((item, image) => (
                        <>
                          <Typography variant="body1" justify="center">
                            Discount Type : {item.discType}
                            <br />
                            Discount Per : {item.discPer}
                            <br />
                            conspetype : {item.conspetype}
                            <br />
                            No of bookings : {item.noOfBookings}
                            <br />
                            Left Bookings : {item.leftbookings}
                            <br />
                          </Typography>
                          <br />
                        </>
                      ))
                    ) : (
                      <Typography variant="body1" justify="center">
                        No Discount Price Found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </div>
              <div data-header="Trainers" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    {detailDataOne.gymDetail.trainers?.length > 0 ? (
                      detailDataOne.gymDetail.trainers.map((item, index) => (
                        <>
                          <Typography variant="body1">
                            Name: {item.name}
                            <br />
                            Experience: {item.experience}
                            <br />
                            Certified: {item.certified}
                          </Typography>
                          <br />
                        </>
                      ))
                    ) : (
                      <Typography justify="center" variant="body1">
                        No Trainers Found
                      </Typography>
                    )}
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography
                      variant="body1"
                      justify="center"
                      className={classes.texthead}
                    >
                      {detailDataTwo.gymDetail.trainers?.length > 0 ? (
                        detailDataTwo.gymDetail.trainers.map((item, index) => (
                          <>
                            <Typography variant="body1">
                              Name: {item.name}
                              <br />
                              Experience: {item.experience}
                              <br />
                              Certified: {item.certified}
                            </Typography>
                            <br />
                          </>
                        ))
                      ) : (
                        <Typography variant="body1">
                          No Trainers Found
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Machines" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Name: <br />
                      {detailDataOne.gymDetail.machines?.length > 0 ? (
                        detailDataOne.gymDetail.machines.map((item, index) => (
                          <>
                            <Typography variant="body1">
                              {index + 1}. {item.machine.name}
                            </Typography>
                          </>
                        ))
                      ) : (
                        <Typography variant="body1">
                          No Machines Found
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5}>
                    <Typography variant="body1" justify="center">
                      Name:
                      <br />
                      {detailDataTwo.gymDetail.machines?.length > 0 ? (
                        detailDataTwo.gymDetail.machines.map((item, index) => (
                          <>
                            <Typography variant="body1">
                              {index + 1}. {item.machine.name}
                            </Typography>
                          </>
                        ))
                      ) : (
                        <Typography variant="body1">
                          No Machines Found
                        </Typography>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div data-header="Time Slots" className="accordion-item">
                <Grid container lg={12} md={12} justify="space-around">
                  <Grid item lg={5} md={5}>
                    {detailDataOne.gymDetail.timeslotSet?.length > 0 ? (
                      detailDataOne.gymDetail.timeslotSet.map((item, index) => (
                        <>
                          <Typography variant="body1" justify="center">
                            Slot for:
                            {item.slotFor}
                            <br />
                            Start Time:
                            {item.startTime}
                            <br />
                            End Time:
                            {item.endTime}
                            <br />
                          </Typography>
                          <br />
                        </>
                      ))
                    ) : (
                      <Typography variant="body1" justify="center">
                        No Slots Found
                      </Typography>
                    )}
                  </Grid>
                  <Grid item lg={5} md={5}>
                    {detailDataTwo.gymDetail.timeslotSet?.length > 0 ? (
                      detailDataTwo.gymDetail.timeslotSet.map((item, index) => (
                        <>
                          <Typography variant="body1" justify="center">
                            Slot for:
                            {item.slotFor}
                            <br />
                            Start Time:
                            {item.startTime}
                            <br />
                            End Time:
                            {item.endTime}
                            <br />
                          </Typography>
                          <br />
                        </>
                      ))
                    ) : (
                      <Typography variant="body1" justify="center">
                        No Slots Found
                      </Typography>
                    )}
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
