import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  row: {
    height: "70vh",
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
    },
  },
  heading: {
    color: "#fff",
    paddingTop: "10vh",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.2rem",
      paddingBottom: "1vh",
      height: "3rem",
    },
  },
  link: {
    paddingTop: "2vh",
    color: "#959595",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  mailbox: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 2rem",
      width: "70vw",
      height: "30vh",
      marginBottom: "10vh",
      fontSize: "0.5rem",
    },
  },
  mailus: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  body: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem !important",
      width: "15rem !important",
    },
  },
  about: {
    color: "#b2b2b2",
    padding: "2vh",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      textAlign: "justify",
    },
  },
  mac: {
    width: "10vw !important",
    marginLeft: "5vw",
    padding: "12px !important",
    [theme.breakpoints.down("xs")]: {
      width: "20vw !important",
      padding: "8px 12vw !important",
    },
  },
  google: {
    width: "12vw !important",
    marginLeft: "5vw",
    [theme.breakpoints.down("xs")]: {
      width: "24vw !important",
    },
  },
  footerlink: {
    textDecoration: "none",
    color: "#959595",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.92rem",
    },
  },
  privacy: {
    padding: "2vh",
    textDecoration: "none",
    color: "rgba(251, 217, 203, 1)",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.92rem",
    },
  },
}));
