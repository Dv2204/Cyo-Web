import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "20vh",
    width: "20vh",
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.5rem",
    },
  },
  text: {
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));
