import React from "react";
import { Paper, Grid, Chip } from "@material-ui/core";
import { useStyles } from "./CompareSearchStyles";
import PinDropIcon from "@material-ui/icons/PinDrop";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const CompareSearch = () => {
  const classes = useStyles();

  return (
    <Grid container md={12} lg={12} justify="center">
      <Grid item xs={2} lg={1} md={1} style={{ marginBottom: "2rem" }}>
        <PinDropIcon fontSize="large" className={classes.icon} />
      </Grid>
      <Grid item xs={6} lg={3} md={3}>
        <Chip
          className={classes.select}
          label="Gym Name"
          // onClick={() => clearFilter()}
        />
      </Grid>
      <Grid xs={12} lg={8} md={8}>
        <Paper className={classes.root} elevation={2}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            // onChange={(e) => setText(e.target.value)}
          />
          <IconButton
            className={classes.iconButton}
            // onClick={() => getGyms()}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CompareSearch;
