import React, {useState} from 'react';
import compare from '../assets/compare.jpg';
import { useStyles } from "./PageStyles/CompareStyles";
import NavBar from '../components/compareNav/NavBarMain';
import {Grid, Typography, Chip} from "@material-ui/core";
import Contact from '../components/contactUs/Contact';
import CompareSearch from '../components/compareSearch/CompareSearch';
import {Link} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const Compare = () => {
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)

  const toggle =() => {
      setIsOpen(!isOpen)
  }
        return (
            <>
            <div style={{backgroundImage: `url(${compare})`, height: '100vh', width: '100vw'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
                <div className={classes.compare}>
                <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                       COMPARE THE GYMS
                    </Typography>
                </Grid>
            </Grid>
             <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h6" className={classes.selection}  justify="center" >
                       Select the two gyms
                    </Typography>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} justify="center" style={{marginTop: '1rem'}}>
                <Grid item lg={7} md={7} justify="center">
                    <CompareSearch name="Gym name 1"/>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} justify="center" style={{marginTop: '1rem'}}>
                <Grid item lg={7} md={7} justify="center">
                    <CompareSearch name="Gym name 2"/>
                </Grid>
            </Grid>
            <Grid container md={12} lg={12} justify="center">
                <Grid item lg={2} md={2} justify="center">
                <Link to="/maincompare">
                <Chip className={classes.btn} label="Compare"></Chip>
                </Link>
                </Grid>
            </Grid>
            </div>
            </div>
            </>
        )
}

export default Compare;

