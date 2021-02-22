import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: "0.5rem",
    marginLeft: "14rem",
    fontWeight: "bold",
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      fontSize: "1.4rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2rem",
      fontSize: "2rem",
    },
  },
  headingicon: {
    marginLeft: "15rem",
    marginTop: "5rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      height: "6vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "5rem",
      height: "10vh",
    },
  },
  facheading: {
    textAlign: "center",
    marginTop: "5.4rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "7rem",
      fontSize: "1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "40vw",
      fontSize: "1.6rem",
    },
  },
  detailsheading: {
    marginTop: "5.4rem",
    textAlign:'center',
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.6rem",
    },
  },
  body: {
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 2rem !important",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0.1rem 9rem !important",
      fontSize:'1.2rem'
    },
  },
  circle: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10vh !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "20vh !important",
    },
  },
}));
