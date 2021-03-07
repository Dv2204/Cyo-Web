import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "#FB5B21",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#c24e00",
    },
    "&:focus": {
      backgroundColor: "#a34100",
    },
  },
  menuitems: {
    margin: "0.3rem 0",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
  },
  menuchip: {
    backgroundColor: "#FB5B21",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#c24e00",
    },
    "&:focus": {
      backgroundColor: "#a34100",
    },
  },
}));
