import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Container} from '@material-ui/core';
import pic from "../../assets/1.jpg";
import { useStyles } from "./CardsStyles";
import ShareIcon from '@material-ui/icons/Share';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

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
                        <LocationOnOutlinedIcon fontSize="small" />
                            blah blah blah, blah city, india
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12}>
                        <Typography variant="body2" className={classes.body} >
                        Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit.Faucibus auctor eu platea 
                         dolor etiam vitae aliquam urna.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={10}>
                        <Typography variant="body2" className={classes.details}>
                            View Details
                            <ShareIcon style={{fontSize: '19px', marginLeft: '1rem', paddingTop: '0.2rem'}}  />
                        </Typography>
                    </Grid>
                    <Grid item lg={2} style={{borderRadius: '50%', backgroundColor: '#E93E7F'}}>
                    <LocationOnOutlinedIcon className={classes.locationicon} />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </>
    )
}

export default Cards;