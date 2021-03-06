import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      margin: "0px 20px",
      marginTop: "20px",
    },
  },
  searchdiv: {
    [theme.breakpoints.down("xs")]: {
      margin: "0px !important",
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
    [theme.breakpoints.only("sm")]: {
      marginLeft: "20px",
    },
  },
  top: {
    paddingTop: "0.2rem",
  },
  location: {
    fontSize: "13px",
    color: "grey",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11.5px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "11.5px",
    },
  },
  locationicon: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "14px",
    },
  },
  title: {
    fontWeight: "bold",
    marginLeft: "0.5rem",
    [theme.breakpoints.only("sm")]: {
      fontSize: "18px",
      marginLeft: '0.14rem'
    },
  },
  body: {
    fontSize: "14px",
    paddingLeft: "19px",
    paddingRight: "19px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      letterSpacing: "0.1rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "12px",
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    paddingLeft: "10px",
    [theme.breakpoints.only("sm")]: {
      width: "2rem",
      height: "2rem",
    },
  },
  rating: {
    fontSize: "10px",
    color: "#fff",
    backgroundColor: "#11C62E",
    width: "1.6vw",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "9vw",
      padding: "3px 0 3px 0",
      marginBottom: "5px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "3.3vw",
      padding: "2px 0 2px 0",
      marginBottom: "15px",
    },
  },
  tick: {
    [theme.breakpoints.only("sm")]: {
      display: "none !important",
    },
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  TickStyle: {},
  details: {
    fontSize: "18px",
    color: "grey",
    padding: "10px",
    textDecoration: "none",
    "&:hover": {
      color: "#000",
    },
  },
  detailschip: {
    color: "#fff",
    backgroundColor: "#3D3D3D",
    padding: "0 0.17rem",
    marginLeft: "0.6rem",
    textDecoration: "none",
    margin: "0.5rem 0",
    fontSize: "12px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      padding: "0 0.13rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "10.5px",
      padding: "0 0.1rem",
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
    marginTop: "0.2rem",
    padding: "1.3rem 1.2rem",
    fontSize: "19px",
    letterSpacing: "0.1rem",
    marginLeft: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      marginLeft: "7.85rem",
      marginTop: "1rem",
      padding: "0.3rem 1.3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.8rem",
      marginLeft: "1.85rem",
      marginTop: "1rem",
      padding: "0.3rem 1.3rem",
    },
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "0.3rem",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
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
      height: "15vh",
    },
  },
  alternateimage: {
    width: "600%",
    height: "5vh",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
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
  searchimage: {
    height: "30vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
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
