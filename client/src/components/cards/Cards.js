import React, { useState } from "react";
import { Avatar, Typography, Grid, Paper, Chip } from "@material-ui/core";
import head from "../../assets/2.PNG";
import profile from "../../assets/compare.jpg";
import { useStyles } from "./CardsStyles";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { ALL_GYMS, CITY_GYMS, IMAGE_URL } from "../../graphql/requests";
import { useQuery, useLazyQuery } from "@apollo/client";
import Loader from "../Loader";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "react-reveal/Slide";

const Cards = () => {
  const classes = useStyles();
  const [searchText, setText] = useState(" ");
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
      <Grid
        container
        md={12}
        lg={12}
        justify="center"
        style={{ marginLeft: "4rem" }}
        className={classes.searchdiv}
      >
        <Grid item lg={7} md={7} justify="center">
          <Grid container xs={12} lg={12} md={12}>
            <Grid item sm={1} xs={4} lg={1} md={1}>
              <PinDropIcon fontSize="large" className={classes.icon} />
            </Grid>
            <Grid sm={7} xs={8} lg={8} md={8}>
              <Paper className={classes.root} elevation={2}>
                <InputBase
                  className={classes.input}
                  placeholder="Enter City"
                  onChange={(e) => setText(e.target.value)}
                />
                <IconButton
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  className={classes.iconButton}
                  onClick={() => getGyms()}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item sm={4} xs={12} lg={3} md={3}>
              <Chip
                className={classes.select}
                label="Clear Filter"
                onClick={() => clearFilter()}
              />
            </Grid>
          </Grid>
          <Grid container lg={9} md={9} justify="flex-end">
            <Grid item lg={1} md={1} justify="flex-end">
              {isShown && <div className={classes.hover}> Search</div>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {filteredGym?.gym?.length > 0
        ? filteredGym.gym.map((item, index) => (
            <Grid item lg={4} md={4} sm={6} id="gym" className={classes.card}>
              <Slide bottom>
                <Paper elevation={4} className={classes.paperNormal}>
                  <Grid container>
                    <Grid item xs={12} lg={12} md={12}>
                      <Grid container item xs={12} className={classes.row}>
                        <Grid item xs={12} lg={10} md={10}>
                          <Grid container className={classes.top}>
                            <Grid item xs={12} lg={2} md={2}>
                              <Avatar
                                src={head}
                                alt="Profile"
                                className={classes.small}
                              />
                            </Grid>
                            <Grid item xs={12} lg={10} md={10}>
                              <Typography
                                variant="h6"
                                className={classes.title}
                              >
                                {" "}
                                {item.gym.name}{" "}
                              </Typography>
                              <Grid container>
                                <Grid item xs={5} lg={2} md={2}>
                                  <Typography className={classes.rating}>
                                    {item.rating}
                                    <StarIcon className={classes.ratingIcon} />
                                  </Typography>
                                </Grid>
                                <Grid item xs={5} lg={10} md={10}>
                                  <Typography className={classes.count}>
                                    {item.gym.counter} people
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item lg={2} md={2} xs={12}>
                          <BeenhereOutlinedIcon
                            fontSize="small"
                            style={{
                              color: "#11C62E",
                              float: "right",
                              justifyContent: "flex-end",
                            }}
                            className={classes.TickStyle}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={0}>
                      <Grid item lg={12} md={12}>
                        {item.gymimageSet.length > 0 ? (
                          <img
                            src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                            alt="Profile"
                            index={0}
                            className={classes.avatarimage}
                          />
                        ) : (
                          <img
                            src={profile}
                            alt="Profile"
                            className={classes.avatarimage}
                          />
                        )}
                      </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                      <Grid item lg={12} md={12}>
                        <Typography
                          variant="caption"
                          className={classes.location}
                        >
                          <LocationOnOutlinedIcon
                            fontSize="small"
                            className={classes.locationicon}
                          />
                          {item.city}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                      <Grid item lg={12} md={12}>
                        <Typography variant="body1" className={classes.body}>
                          Weekly Price: {item.weeklyPrice} <br />
                          Monthly Price: {item.monthlyPrice} <br />
                          Quarterly Price: {item.quarterlyPrice}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                      <Grid item lg={10} md={10}>
                        <Link
                          to={`/gymdetails/${item.id}`}
                          className={classes.nonunderlinelink}
                        >
                          <Chip
                            label="View Details"
                            className={classes.detailschip}
                          />
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
              </Slide>
            </Grid>
          ))
        : gym.gym.map((item, index) =>
            index < 9 ? (
              <Grid item lg={4} md={4} sm={6} id="gym" className={classes.card}>
                <Slide bottom>
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
                                <Typography
                                  variant="h6"
                                  className={classes.title}
                                >
                                  {" "}
                                  {item.gym.name}{" "}
                                </Typography>
                                <Grid container>
                                  <Grid item lg={2} md={2}>
                                    <Typography className={classes.rating}>
                                      {item.rating}
                                      <StarIcon
                                        className={classes.ratingIcon}
                                      />
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
                          {item.gymimageSet.length > 0 ? (
                            <img
                              src={`${IMAGE_URL}${item.gymimageSet[0].image}`}
                              alt="Profile"
                              index={0}
                              className={classes.avatarimage}
                            />
                          ) : (
                            <img
                              src={profile}
                              alt="Profile"
                              className={classes.avatarimage}
                            />
                          )}
                        </Grid>
                      </Grid>
                      <Grid container className={classes.row}>
                        <Grid item lg={12} md={12}>
                          <Typography
                            variant="caption"
                            className={classes.location}
                          >
                            <LocationOnOutlinedIcon
                              fontSize="small"
                              className={classes.locationicon}
                            />
                            {item.city}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container className={classes.row}>
                        <Grid item lg={12} md={12}>
                          <Typography variant="body1" className={classes.body}>
                            Weekly Price: {item.weeklyPrice} <br />
                            Monthly Price: {item.monthlyPrice} <br />
                            Quarterly Price: {item.quarterlyPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container className={classes.row}>
                        <Grid item lg={10} md={10}>
                          <Link
                            to={`/gymdetails/${item.id}`}
                            className={classes.nonunderlinelink}
                          >
                            <Chip
                              label="View Details"
                              className={classes.detailschip}
                            />
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
                </Slide>
              </Grid>
            ) : null
          )}
    </>
  );
};

export default Cards;
