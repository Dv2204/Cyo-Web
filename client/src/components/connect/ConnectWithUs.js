import React from "react";
import { Grid, Typography, Paper, Chip } from "@material-ui/core";
import { useStyles } from "./ConnectWithUsStyles";
import mobile from "../../assets/mobile-01.png";
import bottom from "../../assets/bottom.png";

const ConnectWithUs = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={12} md={12} sm={12}>
      <Grid container xs={12} lg={12} md={12} sm={12}>
        <img src={bottom} alt="bottom" className={classes.bottom} />
        <Grid item xs={12} lg={7} md={7}>
          <Grid container justify="center">
            <Grid item xs={12} lg={8} md={8}>
              <Paper elevation={0} className={classes.paper} id="connect">
                <Grid container>
                  <Grid item xs={1} lg={1} md={1}>
                    <Paper elevation={0} className={classes.vertical}></Paper>
                  </Grid>
                  <Grid item xs={11} lg={11} md={11} sm={11}>
                    <Typography variant="h3" className={classes.heading}>
                      CONNECT WITH US
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" className={classes.body}>
                  CYO GYMS introduced in 2020-2021 when our team realized that
                  users didn’t want to or couldn’t pay yearly gym membership
                  fees upfront. There was intent since everyone tried several
                  fitness centers and local parks, but it wasn’t practical for
                  long. It was then that a simple idea was worked upon – working
                  out should work out. What started with a handful of gyms in
                  Rewari is now offering fitness enthusiasts across India the
                  flexibility to workout whenever, wherever, and however they
                  please. We have successfully digitized the Fitness Industry
                  and created an interconnected community of fitness centers /
                  gyms and fitness enthusiasts. Our new age functions have
                  transformed the fitness ecosystem. CYO GYMS is an alias for
                  comprehensive fitness solutions. We are successfully removing
                  friction and creating marketplace efficiencies through
                  technology and bringing in the age of Fittech in India.
                </Typography>
                <Chip className={classes.btn} label="Get the App!"></Chip>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          md={5}
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={mobile} alt="Mobile" className={classes.image} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConnectWithUs;
