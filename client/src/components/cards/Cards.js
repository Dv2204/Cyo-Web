import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Container} from '@material-ui/core';
import pic from "../../assets/1.jpg";
import head from "../../assets/2.PNG";
import { useStyles } from "./CardsStyles";
import ShareIcon from '@material-ui/icons/Share';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Cards = () => {
    const classes = useStyles();
    const GymList = [
        {
          name: "Gym 1",
         location: "Blahhhh 1",
        },
        {
          name: "Gym 2",
          location: "Blaaahhhhh 2",
        },
        {
          name: "Gym 3",
          location: "Blahhhhhh 3",
        },
        {
            name: "Gym 4",
            location: 'Blahhhhhh 4'
        },
        {
            name: "Gym 1",
           location: "Blahhhh 1",
          },
          {
            name: "Gym 2",
            location: "Blaaahhhhh 2",
          },
          {
            name: "Gym 3",
            location: "Blahhhhhh 3",
          },
          {
              name: "Gym 4",
              location: 'Blahhhhhh 4'
          },
          {
            name: "Gym 1",
           location: "Blahhhh 1",
          },
          {
            name: "Gym 2",
            location: "Blaaahhhhh 2",
          },
          {
            name: "Gym 3",
            location: "Blahhhhhh 3",
          },
          {
            name: "Gym 4",
            location: 'Blahhhhhh 4'
        },
      ];
    return(
        <>
        {GymList.map((item, index) => (
            <Grid item lg={3}>
            <Paper elevation={3} className={classes.paperNormal}>
        <Container fixed>
            <Grid container >
            <Grid item lg={10}>
            <Grid container>
                <Grid item lg={2} >
                <Avatar src={head} alt="Profile" className={classes.small}/ >
                </Grid>
                <Grid item lg={10}>
                <Typography variant="h6" className={classes.title}>  {item.name} </Typography>
                </Grid>
            </Grid>
               <Grid container>
                   <Grid item lg={3}>
                   <Typography className={classes.rating}>4.3
                    <StarIcon className={classes.ratingIcon}/>
                    <StarIcon className={classes.ratingIcon}/>
                   </Typography>
                   </Grid>
                   <Grid item lg={9}>
                   <Typography className={classes.count}>2.3k people</Typography>
                   </Grid>
               </Grid>
              </Grid>
              <Grid item lg={2}>
                  <BeenhereOutlinedIcon style={{color: '#11C62E', float: 'right'}}/>
              </Grid> 
            </Grid>
            </Container>
            <Grid container justify="center" spacing={0}>
                <Grid item lg={12}>
                  <Avatar src={pic} alt="Profile" variant="square" style={{width: '100%', height: '20vh'}} />
                </Grid>
            </Grid>
            <Container fixed>
                <Grid container>
                    <Grid item lg={12}>
                        <Typography variant="caption" className={classes.location}>
                        <LocationOnOutlinedIcon fontSize="small" />
                            {item.location}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12}>
                        <Typography variant="body2" className={classes.body} >
                        Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit.Faucibus auctor eu platea 
                         dolor etiam vitae aliquam urna.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={10}>
                        <Typography variant="body2" className={classes.details}>
                            View Details
                            <ShareIcon style={{fontSize: '19px', marginLeft: '1rem', paddingTop: '0.2rem'}}  />
                        </Typography>
                    </Grid>
                    {/* <Grid item lg={2} style={{borderRadius: '50%', backgroundColor: '#E93E7F'}}>
                    <LocationOnOutlinedIcon className={classes.locationicon} />
                    </Grid> */}
                    <Grid item lg={2}>
                            <LocationOnIcon fontSize="large" style={{color: '#E93E7F'}} />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </Grid>
        ))}
        </>
    )
}

export default Cards;