import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import compare from "../assets/compare.jpg";
import { useStyles } from "./PageStyles/CompareStyles";
import CompareNavBar from "../components/Nav/CompareNav";
import { Grid, Typography, Chip, Paper } from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import { SEARCH_GYMS } from "../graphql/requests";
import { useLazyQuery } from "@apollo/client";
import Loader from "../components/Loader";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import vs from "../assets/vs.png";
import BackgroundSlideshow from "react-background-slideshow";
import image1 from "../assets/001 1.jpg";
import image2 from "../assets/002 1.jpg";
import image3 from "../assets/003 1.jpg";
import img1 from "../assets/1.jfif";
import img2 from "../assets/2.jfif";
import img3 from "../assets/3.jfif";
import img4 from "../assets/4.jfif";
import ContactUsNew from "../components/contactUs/ContactUsNew";



const Compare = () => {
  const classes = useStyles();
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [searchFirstText, setFirstText] = useState(" ");
  const [searchSecondText, setSecondText] = useState(" ");
  const [firstGym, setFirstGym] = useState(null);
  const [secondGym, setSecondGym] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [
    getFirstGym,
    {
      data: filteredFirstGym,
      loading: filteredFirstGymLoading,
      error: filteredFirstGymError,
    },
  ] = useLazyQuery(SEARCH_GYMS, {
    variables: { keyword: searchFirstText },
    onCompleted: (data) => {
      setFirstGym(data);
    },
  });
  const [
    getSecondGym,
    {
      data: filteredSecondGym,
      loading: filteredSecondGymLoading,
      error: filteredSecondGymError,
    },
  ] = useLazyQuery(SEARCH_GYMS, {
    variables: { keyword: searchSecondText },
    onCompleted: (data) => {
      setSecondGym(data);
    },
  });

  useEffect(() => {
    if (firstGym && secondGym) {
      console.log(firstGym);
      console.log(secondGym);
      {
        firstGym.searchGym.length > 0 || secondGym.searchGym.length > 0
          ? history.push(
              `/maincompare/${firstGym.searchGym[0].id}/${secondGym.searchGym[0].id}`
            )
          : history.push("/maincompare");
      }
    }
  }, [firstGym, secondGym]);
  if (filteredFirstGymLoading || filteredSecondGymLoading) {
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

  if (filteredFirstGymError) {
    return <p style={{ color: "#fff" }}>{filteredFirstGymError.message}</p>;
  }
  if (filteredSecondGymError) {
    return <p style={{ color: "#fff" }}>{filteredSecondGymError.message}</p>;
  }
  const getGyms = () => {
    getFirstGym();
    getSecondGym();
  };
  return (
    <>
      <div className={classes.slideshow}>
        <BackgroundSlideshow
          images={[image1, image2, image3]}
          animationDelay="2000"
          style={{ zIndex: "1 important" }}
        />
      </div>
      <div
        className={classes.mainDiv}
        style={{
          height: "120vh !important",
          backgroundColor: "#3F3F3F"
        }}
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <CompareNavBar toggle={toggle} />
        <div className={classes.compare}>
          <Grid container lg={12} md={12} style={{ zIndex: "10" }}>
            <Grid item xs={12} lg={12} md={12} style={{ zIndex: "10" }}>
              <Typography
                variant="h2"
                className={classes.text}
                style={{ textAlign: "center" }}
                justify="center"
                style={{ zIndex: "2" }}
              >
                COMPARE THE GYMS
              </Typography>
            </Grid>
          </Grid>
          <Grid container lg={12} md={12} style={{ zIndex: "10" }}>
            <Grid item xs={12} lg={12} md={12} style={{ zIndex: "10" }}>
              <Typography
                variant="h6"
                className={classes.selection}
                justify="center"
                style={{ zIndex: "10" }}
              >
                Select the two gyms
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            md={12}
            lg={12}
            justify="space-around"
            style={{ marginTop: "1rem" }}
          >
            <Grid
              item
              lg={5.5}
              md={5}
              xs={12}
              justify="flex-end"
              style={{ zIndex: "10" }}
            >
              <Grid container md={12} lg={12} justify="flex-end">
                <Grid xs={12} lg={8} md={8} justify="center">
                  <Paper
                    className={classes.root}
                    elevation={2}
                    style={{
                      zIndex: "1000",
                      backgroundColor: "rgba(0,0,0,0.35)",
                      borderRadius: "20px",
                    }}
                  >
                    <InputBase
                      className={classes.input}
                      placeholder="Gym Name 1"
                      onChange={(e) => setFirstText(e.target.value)}
                    />
                    <IconButton className={classes.iconButton}>
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={1} md={1} xs={5}>
              <Grid container justify="center">
                <img src={vs} alt="vs" className={classes.vs} />
              </Grid>
            </Grid>

            <Grid
              item
              lg={5.5}
              md={5}
              xs={12}
              justify="flex-start"
              style={{ zIndex: "10" }}
            >
              <Grid container md={12} lg={12} justify="flex-start">
                <Grid xs={12} lg={8} md={8} justify="center">
                  <Paper
                    className={classes.root}
                    elevation={2}
                    style={{
                      zIndex: "10",
                      backgroundColor: "rgba(0,0,0,0.35)",
                      borderRadius: "20px",
                    }}
                  >
                    <InputBase
                      className={classes.input}
                      placeholder="Gym Name 2"
                      onChange={(e) => setSecondText(e.target.value)}
                    />
                    <IconButton className={classes.iconButton}>
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid
              item
              lg={12}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Chip
                onClick={() => getGyms()}
                className={classes.btn}
                label="Compare"
              ></Chip>
            </Grid>
          </Grid>
        </div>
        <Grid container style={{ marginTop: "20vh" }}>
          <ContactUsNew />
        </Grid>
      </div>
    </>
  );
};

export default Compare;
