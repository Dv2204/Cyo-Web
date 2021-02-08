import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    height: "20vh",
    width: "20vh",
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderRadius: "50%",
  },
  text: {
    textAlign: 'center',
    letterSpacing: "0.1rem",
  },
}));
