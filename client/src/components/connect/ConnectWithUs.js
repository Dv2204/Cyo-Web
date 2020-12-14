import React from 'react';
import {Grid , Typography, Avatar, Paper} from "@material-ui/core";
import { useStyles } from "./ConnectWithUsStyles";
import mobile from "../../assets/mobile.png";
// import bottom from "../../assets/bottom.png";


const ConnectWithUs = () => {
    const classes = useStyles();
    return(
        <Grid item lg={12} md={12}>
            <Grid container lg={12} md={12}>
                <Grid item lg={7} md={7}>
                    <Grid container justify="center">
                        <Grid item lg={8} md={8}>
                            <Paper elevation={0} className={classes.paper}>
                            <Typography variant="h3" className={classes.heading}>
                            CONNECT WITH US
                            </Typography>
                                <Typography variant="body1" className={classes.body}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Dui ultricies accumsan et viverra. Arcu auctor maecenas 
                                lectus arcu tortor. Gravida diam sit convallis sagittis. 
                                Libero tempus phasellus fames nisl in vestibulum. Laoreet 
                                lacus volutpat, tincidunt maecenas. Scelerisque odio rutrum 
                                mi netus. Nulla non mauris, adipiscing nisi. Potenti id pretium
                                 nisl porttitor. Aenean euismod tortor fames odio amet interdum 
                                 quam et, ornare. Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Dui ultricies accumsan et viverra. Arcu auctor
                                  maecenas lectus arcu tortor. Gravida diam sit convallis sagittis.
                                   Libero tempus phasellus fames nisl in vestibulum. Aenean euismod
                                    tortor fames odio amet interdum quam et, ornare.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={5} md={5}>
                <Avatar src={mobile} alt="Mobile" variant={"square"} className={classes.image} / >
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ConnectWithUs;