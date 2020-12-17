import React from 'react';
import { Typography, Grid, Container} from '@material-ui/core';
import { useStyles } from "./ContactStyles";

const Contact = () => {
    const classes = useStyles();
    return(
        <>
        <Grid item md={12} style={{backgroundColor: '#3F3F3F'}}>
           <Grid container lg={12} md={12} className={classes.row}>
           <Grid container lg={12} md={12} justify="center">
               <Typography variant="h3" className={classes.heading} >
                   CONTACT US
               </Typography>

            <Grid>
                
            </Grid>
            </Grid>
           </Grid>          
        </Grid>
        <Grid container lg={12} md={12} justify="center" style={{backgroundColor: '#282828', height:'8vh'}}>
        <Typography variant="h6" className={classes.link} >
            Choose Your Option &copy; 2020
        </Typography>
        </Grid>
        </>
    )
}

export default Contact;