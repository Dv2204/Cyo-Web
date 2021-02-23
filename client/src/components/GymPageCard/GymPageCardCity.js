import React, { useState } from "react";
import { Grid, Paper, Chip } from "@material-ui/core";
import { useStyles } from "./GymPageCardStyles";
import {
  ALL_GYMS,
  CITY_GYMS,
  SEARCH_GYMS,
} from "../../graphql/requests";
import { useQuery, useLazyQuery } from "@apollo/client";
import Loader from "../Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import GymData from './GymData';

const Cards = () => {
  const classes = useStyles();
  const [searchText, setText] = useState(" ");
  const [searchNameText, setNameText] = useState(" ");
  const [isShown, setIsShown] = useState(false);
  const { data: gym, loading: gymLoading, error: gymError } = useQuery(
    ALL_GYMS,
    {
      variables: {
        city: "",
      },
    }
  );
  const [
    getGyms,
    { data: filteredGym, loading: filteredGymLoading, error: filteredGymError },
  ] = useLazyQuery(CITY_GYMS, {
    variables: { city: searchText },
  });
  const [
    getNameGyms,
    {
      data: filteredNameGym,
      loading: filteredNameGymLoading,
      error: filteredNameGymError,
    },
  ] = useLazyQuery(SEARCH_GYMS, {
    variables: { keyword: searchNameText },
  });
  if (gymLoading || filteredGymLoading || filteredNameGymLoading) {
    return (
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "5rem" }}
      >
        <Grid item lg={3} md={3} justify="center">
          <Loader color="rgba(38, 38, 38, 0.7)" className={classes.loader} />
        </Grid>
      </Grid>
    );
  }

  if (gymError) {
    return <p style={{ color: "#fff" }}>{gymError.message}</p>;
  }
  if (filteredGymError) {
    return <p style={{ color: "#fff" }}>{filteredGymError.message}</p>;
  }
  if (filteredNameGymError) {
    return <p style={{ color: "#fff" }}>{filteredNameGymError.message}</p>;
  }

  const onChangeHandler = (e) => {
    setNameText(e.target.value);
    setText(e.target.value);
  };
  const onClickHandler = () => {
    getGyms();
    getNameGyms();
  };

  console.log(gym);
  console.log(filteredGym);
  console.log(filteredNameGym);
  const clearFilter = () => {
    setText("");
    setNameText("");
  };

  const renderComponent = () => {
    if (filteredGym?.gym?.length > 0) {
      return filteredGym.gym.map((item, index) => (
        <GymData item={item} key={index} />
      ));
    } else if (filteredNameGym?.searchGym?.length > 0) {
      return filteredNameGym.searchGym.map((item, index) => (
        <GymData item={item} key={index} />
      ));
    } else {
      return gym?.gym?.map((item, index) => (
        <GymData item={item} key={index} />
      ));
    }
  };

  return (
    <>
      <Grid container sm={12} md={12} lg={12} justify="center">
        <Grid item sm={12} lg={7} md={7} justify="center" style={{ width: "100%" }}>
          <Grid container xs={12}  sm={12} lg={12} md={12}>
            <Grid item xs={4} sm={2} lg={1} md={1}>
              <PinDropIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid xs={8} sm={7} lg={8} md={8}>
              <Paper className={classes.root} elevation={2}>
                <InputBase
                  className={classes.input}
                  placeholder="Search by name or city"
                  onChange={onChangeHandler}
                />
                <IconButton
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  className={classes.iconButton}
                  onClick={onClickHandler}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={3}>
              <Chip
                className={classes.select}
                label="Clear Filter"
                onClick={() => clearFilter()}
              />
            </Grid>
          </Grid>
          <Grid container sm={3} lg={9} md={9} justify="flex-end">
            <Grid item lg={1} md={1} justify="flex-end">
              {isShown && <div className={classes.hover}> Search</div>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {renderComponent()}
    </>
  );
};

export default Cards;