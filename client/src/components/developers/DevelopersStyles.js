import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  profile: {
    width: "15vw",
    height: "15vw",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "55vw",
      height: "55vw",
      alignSelf: "center",
    },
    [theme.breakpoints.down("md")]: {
      width: "15vw",
      height: "15vw",
      margin: "0px 5vw",
    },
  },
  name: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  desig: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  paper: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    [theme.breakpoints.down("sm")]: {
      height: "20vh",
      width: "100vw",
    },
  },
}));
