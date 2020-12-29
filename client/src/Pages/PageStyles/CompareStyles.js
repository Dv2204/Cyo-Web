import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "5rem",
    paddingBottom: "1.7rem",
    fontWeight: "bold",
    color: "rgba(251, 91, 33, 1)",
    letterSpacing: "0.1rem",
    textAlign: "center",
    textShadow: "1px 3px 3px rgba(255, 255, 255, 1)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      textAlign: "center",
    },
  },
  selection: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: "10px",
  },
  btn: {
    backgroundColor: "rgba(255, 147, 108, 1)",
    color: "#fff",
    padding: "1.3rem 2.2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginTop: "3rem",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  // compare: {
  //     backgroundImage: '../../assets/compare.jpg'
  // }
}));
