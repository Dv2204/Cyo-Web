import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",

    height: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "22vh",
    },
  },
  body: {
    [theme.breakpoints.down("xs")]: {
      margin: "2vh 10vw",
      fontSize: "2vh",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2vh 12vw",
      fontSize: "2vh",
    },
  },
  head: {
    color: "#000",
    zIndex: "100",
    top: "20%",
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      top: "10%",
      fontSize: "9vw",
      margin: "0.5vh 4vw",
    },
    [theme.breakpoints.down("sm")]: {
      top: "14%",
      fontSize: "7vw",
    },
  },
}));
