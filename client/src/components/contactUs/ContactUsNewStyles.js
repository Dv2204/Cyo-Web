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
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.3rem",
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.4rem",
      fontWeight: "normal",
      textAlign: "center",
      marginTop: "1rem",
    },
  },
  headingbutton: {
    backgroundColor: "#fff",
    padding: "0.5rem 2.3rem",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#fff",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem 1.2rem",
      marginTop: "1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: "0.2rem 1.5rem",
      marginTop: "2rem",
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
      marginLeft: "2rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "16rem",
      fontSize: "1.3rem",
    },
  },
  mac: {
    width: "10vw !important",
    marginLeft: "5vw",
    padding: "12px !important",
    [theme.breakpoints.down("xs")]: {
      width: "24vw !important",
    },
    [theme.breakpoints.only("sm")]: {
      width: "20vw !important",
      marginTop: "0.2rem",
    },
  },
  google: {
    width: "12vw !important",
    marginLeft: "5vw",
    [theme.breakpoints.down("xs")]: {
      width: "25vw !important",
      marginTop: "0.4rem",
      marginLeft: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: "29vw !important",
      marginLeft: "8rem",
    },
  },
  divider1: {
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    height: "29vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
  },
  divider: {
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    height: "29vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
  },
  pagestop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
    textDecoration: "none !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "1.2rem",
      marginLeft: "9rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      justifyContent: "center",
      marginLeft:'0'
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      justifyContent: "center",
      marginLeft:'0'
    },
  },
  pagessupport: {
    color: "#fff",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "9.35rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      justifyContent: "center",
      marginLeft:'0'
    },
  },
  pagestwotop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "2rem",
    marginRight: "3rem",
    marginBottom: "0.4rem",
    textDecoration: "none !important",
    textDecorationColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginTop: "0.1rem",
      marginLeft: "6rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      marginTop: "0.4rem",
      justifyContent: "center",
      marginLeft:'2.5rem'
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      justifyContent: "center",
      marginLeft:'0'
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      marginTop: "0.4rem",
      justifyContent: "center",
      marginLeft:'0'
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center",
      justifyContent: "center",
      marginLeft:'0'
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
    [theme.breakpoints.only("sm")]: {
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.3rem",
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
      marginLeft: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.3rem",
      marginTop: "-4rem",
      marginLeft: "0.75rem",
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
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.3rem",
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
  follow: {
    marginTop: "2rem",
    marginLeft: "3rem",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
      marginBottom: "2rem",
    },
  },
  textfooter: {
    color: "#c4c4c4",
    textAlign: "center",
    fontSize: '1rem',
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.9rem",
    },
  },
  footerlink: {
    textDecoration: "none",
    color: "#c4c4c4",
    cursor: "pointer",
    "&hover": {
      color: "#fff",
    },
  },
  nonunderlinelink: {
    textDecoration: "none",
    "&:focus": {
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
    "&:visited": {
      textDecoration: "none",
    },
    "&:link": {
      textDecoration: "none",
    },
    "&:active": {
      textDecoration: "none",
    },
  },
}));
