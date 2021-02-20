import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: "2rem",
  },
  body: {
    marginTop: "1rem",
  },
  line: {
    marginTop: "1rem",
  },
  text: {
    paddingTop: "5rem",
    paddingBottom: "2.7rem",
    fontWeight: "bold",
    color: "#F3679C",
    letterSpacing: "0.1rem",
    textAlign: "center",
    textShadow: "1px 3px 3px rgba(255, 255, 255, 1)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  },
  gymname: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  texthead: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "3.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: 0,
    },
  },
}));
