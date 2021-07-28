import "../../src/";
import "../HomeStyles.css";

import {
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import Fade from "react-reveal/Fade";
import FooterPage from "../Footer";
import HeaderComponent from "../HeaderComponnent";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MuiAlert from "@material-ui/lab/Alert";
import NavBArMat from "../NavBarMat";
import React from "react";
import ScrollUp from "../ScrollUp";
import ScrollableAnchor from "react-scrollable-anchor";
import emailjs from "emailjs-com";
import { goToAnchor } from "react-scrollable-anchor";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    height: "50vh",
    width: "100%",
    display: "block",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: 0,
    opacity: "0.5",
    backgroundPosition: " 0 -500px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  ContactText: {
    position: "absolute",
    left: "11%",
    marginBottom: "60px",
    paddingBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      left: "2%",
    },
  },
  Heading1: {
    marginTop: "10em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4em",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
    },
  },
  Heading2: {
    marginLeft: "70px",
    paddingLeft: "10em",
    width: "100%",
    marginTop: "4em",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "4em",
      position: "relative",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "0px",
      paddingLeft: "0",
    },
  },
  root: {
    flexGrow: 1,
  },
  GridContainer: {
    position: "absolute",
    top: "42%",
  },
  paper: {
    width: "60%",
    marginTop: "4em",
    marginLeft: "12em",
    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      padding: "0",
    },
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
      transition: "all ease 200ms",
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
    marginTop: "6em",
  },
  subtext1: {
    marginTop: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      width: "80%",
    },
  },
  head1: {
    width: "50%",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
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
  header: {
    color: "#0C2D48",
    fontFamily: "Hammersmith One, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "26px",
    },
  },
  paperContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "4em",

      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "0",
      padding: "0",
    },
  },
  textField: {
    width: "100%",
    height: "40px",
    border: "1px solid #E3E3E3",
    backgroundColor: "#F2F2F2",
    padding: 20,
    marginBottom: 20,
    marginRight: 10,
    fontFamily: "Poppins",
  },
  textFieldMessage: {
    width: "100%",
    height: "150px",
    border: "1px solid #E3E3E3",
    backgroundColor: "#F2F2F2",
    padding: 20,
    marginBottom: 20,
    marginRight: 10,
    fontFamily: "Poppins",
  },
  textFieldNumberContainer: {
    width: "100%",
    height: "40px",
    border: "1px solid #E3E3E3",
    backgroundColor: "#F2F2F2",
    marginBottom: 20,
    marginRight: 10,
  },
  textFieldNumber: {
    width: "100%",
    border: "none",
    backgroundColor: "#F2F2F2",
    outline: "none",
    fontFamily: "Poppins",
  },
  select: {
    padding: "0px 10px",
    border: "none",
    backgroundColor: "#F2F2F2",
    color: "#8d7775",
  },
  options: {},
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function ContactComponent(props) {
  const classes = useStyles();
  let img = "images/download.png";
  let history = useHistory();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1czfqlk",
        "template_nvj1kuj",
        e.target,
        "user_RGpXMgF16hGignC221XYV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let vertical = "top";
  let horizontal = "center";
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer} id="back-to-top-anchor">
        <img className={classes.bgimg} src="images/telphone.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ContactText}>
            <ScrollableAnchor id={"contactus"}>
              <Typography
                variant="h3"
                style={{ fontFamily: "Anton, sans-serif", color: "white" }}
              >
                CONTACT
              </Typography>
            </ScrollableAnchor>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            className={classes.Heading1}
            direction="column"
          >
            <Fade top>
              <Typography variant="h3" className={classes.header}>
                Get in Touch With Us
              </Typography>
            </Fade>
            <div className="underline"></div>

            <Typography className={classes.head1}>
              Any kind of Business Solution and Consultation don't hesitate to
              contact with us for immediate customer support. We would love to
              hear from you.
            </Typography>
          </Grid>

          <Grid container md={7}>
            <Grid item xs={12} md={9} className={classes.Heading2}>
              <ScrollableAnchor id={"message"}>
                <Typography
                  variant="h4"
                  style={{ marginBottom: "-25px", fontSize: "24px" }}
                >
                  Send Us Your Message
                </Typography>
              </ScrollableAnchor>
              <div className="underline"></div>
              <Typography className={classes.subtext1}>
                Alternatively, if you'd like for us to get back in touch with
                you please fill in the form below.
              </Typography>
              <form style={{ marginTop: "20px" }} onSubmit={sendEmail}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "50%", marginRight: 10 }}>
                    <input
                      placeholder="First Name"
                      type="text"
                      className={classes.textField}
                      name="firstname"
                    />
                  </div>
                  <div style={{ width: "50%", marginRight: 10 }}>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      type="text"
                      className={classes.textField}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "50%", marginRight: 10 }}>
                    <input
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      className={classes.textField}
                    />
                  </div>
                  <div
                    className={classes.textFieldNumberContainer}
                    style={{
                      width: "50%",
                      marginRight: 10,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <select className={classes.select}>
                        <option value="0" className={classes.options}>
                          USA
                        </option>
                        <option value="1" className={classes.options}>
                          CN
                        </option>
                        <option value="2" className={classes.options}>
                          IN
                        </option>
                      </select>
                    </div>
                    <div style={{ width: "100%" }}>
                      <input
                        type="number"
                        placeholder="+1"
                        name="phone"
                        className={classes.textFieldNumber}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginRight: 10 }}>
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className={classes.textFieldMessage}
                  />
                </div>
                <Grid
                  item
                  md={12}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "orangered",
                      marginBottom: "20px",
                      borderRadius: "30px",
                      paddingBottom: "15px",
                      paddingTop: "15px",
                      marginTop: "1em",
                    }}
                    variant="outlined"
                  >
                    Send Message
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className={classes.paperContainer}
            direction="column"
          >
            <Paper className={classes.paper}>
              <Fade left>
                <div style={{ marginBottom: "37px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "left",
                      paddingLeft: "30px",
                      color: "orangered",
                      paddingTop: 10,
                    }}
                  >
                    Address:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "left", paddingLeft: "30px" }}
                  >
                    46060 Ashton Woods Ct.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "left", paddingLeft: "30px" }}
                  >
                    Canton, MI 48187
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "left", paddingLeft: "30px" }}
                  >
                    USA
                  </Typography>
                </div>
              </Fade>
              <Fade right>
                <div style={{ marginBottom: "50px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: "left",
                      paddingLeft: "30px",
                      color: "orangered",
                    }}
                  >
                    Phone Number:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "left", paddingLeft: "30px" }}
                  >
                    +1 2484448097
                  </Typography>
                </div>
              </Fade>
              {/* <Fade left >
                <div style={{ marginBottom: '50px' }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: 'left',
                      paddingLeft: '30px',
                      color: 'orangered',
                    }}
                  >
                    Email Address:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    pmasilamani@canton-management.com
                  
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px',paddingTop:5 }}
                  >
                   sales@canton-management.com 
                  
                  </Typography>
                </div>
              </Fade> */}
            </Paper>
          </Grid>
          <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.businesstext}>
                We Help You unlock & unleash the power within your business
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={() => {
                  goToAnchor("message");
                }}
                className={classes.btnconsol}
              >
                Book a Consultation
              </Button>
            </Grid>
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="success">
          Message Sent Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactComponent;
