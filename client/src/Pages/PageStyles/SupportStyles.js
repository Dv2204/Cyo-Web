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
      fontSize: "1.6rem",
      marginLeft: "1rem",
    },
  },
  headingbody: {
    color: "#fff",
    marginLeft: "6rem",
    marginTop: "1rem",
    fontWeight: "bold",
    paddingBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "1rem",
    },
  },
  paper: {
    borderRadius: "20px",
    marginTop: "5.4rem",
    marginBottom: "5rem",
    border: "1.4px #FB5B21 solid",
  },
  paperhead: {
    marginTop: "2.4rem",
    textAlign: "center",
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
  },
  required: {
    color: "red",
    letterSpacing: "0.09rem",
  },
}));
