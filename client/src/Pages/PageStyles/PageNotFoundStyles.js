import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  error: {
    width: "90vw",
    marginTop: "-20vh",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "68vh ",
    },
  },
  notfound: {
    color: "#FB5B21",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  btn: {
    background: "linear-gradient(to right bottom, #FB5B21, #000)",
    color: "#fff",
    border: "2px solid #000",
    marginTop: "0.6rem",
    padding: "1.1rem 2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: "0.8rem 1.3rem",
      padding: "0rem 1rem",
      border: "1px solid #000",
    },
  },
}));
