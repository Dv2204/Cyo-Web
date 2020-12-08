import React from 'react';
import { Avatar, Typography,Paper,Grid, Container} from '@material-ui/core';
import { useStyles } from "./ProductCardsStyles";

const ProductCards = () => {
    const classes = useStyles();
    return(
        <Grid item lg={4} md={4} >
           <Paper elevation={2} className={classes.paper}>
               <Grid container justify="center">
                    <Grid item lg={12} md={12}>
                    {/* hi */}
                    </Grid>
                </Grid>
           </Paper>
           <Typography variant="h6" className={classes.text}>
               6780 only
           </Typography>
        </Grid>
    )
}

export default ProductCards;