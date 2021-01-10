import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  headingone: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "2rem",
    fontSize: "2.4rem",
  },
  headingtwo: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  headingbutton: {
    backgroundColor: "#fff",
    padding: "0.5rem 2.3rem",
    textAlign: "center",
  },
  headingbuttontext: {
    textAlign: "center",
    color: "#000",
  },
  download: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "12rem",
    marginBottom: "1rem",
  },
  mac: {
    width: "10vw !important",
    marginLeft: "5vw",
    padding: "12px !important",
    [theme.breakpoints.down("xs")]: {
      width: "20vw !important",
      padding: "8px 12vw !important",
    },
  },
  google: {
    width: "12vw !important",
    marginLeft: "5vw",
    [theme.breakpoints.down("xs")]: {
      width: "24vw !important",
    },
  },
  divider: {
    backgroundColor: "#fff",
    marginTop: "1.5rem",
    height: "29vh",
  },
  pagestop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
  },
  pages: {
    color: "#fff",
    marginLeft: "4rem",
    marginBottom: "0.4rem",
  },
  pagestwotop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "2rem",
    marginRight: "3rem",
    marginBottom: "0.4rem",
  },
  pagestwo: {
    color: "#fff",
    marginLeft: "2rem",
    marginRight: "3rem",
    marginBottom: "0.4rem",
  },
  pagesthreetop: {
    color: "#fff",
    marginTop: "2.5rem",
    marginLeft: "1.5rem",
    marginBottom: "0.4rem",
  },
  pagesthree: {
    color: "#fff",
    marginLeft: "1.5rem",
    marginBottom: "0.4rem",
  },
  paper: {
    borderRadius: "20px",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  paperhead: {
    marginTop: "1.5rem",
    textAlign: "center",
  },
  dividersec: {
    marginTop: "2.5rem",
    marginLeft: "1rem",
    backgroundColor: "#fff",
    height: "54vh",
    marginBottom: "2.5rem",
  },
  icons: {
    color: "#fff",
    fontSize: "3rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    "&:hover": {
      cursor: "pointer",
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
  },
  btn: {
    padding: "0.5rem 2.5rem",
    border: "1px solid #000",
    marginBottom: "2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  textfooter: {
    color: "#fff",
    textAlign: "center",
  },
  footerlink: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  },
}));
