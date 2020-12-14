import React from 'react';
import {Grid , Typography, Avatar} from "@material-ui/core";
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
                        <Grid item lg={10} md={10}>

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