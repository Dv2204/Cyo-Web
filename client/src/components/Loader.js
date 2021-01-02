import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loadersize: {
    size: "70",
    [theme.breakpoints.down("xs")]: {
      size: "30",
    },
  },
}));

const Loader = ({ color }) => {
  const classes = useStyles();
  return (
    <div className="full-page-loader" style={{ alignSelf: "center" }}>
      <BeatLoader
        className={classes.loadersize}
        color={color}
        laoading={true}
      />
    </div>
  );
};

export default Loader;
