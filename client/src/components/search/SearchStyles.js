import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(233, 62, 127, 1)",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "3rem",
    },
  },
  select: {
    backgroundColor: "#909090",
    color: "#fff",
    marginTop: "0.6rem",
    padding: "1.3rem 2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "-0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "3.5rem",
      marginTop: "1rem",
      padding: "0.6rem 1.6rem",
    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
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
