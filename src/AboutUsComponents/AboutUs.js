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

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  imageContainer: {},

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '40%',
    left: '10%',
    width: '50%',
    marginBottom: '10px',
  },
  contentContainer: {
    position: 'absolute',
    top: '55%',
    width: '94%',
    marginLeft: '40px',
    height: 'auto',
    paddingLeft: '10px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '20px',
      marginLeft: '20px',
    },
  },
  vidcontainer: {
    width: '100%',
  },
  aboutimgcontainer: {
    width: '50%',
  },
  cantonText: {
    fontSize: '14px',
    paddingBottom: '20px',
    paddingTop: '20px',
    paddingRight: '20px',
  },
  cantonTitle: {
    paddingTop: '30px',
    width: '70%',
  },

  Aboutimg: {
    width: '80%',

    paddingTop: '9%',
    paddingLeft: '5%',
    marginLeft: '40px',
  },

  playimgcontainer: {
    width: '100%',
  },
  imgdiv: {
    backgroundColor: 'pink',
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
    width: '99%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    left: '15px',
    marginTop: '13px',
  },
}));

function AboutUs(props) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img className={classes.bgimg} src="images/handshake.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={1}>
          <Grid item md={12} className={classes.aboutText}>
            <Typography variant="h3">ABOUT US</Typography>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid
            container
            className={classes.contentContainer}
            justify="space-around"
            xl={12}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.cantonTitle}>
                Canton Management Service
              </Typography>
              <div className="underline"></div>
              <Typography variant="h6" className={classes.cantonText}>
                Canton Management Services,Inc was established in 2008,CMS is a
                practical and <span  style={{color:"#0C2D48",fontWeight:"600"}}>"SHOW-HOW"</span> type of Consultancy
                Services organization.it has been instrumental in bringing a{' '}
                <span  style={{color:"#0C2D48",fontWeight:"600"}}>
                  perceptible change in the companies'outlook image and
                  performance
                </span>
              </Typography>
              <Typography variant="subtitle1" className={classes.cantonText}>
                We provide consultancy services to
                Automotive,Tire,Steel,Foundries,Paint and Electrical &
                Electronics in Manufacturing and Software development,data
                processing centers,cinical reseearch organizations ,asset
                recovery centers,utilizing kitting,3PL providers and Banks in
                Service industries.
              </Typography>
            </Grid>
            <Grid item className={classes.aboutimgcontainer} md={6} xs={12}>
              <img className={classes.Aboutimg} src="../images/Aboutus.jpg" />
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
              <Typography
                style={{ marginTop: '40px', width: '95%', fontSize: '14px' }}
                variant="subtitle1"
              >
                Our core Competencies are Management Consultancy Services on
                Integrated Management System <span  style={{color:"#0C2D48",fontWeight:"600"}}>(IMS)</span>
                .Busineess Process <span  style={{color:"#0C2D48",fontWeight:"600"}}>Re-Engineering</span>. and Conctinual
                improvement.
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: '14px' }}>
                We are well qualified,very experienced and holds certification
                on Auditing,<span  style={{color:"#0C2D48",fontWeight:"600"}}>CISA,ITIL</span>,Lean and Siz Sigma Black
                Belts
              </Typography>
              <Typography style={{ fontSize: '14px' }} variant="subtitle1">
                we are commited to contributing to the organization through
                compatiable guidance.
              </Typography>
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
                <Typography>From Our Great Clients</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h4" style={{ color: '#0C2D48'  }}>
                  What clients Say About Us ?
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <DoubleCarosel />
              </Grid>
            </Grid>
            <FooterPage />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default AboutUs;
