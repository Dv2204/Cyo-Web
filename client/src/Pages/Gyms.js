import React from 'react';
import GymPageCard from '../components/GymPageCard/GymPageCard';
import {Grid, Container, Typography} from "@material-ui/core";
import NavBar from '../components/Nav/NavBarMain';
import Search from '../components/search/Search';
import { useStyles } from "./PageStyles/GymsStyles";

const Gyms = () => {
  const classes = useStyles();
    return(
      <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
        <NavBar/>
        <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                        GYMS
                    </Typography>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} justify="center">
          <Grid item lg={7} md={7} justify="center">
            <Search/>
          </Grid>
        </Grid>
        <Container fixed>
        <Grid container spacing={8} style={{marginTop: '0.2rem'}}>
          <GymPageCard />
        </Grid>
        </Container>
      </div>
    )
}

export default Gyms;
