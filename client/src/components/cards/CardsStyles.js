import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      margin: "0px 20px",
      marginTop: "20px",
    },
  },
  paperNormal: {
    marginBottom: "0.5rem",
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.5)",
      bottom: "-1rem",
      border: "1.4px solid #cccccc",
      cursor: "pointer",
    },
  },
  top: {
    paddingTop: "0.2rem",
  },
  location: {
    fontSize: "11px",
    color: "grey",
    padding: "10px",
  },
  title: {
    fontWeight: "bold",
  },
  body: {
    fontSize: "12px",
    paddingLeft: "19px",
    paddingRight: "19px",
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    paddingLeft: "10px",
  },
  rating: {
    fontSize: "8px",
    color: "#fff",
    backgroundColor: "#11C62E",
    marginLeft: "0.7rem",
  },
  ratingIcon: {
    fontSize: "10px",
    color: "#fff",
    backgroundColor: "#11C62E",
    float: "right",
  },
  count: {
    fontSize: "10px",
    color: "grey",
    backgroundColor: "#fff",
    paddingLeft: "0.3rem",
  },
  details: {
    fontSize: "18px",
    color: "grey",
    padding: "10px",
    textDecoration: "none",
    "&:hover": {
      color: "#000",
    },
  },
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
  avatarimage: {
    width: "100%",
    height: "20vh",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },
}));
