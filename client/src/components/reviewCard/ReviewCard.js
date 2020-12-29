import React from 'react';
import {Grid, Paper, Typography, Box} from '@material-ui/core';
import { useStyles } from './ReviewCardStyles';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const ReviewCard = ({rating}) => {
    const classes = useStyles();
    const ReviewList = [
        {
            name:'Panda Bleh',
        },
        {
            name:'Billi Bleh',
        },
        {
            name:'Doggo Bleh',
        },
    ]
    return(
        <>
        <Grid item lg={7} md={7}>
        {ReviewList.map((item, index) => 
            <Paper elevation={3} className={classes.paper}>
               <Grid container lg={12} md={12}>
                   <Grid item lg={1} md={1}>
                   <Paper elevation={5} className={classes.cirpaper}></Paper>
                   </Grid> 
                   <Grid item lg={3} md={3}>
                       <Typography variant="h5" className={classes.name}>
                           {item.name}
                       </Typography>
                   </Grid>
                   <Grid item lg={4} md={4}>
                   <Box mb={3}>
                            <Rating
                            defaultValue={rating}
                            precision={0.5}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                        </Box>
                   </Grid>
               </Grid>
            </Paper>
        )}
        </Grid> 
        </>
    )
}

export default ReviewCard;