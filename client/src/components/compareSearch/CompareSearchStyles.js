import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(255, 190, 157, 1)",
    marginTop: "1rem",
  },
  select: {
    marginLeft: "-0.5rem",
    color: "#ffffff",
    backgroundColor: "rgba(255, 190, 157, 1)",
    borderRadius: "15px",
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
