import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "5rem",
    paddingBottom: "1.7rem",
    fontWeight: "bold",
    color: "rgba(233, 62, 127, 1)",
    letterSpacing: "0.1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  name: {
    paddingTop: "2.5rem",
    paddingBottom: "1.7rem",
    fontWeight: "bold",
    color: "#000",
    letterSpacing: "0.1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  textheading: {
    paddingTop: "2.8rem",
    paddingBottom: "1.4rem",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  textbody: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  textbodylast: {
    paddingBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  link: {
    paddingTop: "2vh",
    color: "#959595",
    cursor: "pointer",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));