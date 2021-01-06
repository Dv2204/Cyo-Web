import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  row: {
    background: "linear-gradient(to right bottom, #FED469, #ED0891)",
    // height: '100vh',
    width: "100vw",
    overflowX: "hidden",
  },
  image: {
    // width: theme.spacing(40),
    //  height: theme.spacing(70),
    height: "90vh",
    width: "auto",
    paddingTop: "3.2rem",
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
      width: "auto",
      paddingLeft: "0.5rem",
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
      marginBottom: "2rem"
    },
  },
  text: {
    fontWeight: "bold",
    paddingLeft: "4.8rem",
    paddingTop: "2.7rem",
    letterSpacing: "0.1rem",
    fontSize: "4.2rem",
    //textAlign: 'center'
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
      padding: "1.8rem 1rem 0rem 1rem",
    },
  },
  btn: {
    backgroundColor: "#000",
    color: "#fff",
    marginTop: "0.6rem",
    padding: "1.1rem 2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "4.6rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem",
      margin: "1rem 1.5rem",
      padding: "0rem 1rem",
    },
  },
}));
