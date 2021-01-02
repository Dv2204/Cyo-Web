import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#FFFEFE",
    letterSpacing: "0.1rem",
    marginTop: "7rem",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.1rem",
      marginLeft: '1.4rem'
    },
  },
}));
