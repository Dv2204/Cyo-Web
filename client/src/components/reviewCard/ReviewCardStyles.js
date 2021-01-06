import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "2rem",
    backgroundColor: "rgba(240, 240, 240, 1)",
    // height: "20vh",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 1rem",
    },
  },
  // text: {
  //   height: "5vh",
  // },
  cirpaper: {
    height: "13vh",
    width: "13vh",
    borderRadius: "50%",
    backgroundColor: "rgba(196, 196, 196, 1)",
    marginTop: "-1.5rem",
    marginLeft: "-1rem",
  },
  images: {
    height: "13vh",
    width: "13vh",
    borderRadius: "50%",
    marginTop: "-1rem",
    backgroundColor: "rgba(196, 196, 196, 1)",
  },
  name: {
    marginLeft: "1.5rem",
    color: "#000000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      marginLeft: "1rem",
    },
  },
}));
