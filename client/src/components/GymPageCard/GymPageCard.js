import React from "react";
import { Avatar, Typography, Paper, Grid } from "@material-ui/core";
import pic from "../../assets/1.jpg";
import head from "../../assets/2.PNG";
import { useStyles } from "./GymPageCardStyles";
import ShareIcon from "@material-ui/icons/Share";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const GymPageCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const GymList = [
    {
      name: "Gym 1",
      location: "Bathinda",
    },
    {
      name: "Gym 2",
      location: " Chandigarh",
    },
    {
      name: "Gym 3",
      location: "Jalandhar ",
    },
    {
      name: "Gym 4",
      location: "Rudrapur",
    },
    {
      name: "Gym 5",
      location: "Patiala",
    },
    {
      name: "Gym 6",
      location: "Panchkula",
    },
    {
      name: "Gym 7",
      location: "Delhi",
    },
    {
      name: "Gym 8",
      location: "Ludhiana",
    },
    {
      name: "Gym 9",
      location: "Dehradun",
    },
    {
      name: "Gym 10",
      location: "Mirzapur",
    },
    {
      name: "Gym 11",
      location: "Ghaziabad",
    },
    {
      name: "Gym 12",
      location: "Banaras",
    },
  ];
  return (
    <>
      {GymList.map((item, index) => (
        <Grid item lg={4} md={4} id="gym">
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
                          {item.name}{" "}
                        </Typography>
                        <Grid container>
                          <Grid item lg={2} md={2}>
                            <Typography className={classes.rating}>
                              4.3
                              <StarIcon className={classes.ratingIcon} />
                            </Typography>
                          </Grid>
                          <Grid item lg={10} md={10}>
                            <Typography className={classes.count}>
                              2.3k people
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
                    src={pic}
                    alt="Profile"
                    variant="square"
                    style={{ width: "100%", height: "20vh" }}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.row}>
                <Grid item lg={12} md={12}>
                  <Typography variant="caption" className={classes.location}>
                    <LocationOnOutlinedIcon fontSize="small" />
                    {item.location}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.row}>
                <Grid item lg={12} md={12}>
                  <Typography variant="body2" className={classes.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Faucibus auctor eu platea dolor etiam vitae aliquam
                    urna.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.row}>
                <Grid item lg={10} md={10}>
                  <Typography variant="body2" className={classes.details}>
                    View Details
                    <ShareIcon
                      style={{ fontSize: "25px", marginLeft: "1rem" }}
                    />
                  </Typography>
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

export default GymPageCard;
