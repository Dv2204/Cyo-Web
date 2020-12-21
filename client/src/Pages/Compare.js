import React from 'react';
import compare from '../assets/compare.jpg';
import { useStyles } from "./PageStyles/CompareStyles";
import NavBar from '../components/aboutNav/NavBarMain';
import {Grid, Typography} from "@material-ui/core";
import Contact from '../components/contactUs/Contact';

const Compare = () => {
    const classes = useStyles();
        return (
            <>
            <div style={{backgroundImage: `url(${compare})`, height: '100vh'}}>
                <NavBar/>
                <div className={classes.compare}>
                <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                       COMPARE THE GYMS
                    </Typography>
                </Grid>
            </Grid>
            </div>
            <Contact />
            </div>
            </>
        )
}

export default Compare;

