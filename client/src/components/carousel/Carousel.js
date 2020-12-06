import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Chip} from '@material-ui/core';
import { useStyles } from "./CarouselStyles";
//import CarouselComp from './CarouselComp';

const Carousel = () => {
    const classes = useStyles();
    return(
        <Grid item lg={12} md={12}>
            <Grid container lg={12} md={12}>
                <Grid item lg={12} md={12} >
                    <Typography variant="h2" className={classes.text} justify="center">
                        TRENDING GYMS
                    </Typography>
                </Grid>
            </Grid>
                    {/* <CarouselComp /> */}
            </Grid>
    )
}

export default Carousel;