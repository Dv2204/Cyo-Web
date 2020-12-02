import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Container} from '@material-ui/core';
import pic from "../../assets/1.jpg";
import { useStyles } from "./CardsStyles";

const Cards = () => {
    const classes = useStyles();
    return(
        <>
        <Paper elevation={3}>
            <Grid container spacing={6} >
            <Grid item lg={12}>
               <Typography>Sasta Gym</Typography>
              </Grid> 
            </Grid>
            <Grid container justify="center" spacing={0}>
                <Grid item lg={12}>
                  <Avatar src={pic} alt="Profile" variant="square" style={{width: '100%', height: '20vh'}} />
                </Grid>
            </Grid>
            <Container fixed>
                <Grid container>
                    <Grid item lg={12}>
                        <Typography variant="caption" className={classes.location}>
                            blah blah blah, blah city, india
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </>
    )
}

export default Cards;