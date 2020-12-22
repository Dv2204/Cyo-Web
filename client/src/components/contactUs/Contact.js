import React from 'react';
import { Typography, Grid, Paper} from '@material-ui/core';
import { useStyles } from "./ContactStyles";

const Contact = () => {
    const classes = useStyles();
    return(
        <>
        <Grid item md={12} style={{backgroundColor: '#3F3F3F'}}>
           <Grid container lg={12} md={12} className={classes.row}>
            <Grid container lg={12} md={12} justify="center" id="contact">
                <Typography variant="h3" className={classes.heading} >
                    CONTACT US
                </Typography>
                <Grid container justify="center">
                    <Grid item lg={5} md={5} justify="center">
                        <Typography className={classes.about}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Dui ultricies accumsan et viverra. Arcu auctor maecenas 
                        lectus arcu tortor. Gravida diam sit convallis sagittis. 
                        Libero tempus phasellus fames nisl in vestibulum. Laoreet 
                        lacus volutpat, tincidunt maecenas. Scelerisque odio rutrum 
                        mi netus. Nulla non mauris, adipiscing nisi. Potenti id pretium
                            nisl porttitor. Aenean euismod tortor fames odio amet interdum 
                            quam et, ornare. Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Dui ultricies accumsan et viverra.
                        </Typography>
                    </Grid>
                    <Grid lg={1}/>

                    <Grid item lg={5} md={5} justify="center">
                    <Paper elevation={5} variant="outlined" className={classes.mailbox} >
                    <Typography variant="h6" className={classes.mailus} style={{textAlign: 'center'}} >
                      Mail Us
                    </Typography>
                    </Paper>
                    </Grid>
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
