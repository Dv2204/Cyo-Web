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
    paddingTop: "9rem",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.65rem",
      paddingTop: "4rem",
    },
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1.5rem",
    marginBottom: "8rem",
    [theme.breakpoints.down("xs")]: {
      height: "32vh !important",
      marginTop: "3rem",
      width: "99vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "34vh !important",
      marginTop: "5rem",
      width: "99vw",
    },
  },
  images: {
    [theme.breakpoints.down("xs")]: {
      height: "40vh !important",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
  },
  imagesmaincompare: {
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat",
    height: "82vh",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "40vh !important",
    },
  },
}));
