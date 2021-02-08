import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    marginTop: "10rem",
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 1rem",
    },
  },
  heading: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.5rem",
    },
  },
  vertical: {
    width: "0.8vw",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    height: "8vh",
    [theme.breakpoints.down("xs")]: {
      height: "5vh",
      marginLeft: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "8vh",
      marginLeft: "2rem",
    },
  },
  body: {
    marginTop: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: "10px 20px 0px 20px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
      margin: "20px 30px 0px 30px",
    },
  },
  image: {
    height: "75vh",
    width: "auto",
    paddingTop: "7rem",
    paddingBottom: "5rem",
    zIndex: "100",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      paddingTop: "0rem",
    },
  },
  bottom: {
    position: "absolute",
    zIndex: "0",
    width: "100%",
    marginTop: "38vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "none",
    },
  },
  btn: {
    backgroundColor: "#000",
    color: "#fff",
    marginTop: "0.9rem",
    padding: "1.1rem 2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      marginLeft: "20px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "15px",
      marginLeft: "20px",
    },
  },
}));
