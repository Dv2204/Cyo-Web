import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  row: {
    height: "80vh",
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  heading: {
    color: "#fff",
    paddingTop: "10vh",
    textAlign: "center",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
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
      height: "60vh",
      marginBottom: "10vh",
      fontSize: "0.5rem",
    },
  },
  mailus: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      paddingTop: "1rem",
    },
  },
  body: {
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem !important",
      width: "15rem !important",
    },
  },
  about: {
    color: "#b2b2b2",
    padding: "2vh",
    marginTop: "3rem",
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
    textDecoration: "none",
    color: "rgba(180, 180, 180, 1)",
    cursor: "pointer",
    backgroundColor: "#000",
    padding: "1rem 1.1rem",
    fontSize: "16px",
    letterSpacing: "0.1rem",
    textAlign: "center",
    marginLeft: "11.4rem",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
      padding: "3px 0.08rem",
      marginLeft: "7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
      padding: "3px 0.08rem",
      marginLeft: "7rem",
    },
  },
  required: {
    color: "red",
    letterSpacing: "0.09rem",
    marginLeft: "2rem",
  },
}));
