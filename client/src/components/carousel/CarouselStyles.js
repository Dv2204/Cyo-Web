import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100vw",
    color: "#fff",
    margin: "0 5px",
    fontSize: "4em",
  },
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
    height: "70vh",
    marginTop: "5rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      height: "32vh !important",
      marginTop: "3rem",
      width: "99vw",
    },
  },
  images: {
    backgroundSize: "cover !important",
    height: "82vh",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "40vh !important",
    },
  },
}));
