import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bgimage: {
    height: "43vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  heading: {
    color: "#fff",
    marginTop: "3rem",
    marginLeft: "6rem",
    fontWeight: "bold",
  },
  headingbody: {
    color: "#fff",
    marginLeft: "6rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  paper: {
    borderRadius: "20px",
    marginTop: "5.4rem",
    marginBottom: "3rem",
    border: "1.4px #FB5B21 solid",
  },
  paperhead: {
    marginTop: "2.4rem",
    textAlign: "center",
  },
}));
