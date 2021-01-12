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
}));
