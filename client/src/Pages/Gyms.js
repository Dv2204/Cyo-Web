import React, {useState} from 'react';
import GymPageCard from '../components/GymPageCard/GymPageCard';
import {Grid, Container, Typography} from "@material-ui/core";
import GymNavBar from '../components/Nav/GymNav';
import Search from '../components/search/Search';
import { useStyles } from "./PageStyles/GymsStyles";
import Contact from '../components/contactUs/Contact';
import Sidebar from '../components/Sidebar/Sidebar';

const Gyms = () => {
  const classes = useStyles();
  const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
    return(
      <div style={{backgroundColor: 'rgba(248, 248, 248, 1)'}}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <GymNavBar toggle={toggle}/>
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
        <Grid container spacing={8} style={{marginTop: '1rem', paddingBottom: '6rem'}}>
          <GymPageCard />
        </Grid>
        </Container>
        <Grid container>
            <Contact />
          </Grid>
      </div>
    )
}

export default Gyms;
