import {
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';

import Fab from "@material-ui/core/Fab";
import Fade from 'react-reveal/Fade';
import FooterPage from '../Footer';
import HeaderComponent from '../HeaderComponnent';
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import NavBArMat from '../NavBarMat';
import React from 'react';
import ScrollUp from '../ScrollUp';
import { makeStyles } from '@material-ui/core/styles';

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
    backgroundColor:" rgba(111,111,111,2.0)",
    zIndex: -1,
    background: "linear-gradient(90deg, black, transparent)",
    
  },

  bgimg: {
    // margin: 'auto',
    height: '50vh',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: 0,
    opacity: '0.5',
    backgroundPosition: ' 0 -500px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  ContactText: {
    position:"absolute",
    left:"11%",
    marginBottom: '60px',
    paddingBottom:"80px",
    [theme.breakpoints.down('sm')]: {
      left:"2%",
    },
   
  },
  Heading1: {
    marginTop:"10em",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"4em",
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-evenly',
    },
  },
  Heading2: {
    marginLeft: '70px',
    paddingLeft: '10em',
    width: '100%',
    marginTop: "4em",
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: "4em",
      position: 'relative',
      display:"flex",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      marginLeft: '0px',
      paddingLeft: '0',
    },
  },
  root: {
    flexGrow: 1,
  },
  GridContainer: {
    position: 'absolute',
    top: '42%',
  },
  paper: {
    width: 300,
    height: 470,  
    marginTop: "4em",
    marginLeft: "12em",
    [theme.breakpoints.down('sm')]: {
    
      margin: '0px',
      padding: '0',
    },
    '&:hover, &:focus': {
      transform: 'scale(1.03)',
      boxShadow:
        '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
      transition: 'all ease 200ms',
    },
  },
  lastGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    left: '0px',
    marginTop: '13px',
    backgroundImage: 'url(../images/explaining.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '35vh',
    marginBottom: '-25px',
    marginTop: '6em'
  },
  subtext1: {
    marginTop: '20px',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '80%',
    },
  },
  head1: {
   width:"50%",
   textAlign:"center",
    marginTop: '20px',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      width:"100%",
    },
  },
  businesstext: {
    color: 'white',
    paddingLeft: '50px',
    fontFamily: 'Hammersmith One, sans-serif',
    [theme.breakpoints.down('xs')]: {
     fontSize:"20px",
     paddingLeft: '0px',
    },
  },
  btnconsol: {
    color: 'white',
    backgroundColor: 'orangered',
    borderRadius: '30px',
    paddingTop: '15px',
    paddingBottom: '15px',
    [theme.breakpoints.down('md')]: {
      borderRadius: '20px',
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingRight: '5px',
      paddingLeft: '5px',
    },
  },
  header:{
   
    color: '#0C2D48',
    fontFamily: 'Hammersmith One, sans-serif',
    [theme.breakpoints.down('md')]: {
     fontSize:"26px"
    },
  },
  paperContainer:{
    [theme.breakpoints.down('md')]: {
      
      marginTop: "4em",
     
      display:"flex",
      textAlign:"center",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      margin: '0',
      padding: '0',
    },
  }
}));
function ContactComponent(props) {
  const classes = useStyles();
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
            <Typography variant="h3" style={{fontFamily:"Anton, sans-serif",
    color:"white"}}>CONTACT</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            className={classes.Heading1}
            direction="column"
          >
            <Fade top >
              <Typography
                variant="h3"
                className={classes.header}
              
              >
                Get in Touch With Us
              </Typography>
            </Fade>
            <div className="underline"></div>

            <Typography className={classes.head1}>
              Any Kind of business solution and Consulation don't hesitate to
              contact with us for imidiate customer support.We would love to
              hear from you
            </Typography>
          </Grid>

          <Grid container md={6}>
            <Grid item xs={12} md={9} className={classes.Heading2}>
              <Typography variant="h4" style={{ marginBottom: '-25px',fontSize:"24px" }}>
                Send Us Your Message
              </Typography>
              <div className="underline"></div>
              <Typography className={classes.subtext1}>
                Alternatively,if you'd like for us to get back in touch with you
                please fill in the form below.
              </Typography>
              <TextField
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
                label="Firstname"
                variant="outlined"
                style={{
                  marginRight: '20px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginBlock: '20px',
                }}
              />
              <TextField
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
                label="LastName"
                variant="outlined"
                style={{
                  marginRight: '20px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginBlock: '20px',
                }}
              />
              <TextField
                id="outlined-size-small"
                defaultValue=""
                variant="outlined"
                size="small"
                label="EmailAdress"
                variant="outlined"
                style={{
                  marginRight: '20px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginBlock: '20px',
                }}
              />
              <TextField
                id="standard-number"
                label="Number"
                type="number"
                size="small"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                  marginRight: '20px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginBlock: '20px',
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                style={{
                  marginRight: '20px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginBlock: '20px',
                }}
              />
              <Grid item md={12}>
                <Button
                  style={{
                    color: 'white',
                    backgroundColor: 'orangered',
                    marginBottom: '20px',
                    borderRadius: '30px',
                    paddingBottom: '15px',
                    paddingTop: '15px',
                   marginTop:"1em"
                  }}
                  variant="outlined"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.paperContainer}
            direction="column"
          >
            <Paper className={classes.paper}>
              <Fade left >
                <div style={{ marginBottom: "37px"}}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: 'left',
                      paddingLeft: '30px',
                      color: 'orangered',
                    }}
                  >
                    Address:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    canton management services,
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    Canton Mixigon,
                  </Typography>
                </div>
              </Fade>
              <Fade right >
                <div style={{ marginBottom: '50px' }}>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: 'left',
                      paddingLeft: '30px',
                      color: 'orangered',
                    }}
                  >
                    Phone Number:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    +1(248)842-2805
                  </Typography>
                </div>
              </Fade>
              <Fade left >
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
                    palani59@gmail.com
                  </Typography>
                </div>
              </Fade>
              <Fade right >
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      textAlign: 'left',
                      paddingLeft: '30px',
                      color: 'orangered',
                    }}
                  >
                    Watching Hours:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    Mon-Fri:10.00-19.00
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'left', paddingLeft: '30px' }}
                  >
                    sat-sun:Holiday
                  </Typography>
                </div>
              </Fade>
            </Paper>
          </Grid>
          <Grid container className={classes.lastGrid}>
          <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.businesstext}>
                We Help You unlock & unleash the power within your large scale
                buissness
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
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
        <Fab style={{  backgroundColor: '#a40606',
    backgroundImage: ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',opacity: "0.5"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollUp>
    </div>
  );
}

export default ContactComponent;
