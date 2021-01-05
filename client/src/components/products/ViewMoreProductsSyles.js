import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "1.7rem",
    fontWeight: "normal",
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.55)",
    marginBottom: "5rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));
