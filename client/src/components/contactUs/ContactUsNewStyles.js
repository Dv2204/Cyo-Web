import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headingone: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "2rem",
    fontSize: "2.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7rem",
      textAlign: "center",
    },
  },
  headingtwo: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      fontWeight: "normal",
      textAlign: "center",
      marginTop: "1rem",
    },
  },
  headingbutton: {
    backgroundColor: "#fff",
    padding: "0.5rem 2.3rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1.5rem",
      marginTop: "1.3rem",
    },
  },
  headingbuttontext: {
    textAlign: "center",
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem",
    },
  },
  download: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "12rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1rem",
      fontSize: "1.2rem",
    },
  },
  mac: {
    width: "10vw !important",
    marginLeft: "5vw",
    padding: "12px !important",
    [theme.breakpoints.down("xs")]: {
      width: "24vw !important",
      marginLeft: "-3rem",
    },
  },
  google: {
    width: "12vw !important",
    marginLeft: "5vw",
    [theme.breakpoints.down("xs")]: {
      width: "25vw !important",
      marginTop: "0.4rem",
    },
  },
  divider: {
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    height: "29vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  pagestop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "1.2rem",
      marginLeft: "9rem",
    },
  },
  pages: {
    color: "#fff",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "6.96rem",
    },
  },
  pagessupport: {
    color: "#fff",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "9rem",
    },
  },
  pagestwotop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "2rem",
    marginRight: "3rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "0.1rem",
      marginLeft: "6rem",
    },
  },
  pagestwo: {
    color: "#fff",
    marginLeft: "2rem",
    marginRight: "3rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "0.1rem",
      marginLeft: "6rem",
    },
  },
  pagesthreetop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "1.5rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "0.1rem",
      marginLeft: "8rem",
    },
  },
  pagesthree: {
    color: "#fff",
    marginLeft: "1.5rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "8.9rem",
    },
  },
  paper: {
    borderRadius: "20px",
    marginTop: "3rem",
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  paperhead: {
    marginTop: "1.5rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  body: {
    margin: "4vh 0",
    width: "34vw",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  dividersec: {
    marginTop: "2.5rem",
    marginLeft: "1rem",
    backgroundColor: "#fff",
    height: "54vh",
    marginBottom: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icons: {
    color: "#fff",
    fontSize: "3rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9rem",
      marginTop: "-4rem",
    },
  },
  iconsone: {
    color: "#fff",
    fontSize: "3rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9rem",
      marginTop: "-4rem",
      marginLeft: "0.9rem",
    },
  },
  iconstwo: {
    color: "#fff",
    fontSize: "3rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      marginBottom: "1.5rem",
    },
  },
  footerPaper: {
    backgroundColor: "#3F3F3F",
    paddingTop: "2vh",
    paddingBottom: "2vh",
  },
  required: {
    color: "red",
    letterSpacing: "0.09rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  btn: {
    padding: "0.5rem 2.5rem",
    border: "1px solid #000",
    marginBottom: "2rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 0.4rem",
      marginTop: "1rem",
      fontSize: "0.8rem",
    },
  },
  textfooter: {
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.95rem",
    },
  },
  footerlink: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  },
}));
