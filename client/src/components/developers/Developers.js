import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";

import { useStyles } from "./DevelopersStyles";

const Developers = ({ name, skill, pic }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        xs={12}
        lg={12}
        md={12}
        justify="center"
        style={{ margin: "7vh 0vh ", alignContent: "center" }}
      >
        <Grid justify="center">
          <Avatar
            src={pic}
            alt="profile"
            className={classes.profile}
            style={{ alignContent: "center" }}
          />
          <Typography
            variant="h5"  className={classes.name}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {name}
          </Typography>
          <Typography variant="h6"  className={classes.desig} style={{ textAlign: "center" }}>
            {skill}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Developers;
