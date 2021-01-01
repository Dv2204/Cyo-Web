import React, { useState } from "react";
import compare from "../assets/compare.jpg";
import { useStyles } from "./PageStyles/CompareStyles";
import CompareNavBar from "../components/Nav/CompareNav";
import { Grid, Typography, Chip, Paper } from "@material-ui/core";
import CompareSearch from "../components/compareSearch/CompareSearch";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { ALL_GYMS } from "../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const Compare = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { data: gym, loading: gymLoading, error: gymError } = useQuery(
    ALL_GYMS,
    {
      variables: {
        city: "",
      },
    }
  );
  if (gymLoading) {
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

  if (gymError) {
    return <p style={{ color: "#fff" }}>{gymError.message}</p>;
  }
  console.log(gym);
  return (
    <>
      <div
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
                    // onClick={() => clearFilter()}
                  />
                </Grid>
                <Grid xs={12} lg={8} md={8}>
                  <Paper className={classes.root} elevation={2}>
                    <InputBase
                      className={classes.input}
                      placeholder="Search"
                      // onChange={(e) => setText(e.target.value)}
                    />
                    <IconButton
                      className={classes.iconButton}
                      // onClick={() => getGyms()}
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
              <CompareSearch name="Gym name 2" />
            </Grid>
          </Grid>
          <Grid container md={12} lg={12} justify="center">
            <Grid item lg={2} md={2} justify="center">
              <Link to="/maincompare">
                <Chip className={classes.btn} label="Compare"></Chip>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Compare;
