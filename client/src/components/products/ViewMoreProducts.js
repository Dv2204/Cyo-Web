import React from 'react';
import {Grid , Typography} from "@material-ui/core";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { useStyles } from "./ViewMoreProductsSyles";
import { Link } from "react-router-dom";

const ViewMoreProducts = () => {
    const classes = useStyles();
    return(
         <Grid container lg={12} md={12} justify="center" style={{marginTop: '2rem'}}>
        <Grid item lg={2} md={2} >
            <Typography ><Link to="/products" className={classes.text}>View More  <DoubleArrowIcon /></Link> </Typography>
        </Grid>
        </Grid>
    )
}

export default ViewMoreProducts;