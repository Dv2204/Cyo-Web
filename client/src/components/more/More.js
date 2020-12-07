import React from 'react';
import {Grid , Typography} from "@material-ui/core";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { useStyles } from "./MoreStyles";

const ViewMore = () => {
    const classes = useStyles();
    return(
         <Grid container lg={12} md={12} justify="center" style={{marginTop: '2rem'}}>
        <Grid item lg={2} md={2} >
            <Typography className={classes.text}>View More  <DoubleArrowIcon /></Typography>
        </Grid>
        </Grid>
    )
}

export default ViewMore;