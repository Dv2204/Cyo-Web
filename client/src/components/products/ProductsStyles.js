import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Ubuntu",
    color: "#FFFEFE",
    letterSpacing: "0.1rem",
    marginTop: "7rem",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.5rem",
      textAlign:"center"
    },
  },
}));
