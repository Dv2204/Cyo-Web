import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "20vh",
    width: "20vh",
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: "50%",
    [theme.breakpoints.only("sm")]: {
      marginLeft: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1.5rem",
      height: "15vh",
      width: "15vh",
    },
  },
  text: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.95rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.1rem",
    },
  },
  paperimage: {
    height: "20vh",
    width: "20vh",
    borderRadius: "50%",
    [theme.breakpoints.down("xs")]: {
      height: "15vh",
      width: "15vh",
    },
  },
}));
