import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainDiv: {
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      paddingBottom: "20vh",
      backgroundBlendMode: "multiply",
      backgroundColor: "#666666",
    },
  },
  compare: {
    zIndex: "90",
  },
  text: {
    paddingTop: "5rem",
    paddingBottom: "1.7rem",
    fontWeight: "bold",
    color: "rgba(251, 91, 33, 1)",
    letterSpacing: "0.1rem",
    textAlign: "center",
    zIndex: "900",
    textShadow: "1px 3px 3px rgba(255, 255, 255, 1)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2rem",
      textAlign: "center",
      paddingTop: "2rem",
      paddingBottom: "0.4rem",
    },
  },
  selection: {
    textAlign: "center",
    color: "#000",
    zIndex: "90",
    marginBottom: "4rem",    
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",  
    },
  },
  btn: {
    backgroundColor: "#FD5A1F",
    color: "#fff",
    padding: "1.3rem 3.6rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginTop: "5rem",
    zIndex: "90",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#000",
      color: "#FD5A1F",
      transition: "all 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s",
      transition: "all 0.2s ease-out",
      boxShadow: "0px 5px 12px rgba(38, 38, 38, 0.5)",
      bottom: "-0.1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
      textAlign: "center",
      padding: "1rem 2rem",
      marginTop: "2rem",
    },
  },
  icon: {
    color: "rgba(255, 190, 157, 1)",
    marginTop: "1rem",
    zIndex: "90",
  },
  vs: {
    height: "4rem",
    width: "auto",
    zIndex: "90",
    marginTop: "-1rem",
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
      width: "auto",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "2rem",
      width: "auto",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  select: {
    backgroundColor: "rgba(255, 190, 157, 1)",
    color: "#fff",
    marginTop: "0.6rem",
    padding: "1.3rem 1.2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "-0.5rem",
    zIndex: "100",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      marginLeft: "1rem",
      marginTop: "1rem",
      padding: "0.3rem 1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0.1rem 1.3rem",
      fontSize: "10px",
    },
  },
  root: {
    padding: "1px 4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
    zIndex: "90",
    [theme.breakpoints.down("xs")]: {
      width: "89vw",
    },
    [theme.breakpoints.only("sm")]: {
      width: "59vw",
      marginTop:"0rem",
      marginLeft: "8rem",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    zIndex: "90",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding:"0rem !important"
    },
  },
  iconButton: {
    padding: 10,
    zIndex: "90",
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 1)",
  },
  divider: {
    height: 28,
    margin: 4,
    zIndex: "90",
  },
  slideshow: {
    zIndex: "-10",
  },
}));
