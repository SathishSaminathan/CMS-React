import { makeStyles } from "@material-ui/core";

let caroeselStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
    marginTop: "10px",
    margin: "0px 10px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      display: "flex",
    },
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
      transition: "all ease 200ms",
    },
  },
  cardimg: {
    width: "70%",
  },
}));

export default caroeselStyles;
