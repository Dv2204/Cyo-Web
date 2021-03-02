import React from "react";
import { Avatar, Typography, Grid, Paper, Chip } from "@material-ui/core";
import head from "../../assets/2.PNG";
import profile from "../../assets/notFound.jpg";
import { useStyles } from "./GymPageCardStyles";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../graphql/requests";
import Slide from "react-reveal/Slide";

const GymData = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item lg={4} sm={6} md={4} id="gym" className={classes.card}>
      <Slide bottom>
        <Paper elevation={4} className={classes.paperNormal}>
          <Grid container>
            <Grid item lg={12} sm={12} md={12}>
              <Grid container className={classes.row}>
                <Grid item lg={10} sm={12} md={10}>
                  <Grid container className={classes.top}>
                    <Grid item lg={2} sm={3} md={2}>
                      <Avatar
                        src={head}
                        alt="Profile"
                        className={classes.small}
                      />
                    </Grid>
                    <Grid item lg={10} sm={8} md={10}>
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
                    className={classes.tick}
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
                <Typography variant="caption" className={classes.location}>
                  <LocationOnOutlinedIcon fontSize="small" className={classes.locationicon}/>
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
                  <Chip label="View Details" className={classes.detailschip} />
                </Link>
              </Grid>
              <Grid item lg={2} md={2}>
                <LocationOnIcon fontSize="large" style={{ color: "#E93E7F" }} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </Grid>
  );
};

export default GymData;
