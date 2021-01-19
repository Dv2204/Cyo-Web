import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bgimage: {
    height: "30vh",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "5vh",
      backgroundColor: "rgba(0,0,0,1)",
    },
  },
  image: {
    height: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
  },
  heading: {
    color: "#fff",
    marginTop: "-23rem",
    marginLeft: "6rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7rem",
      marginLeft: "1rem",
    },
  },
  headingbody: {
    color: "#fff",
    marginLeft: "6rem",
    marginTop: "1rem",
    fontWeight: "bold",
    marginBottom: "18rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "1rem",
      paddingBottom: "1rem",
    },
  },
  paper: {
    borderRadius: "20px",
    marginTop: "10rem",
    marginBottom: "5rem",
    border: "1.4px #000 solid",
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.5rem",
      marginTop: "4rem",
    },
  },
  paperhead: {
    marginTop: "2.4rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  btn: {
    padding: "0.7rem 2.9rem",
    backgroundColor: "#FB5B21",
    color: "#fff",
    marginBottom: "2rem",
    marginTop: "3.4rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#FB5B21",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.4rem 1.7rem",
      fontSize: "0.7rem",
      marginLeft: "0.4rem",
    },
  },
  required: {
    color: "red",
    letterSpacing: "0.09rem",
  },
  textfield: {
    marginLeft: "2rem",
    width: "20vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "0.4rem",
      width: "100%",
    },
  },
  textfieldtwo: {
    marginLeft: "0.5rem",
    width: "20vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "0.4rem",
      width: "100%",
    },
  },
  textfieldtitle: {
    marginLeft: "1rem",
    width: "40vw",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "0.4rem",
      width: "100%",
      marginTop: "0.2rem",
    },
  },
  textfieldmsg: {
    paddingBottom: "5vh",
    width: "40vw",
    marginTop: "4rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "0.4rem",
      width: "100%",
    },
  },
}));
