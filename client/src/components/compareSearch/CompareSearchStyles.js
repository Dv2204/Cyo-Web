import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(255, 190, 157, 1)",
    marginTop: "1rem",
  },
  select: {
    backgroundColor: "rgba(255, 190, 157, 1)",
    color: "#fff",
    marginTop: "0.6rem",
    padding: "1.3rem 1.2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "-0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      marginLeft: "3.5rem",
      marginTop: "1rem",
      padding: "0.3rem 1.3rem",
    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "94vw",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "rgba(0, 0, 0, 0.98)",
  },
  iconButton: {
    padding: 10,
    color: "rgba(0, 0, 0, 1)",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
