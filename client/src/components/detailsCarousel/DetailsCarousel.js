import React from "react";
import {Paper, Grid, Typography} from "@material-ui/core";
import { useStyles } from "./DetailsCarouselStyles";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const DetailsCarousel = () => {
    const classes = useStyles();
    return(
        <Paper eevation={2} className={classes.paper}>
            <Grid container className={classes.row} >
                  <Grid item lg={1} md={1} style={{marginTop:'1rem'}}>
                      <LocationOnOutlinedIcon className={classes.location} fontSize="normal" />
                  </Grid>
                  <Grid item lg={2} md={2} style={{marginTop:'1rem'}}>
                  <Typography variant="caption" className={classes.locationtext} >
                  Blah blah blah
                    </Typography>
                  </Grid>
                </Grid>
               <Grid container lg={12} md={12} justify="center">
                   <Grid item lg={11} md={11}>
                   <hr className={classes.line}/>
                   </Grid>
               </Grid>
            <Typography>Carousel</Typography>
        </Paper>
    )
}

export default DetailsCarousel;