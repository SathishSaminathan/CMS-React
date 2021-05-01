import '../AboutUsStyles.css';

import {
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';

import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import DoubleCarosel from '../DoubleCarosel';
import Fab from "@material-ui/core/Fab";
import Fade from 'react-reveal/Fade';
import FooterPage from '../Footer';
import FooterPagePro from '../Footer';
import Header from '../HeaderComponent/Header';
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
    height: "60vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:" rgba(111,111,111,2.0)",
    zIndex: -1,
    background: "linear-gradient(90deg, black, transparent)",
   
  },

  root: {
    flexGrow: 1,
  },

  bgimg: {
    // margin: 'auto',
    height: '60vh',
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
    },[theme.breakpoints.down('xs')]: {
      height: '60vh',
    },
  },
  aboutText: {
    position:"absolute",
    left:"11%",
    // marginBottom: '60px',
    // paddingBottom:"80px",
    top:"-8.5%",
    [theme.breakpoints.down('sm')]: {
      left:"2%",
      top:"1%",
    },
   
  },
  contentContainer: {
   width:"100%",
   
   
   
    [theme.breakpoints.down('xs')]: {
     
    },
  },
  vidcontainer: {
    width: '100%',
  },
  aboutimgcontainer: {
    width: '80%',
    position: 'relative',
    top: '7em',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '0',
    },[theme.breakpoints.down('sm')]: {
      top: '0',
    },
  },
  cantonText: {
    fontSize: '20px',
    paddingBottom: '20px',
    paddingTop: '20px',
    paddingRight: '20px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  cantonTitle: {
    paddingTop: '30px',
    width: '70%',
    fontFamily: 'Hammersmith One, sans-serif',
    color: '#0C2D48',
  },

  Aboutimg: {
    width: '80%',
    height:"80%",
    objectFit:"cover",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  playimgcontainer: {
    width: '100%',
  },
  imgdiv: {
    width: '100%',
    height: '40vh',
    paddingRight: '10px',
    backgroundImage: 'url(../images/playvid.jpg)',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '9px',
    opacity: '.7',
    [theme.breakpoints.down('xs')]: {
      height: '10vh',
    },
  },
  cardCarosel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
   
    marginTop: '13px',
  },
  cantonContainer: {
    paddingLeft:"12.5em",
    paddingTop:"4em",
    [theme.breakpoints.down('md')]: {
      left: '0',
    },[theme.breakpoints.down('xs')]: {
      left: '0',
      paddingLeft:"5px",
    },
    [theme.breakpoints.down('sm')]: {
      left: '0',
      paddingLeft:"5px",
    },
  },
  undertext: {
 
 
    fontSize: '22px',
  
  
   [theme.breakpoints.down('md')]: {
    marginLeft:"0",
    
    width:"100%",
  },
  [theme.breakpoints.down('xs')]: {
   
    fontSize: '17px',
   
  },
  },
  gridmain:{
    position:"relative",
    top:"27em",
    [theme.breakpoints.down('xs')]: {
      top:"19em",
    },
   
   
  },
  aboutTypo:{
    fontFamily:"Anton, sans-serif",
    color:"white"
  },
  subs:{
    width:"80%",
    paddingLeft:"12.5em",
    paddingBottom:"2em",
    [theme.breakpoints.down('xs')]: {
      paddingLeft:"0",
      marginTop:"40px",
      paddingLeft:"5px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft:"0",
      marginTop:"40px",
      paddingLeft:"5px",
    },
  },
  subGrid:{
    marginTop:"10em",
    [theme.breakpoints.down('sm')]: {
      marginTop:"9em",
    },
  }
  
}));

function AboutUs(props) {
  const classes = useStyles();
  
  const { width } = props;
  console.log(width);
  return (
    <div>
      <div className={classes.imageContainer} id="back-to-top-anchor">
        <img className={classes.bgimg} src="images/handshake.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container  className={classes.gridmain}>
          <Grid item md={12} className={classes.aboutText}>
            <Typography className={classes.aboutTypo} variant="h3">ABOUT US {width}</Typography>
          </Grid>
        
      
          <Grid container className={classes.subGrid}>
            <Grid item xs={12} md={6} className={classes.cantonContainer}>
              <Fade bottom>
              <Typography variant="h2" className={classes.cantonTitle}>
                Canton Management Services
              </Typography>
              </Fade>
              <div className="underline"></div>
              <Fade top>
              <Typography variant="subtitle1" className={classes.cantonText}>
              Canton Management Services, Inc was established in 2008. CMS is a practical and "SHOW-HOW" type of Consultancy Services organization. It has been instrumental in bringing a perceptible change in the company’s outlook image and performance.
              </Typography>
              </Fade>
              <Fade bottom>
              <Typography variant="subtitle1" className={classes.cantonText}>
              We provide consultancy services to Automotive, Tire & Steel Foundries, Paint and Electrical & Electronics manufacturing companies, Software Development companies, Data Processing Centers, Conical Research Organizations, and Asset Recovery Centers utilizing Kitting, 3PL providers and Banks in Service industries.
              </Typography>
              </Fade>
            </Grid>
            
            <Grid item className={classes.aboutimgcontainer} md={6} xs={12}>
              <Fade top>
              <img className={classes.Aboutimg} src="../images/Aboutus.jpg" />
              </Fade>
            </Grid>
            <Grid item xs={12} md={12} xl={12} className={classes.subs}>
            <Fade left>
              <Typography className={classes.undertext} variant="subtitle1">
                Our core Competencies are Management Consultancy Services on
                Integrated Management System{' '}
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  (IMS)
                </span>
                .Business Process{' '}
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  Re-Engineering{' '}
                </span>
                 and Continual improvement.
              </Typography>
              </Fade>
              <Fade bottom>
              <Typography variant="subtitle1" className={classes.undertext}>
                We are well qualified, very experienced and holds certification
                on Auditing,
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                {' '}CISA, ITIL
                </span>
                , Lean and Siz Sigma Black Belts
              </Typography>
              </Fade>
              <Fade top>
              <Typography className={classes.undertext} variant="subtitle1">
                we are committed to contributing to the organization through
                compatible guidance.
              </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              xl={12}
              className={classes.playimgcontainer}
            >
              {/* <img className={classes.playimg}  src="../images/playvid.jpg"/> */}
              <div className={classes.imgdiv}>
                <Typography
                  variant="h5"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingTop: '10%',
                    color: 'white',
                  }}
                >
                  {' '}
                  <AlbumOutlinedIcon />
                  Play Video
                </Typography>
              </div>
            </Grid>
            <Grid container className={classes.cardCarosel}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" style={{color:"#1687a7",fontFamily: 'Hammersmith One, sans-serif'}}>From Our Great Clients</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h3" style={{ color: '#0C2D48',fontFamily: 'Hammersmith One, sans-serif' }}>
                What clients Say About Us ?
              </Typography>
            </Grid>
              <Grid item xs={12} md={12} style={{marginBottom:"40px"}}>
                <DoubleCarosel />
              </Grid>
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

export default AboutUs;
