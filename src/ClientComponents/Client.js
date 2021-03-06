import {
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import ClientCarosel from "./ClientCarosel";
import Fab from "@material-ui/core/Fab";
import FooterPage from "../Footer";
import HeaderComponent from "../HeaderComponnent";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import NavBArMat from "../NavBarMat";
import React from "react";
import ScrollUp from "../ScrollUp";
import clientimg from "../assets/images/clients1.jpg";
import { makeStyles } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
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
    paddingLeft: "12.8em",
    marginBottom: "60px",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
    },
  },
  clientH1: {
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {},
  },
  HeaderText1: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    width: "100%",
    marginTop: "50px",
    color: "#0C2D48",
    fontFamily: "Hammersmith One, sans-serif",
    fontSize: "60px",

    [theme.breakpoints.down("md")]: {
      padding: "0",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  paper: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
    marginTop: "10px",
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
  subtext: {
    textAlign: "center",
    paddingTop: "20px",
    fontSize: "23px",
  },
  logoContainer: {
    marginTop: "50px",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignContent: "center",
      alignItems: "center",
      left: "0",
      margin: "0",
      padding: "0",
    },
  },
  consultancysub: {},
  clientTextContainer: {
    position: "absolute",
    left: "11%",
    marginBottom: "60px",
    paddingBottom: "80px",

    [theme.breakpoints.down("xs")]: {
      left: "2%",
    },
  },
  Header1: {
    marginTop: "10em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
      marginTop: "3em",
    },
  },
}));
function Client(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.imageContainer} id="back-to-top-anchor">
        <img className={classes.bgimg} src={clientimg} />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.clientTextContainer}>
            <Typography
              variant="h3"
              className={classes.clientH1}
              style={{ fontFamily: "Anton, sans-serif", color: "white" }}
            >
              OUR CLIENTS
            </Typography>
          </Grid>

          <Grid item md={12} className={classes.Header1}>
            <div className={classes.consultancysub}>
              <Typography variant="h3" className={classes.HeaderText1}>
                Here are just a few examples of client relationships.
              </Typography>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              className="underline"
            ></div>
            <div className={classes.consultancysub}>
              <Typography className={classes.subtext}>
                Our clients are over 400 of the worlds leading organizations,
                from a wide range of sectors.
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            md={12}
            style={{
              margin: "80px 0px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* <Grid container direction="row"
  justify="center"
  alignItems="center" spacing={0} style={{marginBottom:"100px"}} className={classes.logoContainer}>
        <Grid item  sm={6} md={2}>
          <Paper className={classes.paper} elevation={20}>
            <img className={classes.cardimg} src="./images/mspng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6} md={2}>  
          <Paper className={classes.paper} elevation={20}>
              
          <img  className={classes.cardimg} src="./images/ibmpng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/fedexpng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/nikepng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/addidaspng.png"/>
          </Paper>
        </Grid>
      </Grid> */}
            <ClientCarosel />
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
      <ScrollUp {...props}>
        <Fab
          style={{
            backgroundColor: "#a40606",
            backgroundImage:
              " linear-gradient(315deg, #a40606 0%, #d98324 74%)",
            opacity: "0.5",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollUp>
    </div>
  );
}

export default Client;
