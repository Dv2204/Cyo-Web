import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import NavBar from '../components/gymDetailsNav/NavBarMain';
import { useStyles } from "./PageStyles/GymDetailsStyles";
import Contact from '../components/contactUs/Contact';
import Sidebar from '../components/Sidebar/Sidebar';
import CircleDetails from '../components/circle/CircleDetails';
import DetailsCarousel from '../components/detailsCarousel/DetailsCarousel';
import head from "../assets/2.PNG";

const GymDetails = () => {
  const classes = useStyles();
  const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
    return(
      <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <DetailsCarousel />
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={1} md={1}>
             <img src={head} className={classes.headingicon} alt="Profile" />
          </Grid>
          <Grid item lg={11} md={11}>
          <Typography variant="h3" className={classes.heading}>
              Gym 1
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={8} md={8}>
            <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus auctor eu platea dolor etiam vitae aliquam urna.
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <Typography variant="h4" className={classes.facheading}>
              FACILITIES:
            </Typography>
          </Grid>
        </Grid>
        <Grid container lg={12} md={12} justify="center" style={{marginTop: '0.5rem'}}>
          <CircleDetails/>
        </Grid>
        <Grid container>
            <Contact />
          </Grid>
      </div>
    )
}

export default GymDetails;
