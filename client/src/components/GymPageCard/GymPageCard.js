import React, { useState } from "react";
import { Avatar, Typography, Grid, Paper, Chip } from "@material-ui/core";
import head from "../../assets/2.PNG";
import { useStyles } from "./GymPageCardStyles";
import ShareIcon from "@material-ui/icons/Share";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { ALL_GYMS, SEARCH_GYMS, IMAGE_URL } from "../../graphql/requests";
import { useQuery, useLazyQuery } from "@apollo/client";
import Loader from "../Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const Cards = () => {
  const classes = useStyles();
  const [searchText, setText] = useState(" ");
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
  ] = useLazyQuery(SEARCH_GYMS, {
    variables: { keyword: searchText },
  });
  if (gymLoading || filteredGymLoading) {
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
  if (filteredGymError) {
    return <p style={{ color: "#fff" }}>{filteredGymError.message}</p>;
  }

  console.log(gym);
  console.log(filteredGym);
  const clearFilter = () => {
    setText(" ");
  };
  return (
    <>
      <Grid container md={12} lg={12} justify="center">
        <Grid item lg={7} md={7} justify="center">
          <Grid container xs={12} lg={12} md={12}>
            <Grid item xs={2} lg={1} md={1} style={{ marginBottom: "2rem" }}>
              <PinDropIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid item xs={8} lg={3} md={3}>
              <Chip
                className={classes.select}
                label="Your Location"
                onClick={() => clearFilter()}
              />
            </Grid>
            <Grid xs={12} lg={8} md={8}>
              <Paper className={classes.root} elevation={2}>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  onChange={(e) => setText(e.target.value)}
                />
                <IconButton
                  className={classes.iconButton}
                  onClick={() => getGyms()}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {filteredGym?.searchGym?.length > 0
        ? filteredGym.searchGym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      <Avatar
                        src={`${IMAGE_URL}${item.gymimageSet.image}`}
                        alt="Profile"
                        variant="square"
                        className={classes.avatarimage}
                      />
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body2" className={classes.body}>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={{
                          pathname: "/gymdetails",
                          detailsProps: {
                            name: "blah",
                            rating: "3",
                          },
                        }}
                      >
                        <Typography variant="body2" className={classes.details}>
                          View Details
                          <ShareIcon
                            style={{ fontSize: "25px", marginLeft: "1rem" }}
                          />
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
        : gym.gym.map((item, index) => (
            <Grid item lg={4} md={4} id="gym" className={classes.card}>
              <Paper elevation={4} className={classes.paperNormal}>
                <Grid container>
                  <Grid item lg={12} md={12}>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Grid container className={classes.top}>
                          <Grid item lg={2} md={2}>
                            <Avatar
                              src={head}
                              alt="Profile"
                              className={classes.small}
                            />
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography variant="h6" className={classes.title}>
                              {" "}
                              {item.gym.name}{" "}
                            </Typography>
                            <Grid container>
                              <Grid item lg={2} md={2}>
                                <Typography className={classes.rating}>
                                  {item.rating}
                                  <StarIcon className={classes.ratingIcon} />
                                </Typography>
                              </Grid>
                              <Grid item lg={10} md={10}>
                                <Typography className={classes.count}>
                                  {item.gym.counter} people
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={2} md={2}>
                        <BeenhereOutlinedIcon
                          fontSize="small"
                          style={{ color: "#11C62E", float: "right" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={0}>
                    <Grid item lg={12} md={12}>
                      <Avatar
                        src={`${IMAGE_URL}${item.gymimageSet.image}`}
                        alt="Profile"
                        variant="square"
                        className={classes.avatarimage}
                      />
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography
                        variant="caption"
                        className={classes.location}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                        {item.city}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={12} md={12}>
                      <Typography variant="body2" className={classes.body}>
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.row}>
                    <Grid item lg={10} md={10}>
                      <Link
                        to={{
                          pathname: "/gymdetails",
                          detailsProps: {
                            name: "blah",
                            rating: "3",
                          },
                        }}
                      >
                        <Typography variant="body2" className={classes.details}>
                          View Details
                          <ShareIcon
                            style={{ fontSize: "25px", marginLeft: "1rem" }}
                          />
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item lg={2} md={2}>
                      <LocationOnIcon
                        fontSize="large"
                        style={{ color: "#E93E7F" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
    </>
  );
};

export default Cards;
