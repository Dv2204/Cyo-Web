import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  row: {
    background: "linear-gradient(295.19deg, #FFCE4F -6.02%, #FF0099 113.53%)",
    width: "100vw",
    overflowX: "hidden",
  },
  image: {
    height: "90vh",
    width: "auto",
    paddingTop: "3.2rem",
    [theme.breakpoints.down("xs")]: {
      height: "29vh",
      width: "auto",
      paddingLeft: "0.2rem ",
    },
    [theme.breakpoints.only("sm")]: {
      height: "70vh",
      width: "auto",
      paddingLeft: "0.2rem ",
    },
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    marginTop: "6.2rem",
    height: "72vh",
    borderRadius: "6%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1.8rem",
      height: "30vh ",
      marginTop: "3rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "60vh ",
      marginBottom: "5rem",
      marginTop: "2rem",
    },
  },
  text: {
    fontWeight: "bold",
    paddingLeft: "4.8rem",
    paddingTop: "2.7rem",
    letterSpacing: "0.1rem",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      padding: "1.8rem 1rem 0rem 1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.8rem",
      padding: "1.8rem 1rem 0rem 2rem",
    },
  },
  btn: {
    backgroundColor: "#000",
    color: "#fff",
    marginTop: "1rem",
    padding: "1.1rem 2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "4.6rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.55rem",
      margin: "1rem 0.6rem",
      padding: "0 0.2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.9rem",
      margin: "1.5rem 1.5rem",
      padding: "0rem 1rem",
    },
  },
}));
