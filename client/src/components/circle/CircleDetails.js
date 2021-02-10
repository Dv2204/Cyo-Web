import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./CircleDetailsStyles";

const CircleDetails = ({ machines }) => {
  const classes = useStyles();
  console.log(machines);
  return (
    <>
      <Grid item lg={8} md={8}>
        <Grid container lg={12} sm={12} md={12} justify="space-around">
          {machines?.map((item, index) => (
            <Grid item lg={2} sm={4} md={2}>
              <Paper elevation={2} className={classes.paper}></Paper>
              <Typography className={classes.text}>
                {item.machine.name} 
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CircleDetails;
