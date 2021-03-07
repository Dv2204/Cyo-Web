import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    height: "38vh",
    marginTop: "6rem",
    borderRadius: "13px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 50px",
      marginTop: "20px",
      height: "28vh",
    },
    [theme.breakpoints.only("sm")]: {
      margin: "0px 20px",
      marginTop: "20px",
    },
    "&:hover": {
      transition: "all 0.2s ease-out",
      boxShadow: "0px 10px 12px rgba(38, 38, 38, 0.7)",
      bottom: "-1rem",
      border: "1.4px solid #cccccc",
      cursor: "pointer",
    },
  },
  title: {
    color: "rgba(145, 145, 145, 1)",
    letterSpacing: "0.2rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2rem",
      fontSize: "1.3rem",
    },
  },
  text: {
    color: "rgba(145, 145, 145, 1)",
    marginLeft: "1.1rem",
    fontSize: "1.3rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2rem",
      fontSize: "0.8rem",
    },
  },
  mrp: {
    color: "rgba(145, 145, 145, 1)",
    marginLeft: "1.2rem",
    fontSize: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "2.1rem",
      fontSize: "0.6rem",
    },
  },
  icon: {
    fontSize: "1.7rem",
    marginTop: "0.6rem",
    marginRight: "0.5rem",
  },
  images: {
    height: "38vh",
    width: "100%",
    borderRadius: "13px",
    BackgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "28vh",
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
  filter: {
    color: "rgba(139, 139, 139, 1)",
    textAlign: "center",
    marginTop: "0.4rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.2vw",
      marginBottom: "2rem",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.1rem",
      marginTop: "0.75rem",
    },
  },
  hover: {
    fontSize: "13px",
    color: "#fff",
    padding: "0.2rem 0.5rem",
    backgroundColor: "#aaaaaa",
    position: "absolute",
    justify: "flex-end",
    letterSpacing: "0.05rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  categorycol: {
    marginLeft: "2rem",
    marginTop: "0.45rem",
    marginRight: "-1.7rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: '1rem',
      marginRight: '1rem'
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "1.4rem",
      marginRight: "-2.4rem",
    },
  },
}));
