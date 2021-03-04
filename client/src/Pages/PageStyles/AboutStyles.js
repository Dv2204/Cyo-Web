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
    fontFamily: "Poppins",
    fontSize: "2.6vh",
    [theme.breakpoints.down("xs")]: {
      margin: "2vh 12vw",
      fontSize: "2vh",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "2vh 12vw",
      fontSize: "2.45vh",
    },
  },
  head: {
    fontFamily: "Ubuntu",
    color: "#000",
    zIndex: "100",
    top: "20%",
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      top: "14%",
      fontSize: "7vw",
    },
    [theme.breakpoints.only("sm")]: {
      top: "19%",
      fontSize: "5vw",
    },
  },
}));
