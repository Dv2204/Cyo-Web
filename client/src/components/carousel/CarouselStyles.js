import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    fontWeight: "bold",
    color: "#FB5B21",
    letterSpacing: "0.1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.1rem",
      paddingTop: "4rem",
      marginLeft: "1.8rem",
    },
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "82vh",
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "32vh !important",
      marginLeft: "1.4rem",
    },
  },
  images: {
    backgroundSize: "cover",
    height: "82vh",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "40vh !important",
    },
  },
}));
