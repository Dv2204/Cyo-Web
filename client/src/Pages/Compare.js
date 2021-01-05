import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import compare from "../assets/compare.jpg";
import { useStyles } from "./PageStyles/CompareStyles";
import CompareNavBar from "../components/Nav/CompareNav";
import { Grid, Typography, Chip, Paper } from "@material-ui/core";
import CompareSearch from "../components/compareSearch/CompareSearch";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { SEARCH_GYMS } from "../graphql/requests";
import { useLazyQuery } from "@apollo/client";
import Loader from "../components/Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

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
      // After query complete, set the details of first gym
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
      // After query complete, set the details of second gym
      setSecondGym(data);
    },
  });

  useEffect(() => {
    if (firstGym && secondGym) {
      console.log(firstGym);
      console.log(secondGym);
      {
        firstGym.searchGym.length > 0 || secondGym.searchGym.length > 0
          ? // Send the ids below in the link
            history.push(
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
  const clearFirstFilter = () => {
    setFirstText(" ");
  };
  const clearSecondFilter = () => {
    setSecondText(" ");
  };
  const getGyms = () => {
    getFirstGym();
    getSecondGym();
    // console.log(filteredFirstGym);
    // console.log(filteredSecondGym);
    // if (filteredFirstGym && filteredSecondGym) {
    //   console.log(filteredFirstGym);
    //   console.log(filteredSecondGym);
    //   // Send the ids below in the link
    //   history.push("/maincompare");
    // }
  };
  return (
    <>
      <div className={classes.mainDiv}
        style={{
          height: "100vh",
          backgroundImage: `url(${compare})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <CompareNavBar toggle={toggle} />
        <div className={classes.compare}>
          <Grid container lg={12} md={12}>
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
          </Grid>
          <Grid container lg={12} md={12}>
            <Grid item xs={12} lg={12} md={12}>
              <Typography
                variant="h6"
                className={classes.selection}
                justify="center"
              >
                Select the two gyms
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            md={12}
            lg={12}
            justify="center"
            style={{ marginTop: "1rem" }}
          >
            <Grid item lg={7} md={7} justify="center">
              <Grid container md={12} lg={12} justify="center">
                <Grid
                  item
                  xs={2}
                  lg={1}
                  md={1}
                  style={{ marginBottom: "2rem" }}
                >
                  <PinDropIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} lg={3} md={3}>
                  <Chip
                    className={classes.select}
                    label="Gym Name"
                    onClick={() => clearFirstFilter()}
                  />
                </Grid>
                <Grid xs={12} lg={8} md={8} justify="center">
                  <Paper className={classes.root} elevation={2}>
                    <InputBase
                      className={classes.input}
                      placeholder="Search"
                      onChange={(e) => setFirstText(e.target.value)}
                    />
                    <IconButton
                      className={classes.iconButton}
                      // onClick={() => getFirstGym()}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            md={12}
            lg={12}
            justify="center"
            style={{ marginTop: "1rem" }}
          >
            <Grid item lg={7} md={7} justify="center">
              <Grid container md={12} lg={12} justify="center">
                <Grid
                  item
                  xs={2}
                  lg={1}
                  md={1}
                  style={{ marginBottom: "2rem" }}
                >
                  <PinDropIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} lg={3} md={3}>
                  <Chip
                    className={classes.select}
                    label="Gym Name"
                    onClick={() => clearSecondFilter()}
                  />
                </Grid>
                <Grid xs={12} lg={8} md={8} justify="center">
                  <Paper className={classes.root} elevation={2}>
                    <InputBase
                      className={classes.input}
                      placeholder="Search"
                      onChange={(e) => setSecondText(e.target.value)}
                    />
                    <IconButton
                      className={classes.iconButton}
                      // onClick={() => getSecondGym()}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container md={12} lg={12} justify="center">
            <Grid item lg={2} md={2} justify="center">
              {/* <Link to="/maincompare"> */}
              <Chip
                onClick={() => getGyms()}
                className={classes.btn}
                label="Compare"
              ></Chip>
              {/* </Link> */}
              {/* <Link to={`/maincompare/${filteredFirstGym.searchGym.id}`}>
                  <Chip
                    onClick={() => getGyms()}
                    className={classes.btn}
                    label="Compare"
                  ></Chip>
                </Link> */}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Compare;
