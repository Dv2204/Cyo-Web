import React from "react";
import { Avatar, Typography, Grid, Paper } from "@material-ui/core";
import pic from "../../assets/1.jpg";
import head from "../../assets/2.PNG";
import { useStyles } from "./CardsStyles";
import ShareIcon from "@material-ui/icons/Share";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {Link} from 'react-router-dom';
import { ALL_GYMS } from "../../graphql/requests";
// import { IMAGE_URL } from "../../graphql/requests";
import { useQuery } from "@apollo/client";
import Loader from '../Loader';

const Cards = () => {
  const classes = useStyles();
  const {data:gym, loading, error} = useQuery(ALL_GYMS, 
    {
      variables: {
        city: " "
      },
    }
    );
  if(loading){
    return (
      <Grid container lg={12} md={12} justify="center" style={{margin: '5rem'}}>
        <Grid item lg={3} md={3} justify="center">
        <Loader color="rgba(38, 38, 38, 0.7)" />
        </Grid>
      </Grid>
    )
  }

  if(error){
    return <p style={{color: '#fff'}}>{error.message}</p>
  }
  
  console.log(gym);
  return (
    <>
      {gym.gym.map((item, index) =>
        index < 9 ? (
          <Grid item lg={4} md={4} id="gym" className={classes.card} >
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
                               {item.gym.counter}
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
                      src={item.gymimageSet.image}
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
                      {item.address}
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
                  <Link to="/gymdetails">
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
        ) : null
      )}
    </>
  );
};

export default Cards;
