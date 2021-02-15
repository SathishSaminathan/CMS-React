import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import Header from '../HeaderComponent/Header';
import '../HomeStyles.css';
import { makeStyles } from '@material-ui/core/styles';
// import Carousel from "../carousolComponent";
import Carousel from 'react-multi-carousel';
import DoubleCarosel from '../DoubleCarosel';
import Slider from 'react-slick';
import SimpleCarosel from '../SimpleCarosel';
import FooterPage from '../Footer';
import NavBArMat from '../NavBarMat';
import Fade from 'react-reveal/Fade';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  imageContainer: {},
  cmsContent: {
    position: 'absolute',
    bottom: '25%',
    left: '150px',

    [theme.breakpoints.down('md')]: {
      left: '10%',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  paper1: {
    height: 250,
    width: 350,
    backgroundColor: '#0C2D48',
    position: 'relative',
    top: '10px',
    left: '22%',
    justifyContent: 'center',
    textAlign: 'center',
    color:"white",
    [theme.breakpoints.down('md')]: {
      left: '15%',
      top: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '0%',
      marginBottom: '5px',
    },
  },
  paper2: {
    height: 300,
    width: 350,
   backgroundColor: "#a40606",
backgroundImage:" linear-gradient(315deg, #a40606 0%, #d98324 74%)",

    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    left: '14%',
    color:"white",
    [theme.breakpoints.down('md')]: {
      left: '15%',
      height: 250,
      top: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '0px',
    },
  },
  paper3: {
    height: 250,
    width: 350,
    position: 'relative',
    top: '10px',
    left: '9.6%',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#2E8BC0',
    color:"white",
   
    [theme.breakpoints.down('md')]: {
      left: '15%',
      top: '8%%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '0px',
    },
  },
  card2img: {
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      marginTop: '12px',
    },
  },

  root: {
    flexGrow: 1,
    position: 'absolute',
    top: '90%',

    [theme.breakpoints.down('md')]: {
      marginRight: '20px',
      paddingRight: '40px',
      paddingLeft: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  img1: {
    objectFit: 'contain',
    width: '70%',
    height: '50%',
  },
  img2: {
    objectFit: 'contain',
    width: '50%',
    height: '70%',
    position: 'relative',
    bottom: '30%',
    left: '30%',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: '40%',
    },
  },
  imgLogo: {
    width: '8%',
    position: 'relative',
    bottom: '52%',
    left: '12%',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      left: '65%',
    },
  },
  image1Container: {
    width: '100%',
    margin: '0 auto',
    maxWidth: '800px',
    marginTop: '90px',
    position: 'relative',
    marginLeft: '10%',
    [theme.breakpoints.down('md')]: {
      left: '12px',
      marginLeft: '20px',
    },
  },
  cantonContainer: {
    display: 'flex',
    flex: '2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    marginLeft: '5px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '60px',
    },
  },
  newsnblog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
   
    width: '99%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    left: '15px',
    marginTop: '10px',
    backgroundColor:"#0C2D48"
  },
  partnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'orangered',
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
    marginBottom:"-25px"
  },

  blogContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:"#0C2D48"
  },
  blogImg1: {
    width: '100%',
  },
  authorText: {
    fontSize: '8px',
    paddingRight: '10px',
    paddingLeft: '10px',
    color:"white"
  },
  blogTitleText: {
    fontSize: '16px',
    paddingRight: '10px',
    paddingLeft: '10px',
    color:"white"
  },
  blogContent: {
    fontSize: '8px',
    paddingRight: '10px',
    paddingLeft: '10px',
    color:"white"
  },
  blogCard: {
    justifyContent: 'left',
    alignItems: 'left',
    textAlign: 'left',
  },
  partnerCard: {
    height: 150,
    width: 150,
    marginBottom: '10px',
    backgroundColor: 'yellow',
  },
  blogBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <NavBArMat/>
        <Grid xl="auto" container>
          <Grid item spacing={2} xs={12} className={classes.cmsContent}>
            <Typography style={{ marginBottom: '30px',fontFamily:"Noto Sans KR, sans-serif" }} variant="h4">
              CMS IS A
            </Typography>
            <Typography style={{ marginBottom: '30px',fontFamily: 'Hammersmith One, sans-serif' }} variant="h2">
              PRACTICAL & "SHOW-HOW"
            </Typography>
            <Typography style={{ marginBottom: '30px' }} varitant="h4">
              type of consultancy services organization
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'orangered',
                marginRight: '20px',
                borderRadius: '18px',
                color: 'white',
                marginBottom: '20px',
              }}
            >
              Our Services
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'orangered',
                borderRadius: '18px',
                color: 'white',
                marginBottom: '20px',
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
              <Fade left delay={1000}>
                <Paper className={classes.paper1} elevation={0} >
                  <img
                    style={{
                      width: '50px',
                      marginBottom: '20px',
                      marginTop: '10px',
                    }}
                    src="../images/callAgent.png"
                  />
                  <Typography
                    style={{ fontSize: '19px', marginBottom: '10px' }}
                    variant="h5"
                  >
                    Consulting Services
                  </Typography>

                  <Typography
                    style={{ fontSize: '12px', padding: '10px' }}
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '10px',
                      textDecoration: 'underline',
                      color: 'white',
                    }}
                    variant="h6"
                  >
                    Read More
                  </Typography>
                </Paper>
                </Fade>
              </Grid>
             
              <Grid item>
              <Fade bottom delay={1000}>
                <Paper className={classes.paper2} elevation={0} >
                  <img
                    className={classes.card2img}
                    style={{ width: '50px', marginBottom: '20px' }}
                    src="../images/pickingPeople.png"
                  />
                  <Typography
                    style={{ fontSize: '19px', marginBottom: '10px' }}
                    variant="h5"
                  >
                    Consultancy Approach
                  </Typography>

                  <Typography
                    style={{ fontSize: '12px', padding: '10px' }}
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '10px',
                      textDecoration: 'underline',
                      color: 'white',
                    }}
                    variant="h6"
                  >
                    Read More
                  </Typography>
                </Paper>
                </Fade>
              </Grid>
             
              
              <Grid item>
              <Fade right delay={1000}>
                <Paper className={classes.paper3} elevation={0} >
                  <img
                    style={{
                      width: '50px',
                      marginBottom: '20px',
                      marginTop: '10px',
                    }}
                    src="../images/presentation.png"
                  />
                  <Typography
                    style={{ fontSize: '19px', marginBottom: '10px' }}
                    variant="h5"
                  >
                    Training Workshops
                  </Typography>

                  <Typography
                    style={{ fontSize: '12px', padding: '10px' }}
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '10px',
                      textDecoration: 'underline',
                      color: 'white',
                    }}
                    variant="h6"
                  >
                    Read More
                  </Typography>
                </Paper>
                </Fade>
              </Grid>
             
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className={classes.image1Container}>
          <Fade left delay={1000}>
            <img className={classes.img1} src="../images/looking.jpg" />

            <img className={classes.img2} src="../images/working.jpg" />
            <img className={classes.imgLogo} src="../images/logosmall.png" />
            </Fade>
          </Grid>
          <Grid item className={classes.cantonContainer}>
           
            <div class="devicer"></div>
            <Typography style={{ marginLeft: '40px' }}>About Us</Typography>
            <Fade right>
            <Typography
              style={{ width: '50%',color:"#0C2D48" }}
              variant="h3"
              gutterBottom="true"
            >
              Canton Management
            </Typography>
            <Typography variant="subtitle" gutterBottom="true">
                                 Our core competencies are <span style={{color:"#0C2D48",fontWeight:"600"}}>Management Consultancy Services</span> on integrated Management System(IMS),Business Process <span style={{color:"#0C2D48",fontWeight:"600"}}>Re-Engineering</span> and improvement                  

            </Typography>
            <Button
              className={classes.btnLearn}
              style={{
                backgroundColor: 'orangered',
                borderRadius: '20px',
                width: '23%',
                color: 'white',
                marginTop: '20px',
              }}
            >
              Learn More
            </Button>
            </Fade>
          </Grid>
          <Grid container className={classes.newsnblog} spacing={3}>
            <Grid
              item
              xs={12}
              md={12}
              xl={12}
              className={classes.blogContainer}
            >
              <Typography style={{color:"white"}}> Our </Typography>
              <Typography style={{color:"white",fontWeight:"600"}}> News & blog </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img
                  className={classes.blogImg1}
                  src="../images/bmeeting.jpg"
                />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bman.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  By Author Published on July9,2020
                </Typography>
                <Typography className={classes.blogTitleText} variant="h5">
                  blog Title Goes here
                </Typography>
                <Typography className={classes.blogContent} variant="h6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde provident, earum perspiciatis dolor ratione
                  molestiae velit iusto obcaecati debitis repellat error libero
                  neque similique saepe eius veniam illo consequatur.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} xl={12} className={classes.blogBtn}>
              <Button variant="outlined" style={{ color: 'black',backgroundColor:"white",borderRadius:"20px" }}>
                Go To Blog
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.partnerContainer} spacing={3}>
            <Grid item xs={12} md={12}>
              <Typography style={{color:"white"}}>TRUST WE GOT</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography style={{color:"white"}} variant="h4">OUR PARTNERS</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <SimpleCarosel />
            </Grid>
          </Grid>
          <Grid container className={classes.cardCarosel}>
            <Grid item xs={12} md={12}>
              <Typography>From Our Great Clients</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" style={{ color: 'darkslateblue' }}>
                What clients Say About Us ?
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <DoubleCarosel />
            </Grid>
          </Grid>
          <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" style={{ color: 'white' }}>
                We Help You unlock & unleash the power within your large scale
                buissness
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'orangered',
                  borderRadius: '20px',
                }}
              >
                Book a Consulation
              </Button>
            </Grid>
          </Grid>
          <FooterPage/>
        </Grid>
        
      </ThemeProvider>
    </div>
  );
}

export default Home;
