import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Chip } from "@material-ui/core";
import mainimage from "../../assets/newMain.png";
import { useStyles } from "./MainStyles";
// import Carouselmain from './carouselmain';

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={12}>
        <Grid container xs={12} md={12} className={classes.row}>
          <Grid item xs={7} md={8}>
            <Grid container xs={12} lg={12} md={12} justify="center">
              <Grid item xs={12} lg={9} md={9} sm={10}>
                <Paper elevation={3} className={classes.paper} justify="center">
                  <Typography variant="h2" className={classes.text}>
                    Starve your <br />
                    Distractions <br />
                    Feed your <br />
                    Focus
                  </Typography>
                  {/* <Carouselmain/> */}
                  <Chip className={classes.btn} label="Get the App!"></Chip>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} lg={4} md={4} justify="center">
            <img src={mainimage} alt="Profile" className={classes.image} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
