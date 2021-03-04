import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useStyles } from "./MoreStyles";
import { Link } from "react-router-dom";
const ViewMore = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      lg={12}
      md={12}
      justify="center"
      style={{ marginTop: "2rem" }}
    >
      <Grid item lg={2} md={2}>
        <Typography>
          <Link
            to="/gyms"
            className={classes.text}
            style={{ fontFamily: "Poppins" }}
          >
            View More <DoubleArrowIcon className={classes.arrow} />
          </Link>{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ViewMore;
