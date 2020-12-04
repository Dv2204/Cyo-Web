import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography, Container} from '@material-ui/core';
import main from "../../assets/main.png";
import { useStyles } from "./MainStyles";

const Main = () => {
    const classes = useStyles();
    return(
        <>
        <Grid item lg={12} md={12}>
           <Grid container lg={12} md={12} className={classes.row}>
               <Grid item lg={8} md={8}>
                    Left
               </Grid>
               <Grid item lg={4} md={4}>
                    Right
               </Grid>
           </Grid>          
        </Grid>
        </>
    )
}

export default Main;