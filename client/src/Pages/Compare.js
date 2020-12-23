import React, {useState} from 'react';
import compare from '../assets/compare.jpg';
import { useStyles } from "./PageStyles/CompareStyles";
import CompareNavBar from '../components/Nav/CompareNav';
import {Grid, Typography, Chip} from "@material-ui/core";
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
            <div style={{height:'100vh', backgroundImage: `url(${compare})`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <CompareNavBar toggle={toggle}/>
                <div className={classes.compare}>
                <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text}  justify="center" >
                       COMPARE THE GYMS
                    </Typography>
                </Grid>
            </Grid>
             <Grid container lg={12} md={12}>
                <Grid item xs={12} lg={12} md={12} >
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

