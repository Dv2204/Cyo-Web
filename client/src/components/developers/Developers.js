import React from 'react';
import {Grid, Typography, Avatar} from "@material-ui/core";
import pic from '../../assets/parth.jpg';
import { useStyles } from "./DevelopersStyles";

const Developers = () => {
    const classes = useStyles();
    return (
        <div>
        <Grid container lg={12} md={12} justify="center" style={{margin:'7vh 10vw', alignContent:'center'}}>
            <Grid item lg={5} md={5} justify="center">
            <Avatar src={pic} alt="profile" className={classes.profile} style={{alignContent:'center'}}/>
            <Typography variant="h5" style={{fontWeight:'bold', textAlign:"center"}}> Parth Arora </Typography>
            <Typography variant="h6" style={{textAlign:"center"}}>Full Stack Developer</Typography>
            </Grid>
        </Grid>
        </div>
    )
}

export default Developers;