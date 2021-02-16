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
    left: '13em',

    [theme.breakpoints.down('sm')]: {
      left:"10px",
      justifyContent: 'center',
      textAlign: 'center',
      bottom: '15%',
      marginBottom:"20px"
    },
  },
  paperblog1:{
 height: 350,
    width: 400,
    position:"relative",
    [theme.breakpoints.down('md')]: {
      left:"0"
    },
  },
  paperblog2:{
    height: 350,
       width: 400,
     },
     paperblog3:{
      height: 350,
         width: 400,
         position:"relative",
         
         [theme.breakpoints.down('md')]: {
           right:"0"
         },
       },
  paper1: {
    height: 350,
    width: 400,
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
      width: 340,
    },
  },
  paper2: {
    height: 380,
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
      height: 350,
    width: 400,
      top: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '0px',
      width: 340,
    },
  },
  paper3: {
    height: 350,
    width: 400,
    position: 'relative',
    top: '10px',
    left: '8.4%',
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
      width: 340,
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
      // marginRight: '0px',
      paddingRight: '0px',
      paddingLeft: '0px',
    },
  },
  img1: {
    objectFit: 'contain',
    width: '80%',
    height: '50%',
  },
  img2: {
    objectFit: 'contain',
    width: '60%',
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
      
      marginLeft: '20px',
    },
  },
  cantonContainer: {
    display: 'flex',
    flex: '2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    marginLeft: '35px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '60px',
    },
  },
  newsnblog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
   
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    
    marginTop: '10px',
    backgroundColor:"#0C2D48"
  },
  partnerContainer: {
   
    backgroundColor: "#a40606",
backgroundImage:" linear-gradient(315deg, #a40606 0%, #d98324 74%)",
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
    marginTop: '12px',
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
    left: '0px',
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
    fontSize: '14px',
   
    color:"white"
  },
  blogTitleText: {
    fontSize: '20px',
   
    color:"white"
  },
  blogContent: {
    fontSize: '12px',
   
    color:"white"
  },
  blogCard: {
    justifyContent: 'space-around',
    alignItems: 'left',
    textAlign: 'left',
    display:"flex"
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
    marginTop:"70px"
  },
  trustcontainer:{
    marginLeft:"16%",
    [theme.breakpoints.down('md')]: {
     marginLeft:"0",
     display:"flex",
     justifyContent:"center",
     textAlign:"center"
    },
   
  },
  partnerText:{
    marginLeft:"16%",
    [theme.breakpoints.down('md')]: {
      marginLeft:"0",
      display:"flex",
      justifyContent:"center",
      textAlign:"center"
     },
  },
  practicaltext:{
    marginBottom: '30px',fontFamily: 'Hammersmith One, sans-serif',fontSize:"86px",
    [theme.breakpoints.down('md')]: {
      
      display:"flex",
      justifyContent:"center",
      textAlign:"center",
      fontSize:" 40px",
     },
  },
  clientText:{
    marginBottom:"20px",
    [theme.breakpoints.down('md')]: {
      
     
      fontSize:" 25px",
     },
  },
  cardText:{
    fontSize: '16px', padding: '10px' ,

[theme.breakpoints.down('xs')]: {
  fontSize: '14px',
  paddingLeft:"20px"
      
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
            <Typography className={classes.practicaltext}  variant="h1">
              PRACTICAL & "SHOW-HOW"
            </Typography>
            <Typography style={{ marginBottom: '30px' }} variant="h5">
              type of consultancy services organization
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'orangered',
                marginRight: '20px',
                borderRadius: '30px',
                color: 'white',
                marginBottom: '10px',
                paddingTop:"15px",
                paddingBottom:"15px",
                paddingRight:"20px",
                paddingLeft:"20px"
              }}
            >
              Our Services
            </Button>
            <Button
              variant="outlined"
              style={{
               
                marginRight: '20px',
                borderRadius: '30px',
                color: 'black',
                marginBottom: '10px',
                paddingTop:"15px",
                paddingBottom:"15px",
                paddingRight:"20px",
                paddingLeft:"20px",
                borderWidth:"2px",
                borderColor:"white"
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
                      width: '90px',
                      marginBottom: '20px',
                      marginTop: '10px',
                    }}
                    src="../images/callAgent.png"
                  />
                  <Typography
                    style={{ fontSize: '22px', marginBottom: '10px' }}
                    variant="h5"
                  >
                    Consulting Services
                  </Typography>

                  <Typography
                  className={classes.cardText}
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
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
                    style={{ width: '90px', marginBottom: '20px' }}
                    src="../images/pickingPeople.png"
                  />
                  <Typography
                    style={{ fontSize: '22px', marginBottom: '10px' }}
                    variant="h5"
                  >
                    Consultancy Approach
                  </Typography>

                  <Typography
                    variant="h6"
                    className={classes.cardText}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
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
                      width: '90px',
                      marginBottom: '20px',
                      marginTop: '10px',
                    }}
                    src="../images/presentation.png"
                  />
                  <Typography
                    className={classes.cardText}
                    variant="h5"
                  >
                    Training Workshops
                  </Typography>

                  <Typography
                    className={classes.cardText}
                    variant="h6"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque dicta incidunt eum. Provident qui sequi fuga illo
                    rerum iusto eius officia perferendis. Nisi, quam unde.
                    Facilis cum delectus pariatur voluptatem?
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
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
          <Grid md={4} item className={classes.cantonContainer}>
           
            <div class="devicer"></div>
            <Typography variant="h4" style={{ marginLeft: '40px',color:"orangered" }}>About Us</Typography>
            <Fade right>
            <Typography
              style={{ width: '50%',color:"#0C2D48",fontFamily: 'Hammersmith One, sans-serif' }}
              variant="h2"
              gutterBottom="true"
            >
              Canton Management
            </Typography>
            <Typography variant="h6" gutterBottom="true">
                                 Our core competencies are <span style={{color:"#0C2D48",fontWeight:"600"}}>Management Consultancy Services</span> on integrated Management System(IMS),Business Process <span style={{color:"#0C2D48",fontWeight:"600"}}>Re-Engineering</span> and improvement                  

            </Typography>
            <Button
              className={classes.btnLearn}
              style={{
                backgroundColor: 'orangered',
                borderRadius: '30px',
                
                color: 'white',
                marginTop: '20px',
                paddingTop:"15px",
                paddingBottom:"15px",
                paddingLeft:"25px",
                paddingRight:"25px"
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
              <Typography variant="h4" style={{color:"white"}}> Our </Typography>
              <Typography variant="h4" style={{color:"white",fontWeight:"600"}}> News & blog </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}
                className={classes.paperblog1}
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
                className={classes.paperblog2}
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
                className={classes.paperblog3}
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
            <Grid item xs={12} md={12} className={classes.trustcontainer}>
            
              <Typography style={{color:"white",fontSize:"30px"}}> <span class="devicer1"></span>TRUST WE GOT</Typography>
            </Grid>
            <Grid item xs={12} md={12} className={classes.partnerText}>
              <Typography style={{color:"white",fontFamily: 'Hammersmith One, sans-serif'}} variant="h1">OUR PARTNERS</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <SimpleCarosel />
            </Grid>
          </Grid>
          <Grid container className={classes.cardCarosel}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" style={{color:"#1687a7",fontFamily: 'Hammersmith One, sans-serif'}}>From Our Great Clients</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography className={classes.clientText} variant="h3" style={{ color: '#0C2D48',fontFamily: 'Hammersmith One, sans-serif' }}>
                What clients Say About Us ?
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} style={{marginBottom:"25px"}}>
              <DoubleCarosel />
            </Grid>
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
