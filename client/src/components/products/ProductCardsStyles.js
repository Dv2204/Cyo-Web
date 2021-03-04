import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#3F3F3F",
    height: "38vh",
    marginTop: "6rem",
    borderRadius: "13px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 50px",
      marginTop: "20px",
      height: "28vh",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0px 20px",
      marginTop: "20px",
    },
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.7)",
      bottom: "-1rem",
      border: "1.4px solid #cccccc",
      cursor: "pointer",
    },
  },
  title: {
    fontFamily: "Poppins",
    color: "#FFF",
    letterSpacing: "0.2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      fontSize: "1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2rem",
      fontSize: "1.3rem",
    },
  },
  text: {
    fontFamily: "Poppins",
    color: "#FFF",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2rem",
      fontSize: "0.8rem",
    },
  },
  mrp: {
    fontFamily: "Poppins",
    color: "#fff",
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2.1rem",
      fontSize: "0.6rem",
    },
  },
  icon: {
    fontSize: "1.7rem",
    marginTop: "0.6rem",
    marginRight: "0.5rem",
  },
  images: {
    height: "38vh",
    width: "100%",
    borderRadius: "13px",
    BackgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "28vh",
    },
  },
}));
