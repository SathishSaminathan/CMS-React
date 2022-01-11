import { makeStyles } from "@material-ui/core";

let ServicesStyles = makeStyles((theme) => ({
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "50vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: " rgba(111,111,111,2.0)",
    zIndex: -1,
    background: "linear-gradient(90deg, black, transparent)",
  },

  bgimg: {
    // margin: 'auto',
    //   height: '50vh',
    //   width: '100%',
    //   display: 'block',
    //   objectFit: 'cover',
    //   position: 'absolute',
    //   top: '0',
    //   left: 0,
    //   opacity: '0.5',
    //   backgroundImage: `url(${clientimg})`,
    //   backgroundPosition:"0px -150px",
    //   backgroundSize:" 100% auto",
    //   backgroundRepeat:"no-repeat",

    //   [theme.breakpoints.down('xs')]: {
    //     backgroundPosition:"0px 0px",
    //     height:"100%",
    //   },
    height: "50vh",
    width: "100%",
    display: "block",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: 0,
    opacity: "0.5",
    [theme.breakpoints.down("xs")]: {},
  },
  GridContainer: {
    position: "absolute",
    top: "42%",
  },
  ClientText: {
    paddingLeft: "12.5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
    },
  },

  HeaderText1: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    width: "100%",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "90px",
    },
  },

  logimg: {},
  img: {
    display: "block",
    maxWidth: "5%",
    maxHeight: "10",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      maxWidth: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "5%",
    },
  },
  paper: {
    paddingLeft: "150px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
    },
  },
  paper1: {
    paddingLeft: "150px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
    },
  },
  lastGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "0px",
    marginRight: "0px",
    position: "relative",
    left: "0px",
    marginTop: "13px",
    backgroundImage: "url(../images/explaining.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "35vh",
    marginBottom: "-25px",
  },
  gridcontainer1: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    textAlign: "left",
    paddingLeft: "3em",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  },
  typotext: {
    fontSize: "22px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  consultancysub: {
    paddingTop: "1em",
    width: "50%",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      transform: "none",
    },
  },
  firstimgcontainer: {
    width: 550,
    height: 400,
    backgroundColor: "transparent",
    paddingLeft: "10em",
    [theme.breakpoints.down("md")]: {
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      height: "auto",
      alignContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "301px",
    },
  },
  secoundpaper: {
    backgroundColor: "transparent",
    paddingLeft: "3em",
    marginBottom: "30px",
    width: 450,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "300",
      height: "auto",
      alignContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "303px",
      height: "auto",
      alignContent: "center",
    },
  },
  paper3: {
    width: "auto",
    height: "auto",
    marginLeft: "50px",
    marginRight: "20px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  btnconsol: {
    color: "white",
    backgroundColor: "orangered",
    borderRadius: "30px",
    paddingTop: "15px",
    paddingBottom: "15px",
    [theme.breakpoints.down("md")]: {
      borderRadius: "20px",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingRight: "5px",
      paddingLeft: "5px",
    },
  },
  businesstext: {
    color: "white",
    paddingLeft: "50px",
    fontFamily: "Hammersmith One, sans-serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      paddingLeft: "0px",
    },
  },
  serviceTextContainer: {
    paddingLeft: "12.8em",

    [theme.breakpoints.down("lg")]: {
      paddingLeft: "9.8em",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      paddingLeft: "10px",
      paddingBottom: "50px",
    },
  },
  Header1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TrainingWorkshop: {
    marginTop: 40,
    //   display: "flex",
    //   flexDirection: "row",
  },
  TrainingWorkshop2: {
    marginTop: 40,
    marginBottom: 60,
  },
  workshopTitle: {
    color: "#0C2D48",
    fontFamily: "Hammersmith One, sans-serif",
    fontWeight: "400",
  },
  item1: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 60,
    marginTop: 60,
  },
  TrainingWorkshop: {
    width: "100%",
  },
  trainingText: {
    fontSize: "22px",
    margin: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  textContainer: {
    //   display: "flex",
    //   flexDirection: "row",
    paddingLeft: "9em",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
  imageContainer: {
    width: "100%",
  },
  workshopimg: {
    width: "100%",
    height: "100%",
  },
  spanText: {
    color: "#0C2D48",
    fontWeight: "600",
  },
}));

export default ServicesStyles;
