import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: "0.5rem",
    marginLeft: "14rem",
    fontWeight: "bold",
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      fontSize:"2.5rem"
    },
  },
  headingicon: {
    marginLeft: "15rem",
    marginTop: "5rem",
    marginBottom: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
    },
  },
  facheading: {
    textAlign: "center",
    marginTop: "5.4rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
    },
  },
  detailsheading: {
    marginTop: "5.4rem",
  },
  body:{
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 2rem !important",
    },
  },
  circle:{
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10vh !important",
    },
  }
}));
