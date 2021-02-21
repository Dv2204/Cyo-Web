import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  profile: {
    width: "15vw",
    height: "15vw",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "27.5vw !important",
      width: "45vw !important",
      height: "45vw !important",
      alignSelf: "center !important",
    },
    [theme.breakpoints.only("sm")]: {
      width: "19vw",
      height: "19vw",
      marginLeft: "40vw !important",
    },
    [theme.breakpoints.only("md")]: {
      width: "15vw",
      height: "15vw",
      margin: "0px 5vw",
    },
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.2rem",
    },
  },
  desig: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
    },
  },
  paper: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
      width: "100vw",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      width: "100vw",
    },
  },
}));
