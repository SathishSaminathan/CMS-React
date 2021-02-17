import React from 'react';
import Header from '../HeaderComponent/Header';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';

import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
} from '@material-ui/core';
import HeaderComponent from '../HeaderComponnent';
import '../AboutUsStyles.css';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import DoubleCarosel from '../DoubleCarosel';
import FooterPagePro from '../Footer';
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

  root: {
    flexGrow: 1,
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
  aboutText: {
    position:"absolute",
    left:"11%",
    marginBottom: '60px',
    paddingBottom:"80px",
    [theme.breakpoints.down('sm')]: {
      left:"2%",
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
    width: '80%',
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
    top:"23em",
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
      marginTop:"3em",
    },
  }
  
}));

function AboutUs(props) {
  const classes = useStyles();
  
  const { width } = props;
  console.log(width);
  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.bgimg} src="images/handshake.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container className={classes.gridmain}>
          <Grid item md={12} className={classes.aboutText}>
            <Typography className={classes.aboutTypo} variant="h3">ABOUT US {width}</Typography>
          </Grid>
        
      
          <Grid container className={classes.subGrid}>
            <Grid item xs={12} md={6} className={classes.cantonContainer}>
              <Fade left>
              <Typography variant="h2" className={classes.cantonTitle}>
                Canton Management Service
              </Typography>
              </Fade>
              <div className="underline"></div>
              <Fade left>
              <Typography variant="h6" className={classes.cantonText}>
                Canton Management Services,Inc was established in 2008,CMS is a
                practical and{' '}
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  "SHOW-HOW"
                </span>{' '}
                type of Consultancy Services organization.it has been
                instrumental in bringing a{' '}
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  perceptible change in the companies'outlook image and
                  performance
                </span>
              </Typography>
              </Fade>
              <Fade left>
              <Typography variant="subtitle1" className={classes.cantonText}>
                We provide consultancy services to
                Automotive,Tire,Steel,Foundries,Paint and Electrical &
                Electronics in Manufacturing and Software development,data
                processing centers,cinical reseearch organizations ,asset
                recovery centers,utilizing kitting,3PL providers and Banks in
                Service industries.
              </Typography>
              </Fade>
            </Grid>
            
            <Grid item className={classes.aboutimgcontainer} md={6} xs={12}>
              <Fade right>
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
                .Busineess Process{' '}
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  Re-Engineering
                </span>
                . and Conctinual improvement.
              </Typography>
              </Fade>
              <Fade left>
              <Typography variant="subtitle1" className={classes.undertext}>
                We are well qualified,very experienced and holds certification
                on Auditing,
                <span style={{ color: '#0C2D48', fontWeight: '600' }}>
                  CISA,ITIL
                </span>
                ,Lean and Siz Sigma Black Belts
              </Typography>
              </Fade>
              <Fade left>
              <Typography className={classes.undertext} variant="subtitle1">
                we are commited to contributing to the organization through
                compatiable guidance.
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
    </div>
  );
}

export default AboutUs;
