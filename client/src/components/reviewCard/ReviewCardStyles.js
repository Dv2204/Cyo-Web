import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "2rem",
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 1rem",
    },
  },
  cirpaper: {
    height: "13vh",
    width: "13vh",
    borderRadius: "50%",
    backgroundColor: "rgba(196, 196, 196, 1)",
    marginTop: "-1.5rem",
    marginLeft: "-1rem",
    [theme.breakpoints.down("xs")]: {
      height: "10vh",
      width: "10vh",
    },
  },
  images: {
    height: "13vh",
    width: "13vh",
    borderRadius: "50%",
    marginTop: "-1rem",
    backgroundColor: "rgba(196, 196, 196, 1)",
    [theme.breakpoints.down("xs")]: {
      height: "10vh",
      width: "10vh",
    },
  },
  name: {
    marginLeft: "1.5rem",
    color: "#000000",
    fontSize: '1rem',
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      marginLeft: "1rem",
    },
  },
  text: {
    fontSize: '0.9rem',
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));
