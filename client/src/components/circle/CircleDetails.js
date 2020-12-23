import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {useStyles} from './CircleDetailsStyles';

const CircleDetails = () => {
    const classes = useStyles();
    const FacList = [
        {
            des: 'Fitness Group'
        },
        {
            des: 'Health Spa'
        },
        {
            des: 'Health Spa'
        },
        {
            des: 'Bhangra Club'
        },
        {
            des: 'Zumba Classes'
        }
    ]
    return(
        <>
        <Grid item lg={8} md={8}>
            <Grid container lg={12} md={12} justify="space-around">
            {FacList.map((item, index) =>
        <Grid item lg={2} md={2}>
            <Paper elevation={2} className={classes.paper}>
               
            </Paper>
            <Typography variant="h6" className={classes.text}>
                {item.des}
            </Typography>
        </Grid>
         )}
            </Grid>
        </Grid>
         </>
    )
}

export default CircleDetails;