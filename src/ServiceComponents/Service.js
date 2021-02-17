import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
import clientimg from '../assets/images/clients1.jpg';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import '../workshopStyles.css';
import HeaderComponent from '../HeaderComponnent';
import NavBArMat from '../NavBarMat';
import Fade from 'react-reveal/Fade';

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
    height: '50vh',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: 0,
    opacity: '0.5',
    [theme.breakpoints.down('xs')]: {},
  },
  GridContainer: {
    position: 'absolute',
    top: '42%',
  },
  ClientText: {
    paddingLeft: '12.5em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '20px',
    },
  },

  HeaderText1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    width: '100%',
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '90px',
    },
  },

  logimg: {},
  img: {
    display: 'block',
    maxWidth: '5%',
    maxHeight: '10',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      maxWidth: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '5%',
    },
  },
  paper: {
    paddingLeft: '150px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '20px',
      width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '10px',
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
  },
  gridcontainer1: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    textAlign: 'left',
    paddingLeft: '3em',
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  typotext: {
    fontSize: '22px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },
  consultancysub: {
    paddingTop: '1em',
    width: '50%',
    transform: ' translate(50%, 50%)',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      transform: 'none',
    },
  },
  firstimgcontainer: {
    width: 550,
    height: 400,
    backgroundColor: 'transparent',
    paddingLeft: '10em',
    [theme.breakpoints.down('md')]: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      alignContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      width: '301px',
    },
  },
  secoundpaper: {
    backgroundColor: 'transparent',
    paddingLeft: '3em',
    marginBottom: '30px',
    width: 450,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300',
      height: 'auto',
      alignContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '303px',
      height: 'auto',
      alignContent: 'center',
    },
  },
  paper3: {
    width: 'auto',
    height: 'auto',
    marginLeft: '50px',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
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
  businesstext: {
    color: 'white',
    paddingLeft: '50px',
    fontFamily: 'Hammersmith One, sans-serif',
    [theme.breakpoints.down('xs')]: {
     fontSize:"20px",
     paddingLeft: '0px',
    },
  },
  serviceTextContainer: {
    paddingLeft:"12.8em",
    
    [theme.breakpoints.down('md')]: {
     display:"flex",
     justifyContent:"center",
     paddingLeft:"10px",
     paddingBottom:"50px"
    },
   
  },
}));
function Service(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.bgimg} src="./images/ourservice.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.serviceTextContainer}>
            <Typography variant="h3"  className={classes.clientH1} style={{fontFamily:"Anton, sans-serif",
    color:"white"}}>
              OUR SERVICE
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Fade top delay={1000}>
              <Typography
                style={{
                  color: '#0C2D48',
                  fontFamily: 'Hammersmith One, sans-serif',
                  fontWeight: '400',
                }}
                variant="h2"
                className={classes.HeaderText1}
              >
                Consultancy Services
              </Typography>
            </Fade>
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                left: '45%',
              }}
              className="underline"
            ></div>

            <div className={classes.consultancysub}>
              <Fade right delay={1000}>
                <Typography
                  align="center"
                  style={{ fontSize: '18px' }}
                  variant="subtitle1"
                >
                  Hands-on consultancy guidance on establishment and
                  implementation of the management system,including support
                  services:
                </Typography>
              </Fade>
            </div>
          </Grid>
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={0} style={{ marginTop: '10%' }}>
              <Grid item xs={12} sm container>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  className={classes.gridcontainer1}
                >
                  <Fade left delay={1000}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Stratergic buissness planning
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Six sigma Program Implementation
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Cost reduction projects{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Facultication of Kaizen/Operational Excellence Events{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        QA as a Service(QAaaS){' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          ISO 9001
                        </span>
                        - Quality Management System Requirements{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          ISO 14001
                        </span>
                        - Environment Management System Requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          IATF 16949
                        </span>
                        - Quality Management System Requirements for automotive
                        suppliers
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          ISO/IEC 27001
                        </span>
                        - Information Security Management System Requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          ISO/IEC 17025
                        </span>
                        - General requirements for the competency of testing and
                        callibration laboratories
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Fade right delay={1000}>
                    <Paper elevation={0} className={classes.firstimgcontainer}>
                      <img
                        style={{ width: '100%' }}
                        src="./images/onlineL.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={0} style={{ marginTop: '10%' }}>
              <Grid item xs={12} sm container>
                <Grid item md={6} xs={12}>
                  <Fade left delay={1000}>
                    <Paper elevation={0} className={classes.secoundpaper}>
                      <img
                        style={{ width: '100%' }}
                        src="./images/onlineT.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
                <Grid item xs container direction="column">
                  <Fade right delay={1000}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Implementation of{' '}
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          APQP,FMEA,MSA,SPC & PPAP for specific projects
                        </span>{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Training and obtaining PPAP from suppliers
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Supplier Assessments
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Establish and implement ITIL processes{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Establish and implement Metrics for IT Governance
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        IT Risk Management in line with Established frameworks{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform risk-based IT aduits
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform Application control review
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform Applicaton control review
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform{' '}
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          IQ/QQ/PQ(software validation) per ICH Guidelines and{' '}
                          <span>21CFR Part 11 complaince requirements</span>
                        </span>{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Critical process analysis and development of Business
                        Continuity and Disaster Recovery Plans{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Documentation of policies ,
                        <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                          SOPs,
                        </span>
                        ,Operator instructions,Visual aids,Control plans and
                        Training Materials relevant to Quality,information
                        security ,and Environment Management area
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            className={classes.paper}
            style={{
              width: '100%',
              backgroundColor: '#0B132B',
              marginBottom: '-13px',
            }}
            elevation={3}
          >
            <Grid item md={12} className={classes.Header1}>
              <Fade bottom delay={1000}>
                <Typography
                  style={{
                    color: 'white',
                    fontFamily: 'Hammersmith One, sans-serif',
                    fontWeight: '400',
                  }}
                  variant="h2"
                  className={classes.HeaderText1}
                >
                  Consultancy Approach
                </Typography>
              </Fade>
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: '45%',
                }}
                className="underline"
              ></div>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{ marginTop: '5%', marginBottom: '5%' }}
            >
              <Grid item xs={12} sm container>
                <Fade left delay={1000}>
                  <Grid item xs container direction="column">
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: 'white' }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Understand the client needs and expectations{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: 'white' }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform "AS IS" assesment to understand the baseline
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: 'white' }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a detailed technical proposal and get agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: 'white' }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a commercial proposal and get agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: 'white' }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a project a project plan and reach agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: 'white' }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform onsite visits as per the plan
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: 'white' }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Unlimited offline support
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: 'white' }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: '10px' }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Periodic submission of a progress report and review with
                        Stake Holders{' '}
                      </Typography>
                    </Grid>
                  </Grid>
                </Fade>
                <Grid item md={6} xs={12}>
                  <Fade right delay={1000}>
                    <Paper className={classes.paper3} style={{}}>
                      <img
                        style={{ width: '100%' }}
                        src="./images/random1.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.businesstext}>
                We Help You unlock & unleash the power within your large scale
                buissness
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button className={classes.btnconsol}>Book a Consulation</Button>
            </Grid>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Service;
