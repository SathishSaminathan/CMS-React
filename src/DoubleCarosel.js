import './doublecarosal.css';

import {
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdbreact';

import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  starimg: {
    width: '20%',
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',
    position: 'relative',
    top: '-10px',
    left: '8px',
    paddingTop: '20px',
    [theme.breakpoints.down('md')]: {
      top: '0px',
      width: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '0px',
      width: '20%',
      paddingTop: '5px',
    },
  },
  redmore: {
    fontWeight: '600',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cardimg: {
    width: '20%',
    height: '90px',
    borderRadius: '50%',
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',
    position: 'relative',
    top: '0px',
    left: '7px',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      left: '0px',
      width: '100%',
      height: '119px',
      display: 'flex',
      position: 'relative',
      objectFit: 'fill',
      alignItems: 'left',
      borderRadius: '50%',
      justifyContent: 'left',
    },
    [theme.breakpoints.down('xs')]: {},
  },
  card: {
    width: 500,
    height: 330,
    backgroundColor: '#0C2D48',
    [theme.breakpoints.down('xs')]: {
      width: '301px',
      height: '352px',
    },
  },
  cardTitle: {
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',

    fontSize: '22px',
    color: 'white',
    position: 'relative',
    left: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
  cardsubtitle: {
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',

    fontSize: '22px',
    marginLeft: '10px',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
  cardContent: {
    color: 'white',
    justifyContent: 'left',
    textAlign: 'left',
    fontSize: '15px',
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
  cardContainer2: {},

  cardContainer1: {},
  cardContainerMain: {},
  willimgcontainer: {
    [theme.breakpoints.down('md')]: {
      width: '77px',
      height: '119px',
      borderRadius: '50%',
      transform: ' scale(.76, .5)',
    },
  },
  caroselinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
const DoubleCarosel = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={4}
          slide={true}
          showControls={true}
          showIndicators={true}
        >
          <MDBCarouselInner className={classes.caroselinner}>
            <MDBRow>
              {/* <MDBCarouselItem itemId="1" >
              <Grid container direction="row" spacing={2} alignContent='space-around' style={{marginLeft:"10px"}}>
                
                <Grid item xs={12} md={2} >
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                    <MDBCardTitle>will Smith</MDBCardTitle>
                   <Typography>CEO,Canton Management Services</Typography>
                   <img className={classes.starimg} src="./images/5star.png"/>
                  </MDBCardBody>
                  </MDBCard>
                </Grid>
                <Grid item xs={12} md={2} >
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                    <MDBCardTitle>will Smith</MDBCardTitle>
                   <Typography>CEO,Canton Management Services</Typography>
                   <img className={classes.starimg} src="./images/5star.png"/>
                  </MDBCardBody>
                  </MDBCard>
                </Grid>
               
              </Grid>
            </MDBCarouselItem> */}

              <MDBCarouselItem itemId="1">
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  alignContent="space-around"
                  style={{ justifyContent: 'space-evenly' }}
                  className={classes.cardContainerMain}
                >
                  <Grid item xs={12} md={6} className={classes.cardContainer1}>
                    <Paper
                      className={classes.card}
                      style={{ padding: '10px' }}
                      elevation={0}
                    >
                      <div className={classes.willimgcontainer}>
                        <img
                          className={classes.cardimg}
                          src="./images/profileimg1.png"
                        />
                      </div>
                      <Typography className={classes.cardTitle} style={{}}>
                        {' '}
                        G. Walker
                      </Typography>
                      <Typography className={classes.cardsubtitle}>
                        Business Controller, EMAG LLC
                      </Typography>
                      <img
                        className={classes.starimg}
                        src="./images/5star.png"
                      />
                      <Typography
                        className={classes.cardContent}
                        style={{ padding: '10px' }}
                      >
                        Palani has worked with our company less than one year in
                        a consulting capacity involving both ISO Standards 9001:
                        2015 as well as 14001: 2015. That included preparation
                        for, and leading us through one surveillance audit for
                        each standard.
                        <Link
                          to="./testimonial#Walker"
                          className={classes.redmore}
                        >
                          ...Read More
                        </Link>
                      </Typography>
                    </Paper>
                  </Grid>
                  <Hidden mdDown>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.cardContainer1}
                    >
                      <Paper
                        className={classes.card}
                        elevation={0}
                        style={{
                          padding: '10px',
                          backgroundColor: '#a40606',
                          backgroundImage:
                            ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',
                        }}
                      >
                        <div className={classes.willimgcontainer}>
                          <img
                            className={classes.cardimg}
                            src="./images/profileimg1.png"
                          />
                        </div>
                        <Typography className={classes.cardTitle} style={{}}>
                          {' '}
                          Shawn Etheridge
                        </Typography>
                        <Typography className={classes.cardsubtitle}>
                          SVP, ECCO Select Corporation
                        </Typography>
                        <img
                          className={classes.starimg}
                          src="./images/5star.png"
                        />
                        <Typography
                          className={classes.cardContent}
                          style={{ padding: '10px' }}
                        >
                          The most critical decision we made in pursuing 3 ISO
                          certifications simultaneously was to hire Canton
                          Management Services.{' '}
                          <Link
                            to="./testimonial#Shawn"
                            className={classes.redmore}
                          >
                            ...Read More
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  alignContent="space-around"
                  style={{ justifyContent: 'space-evenly' }}
                  className={classes.cardContainerMain}
                >
                  <Grid item xs={12} md={6} className={classes.cardContainer1}>
                    <Paper
                      className={classes.card}
                      elevation={0}
                      style={{ padding: '10px' }}
                    >
                      <div className={classes.willimgcontainer}>
                        <img
                          className={classes.cardimg}
                          src="./images/profileimg1.png"
                        />
                      </div>
                      <Typography className={classes.cardTitle} style={{}}>
                        {' '}
                        Russ McDowell
                      </Typography>
                      <Typography className={classes.cardsubtitle}>
                        Director, ECCO Select Corporation
                      </Typography>
                      <img
                        className={classes.starimg}
                        src="./images/5star.png"
                      />
                      <Typography
                        className={classes.cardContent}
                        style={{ padding: '10px' }}
                      >
                        {' '}
                        I am pleased to endorse Palani Masilamani without
                        reservation.  My company is an IT staffing and services
                        business that had an urgent need for ISO certification. 
                        While many vendors said they could not meet our
                        timeline, Palani agreed to aid us. 
                        <Link
                          to="./testimonial#Russ"
                          className={classes.redmore}
                        >
                          ...Read More
                        </Link>
                      </Typography>
                    </Paper>
                  </Grid>
                  <Hidden mdDown>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.cardContainer1}
                    >
                      <Paper
                        className={classes.card}
                        style={{ padding: '10px' }}
                        elevation={0}
                      >
                        <div className={classes.willimgcontainer}>
                          <img
                            className={classes.cardimg}
                            src="./images/profileimg1.png"
                          />
                        </div>
                        <Typography className={classes.cardTitle} style={{}}>
                          {' '}
                          G. Walker
                        </Typography>
                        <Typography className={classes.cardsubtitle}>
                          Business Controller, EMAG LLC
                        </Typography>
                        <img
                          className={classes.starimg}
                          src="./images/5star.png"
                        />
                        <Typography
                          className={classes.cardContent}
                          style={{ padding: '10px' }}
                        >
                          Palani has worked with our company less than one year
                          in a consulting capacity involving both ISO Standards
                          9001: 2015 as well as 14001: 2015. That included
                          preparation for, and leading us through one
                          surveillance audit for each standard.
                          <Link
                            to="./testimonial#Walker"
                            className={classes.redmore}
                          >
                            ...Read More
                          </Link>
                        </Typography>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  alignContent="space-around"
                  style={{ justifyContent: 'space-evenly' }}
                  className={classes.cardContainerMain}
                >
                  <Grid item xs={12} md={6} className={classes.cardContainer1}>
                    <Paper
                      className={classes.card}
                      elevation={0}
                      style={{ padding: '10px' }}
                    >
                      <div className={classes.willimgcontainer}>
                        <img
                          className={classes.cardimg}
                          src="./images/profileimg1.png"
                        />
                      </div>
                      <Typography className={classes.cardTitle} style={{}}>
                        {' '}
                        Michael Crews
                      </Typography>
                      <Typography className={classes.cardsubtitle}>
                        Owner, Marion Water County Test Lab{' '}
                      </Typography>
                      <img
                        className={classes.starimg}
                        src="./images/5star.png"
                      />
                      <Typography
                        className={classes.cardContent}
                        style={{ padding: '10px' }}
                      >
                        {' '}
                        Very knowledgeable & helpful.
                        {/* <Link to="./testimonial#Russ" className={classes.redmore}>...Read More</Link> */}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Hidden mdDown>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.cardContainer1}
                    >
                      <Paper
                        className={classes.card}
                        style={{ padding: '10px' }}
                        elevation={0}
                      >
                        <div className={classes.willimgcontainer}>
                          <img
                            className={classes.cardimg}
                            src="./images/profileimg1.png"
                          />
                        </div>
                        <Typography className={classes.cardTitle} style={{}}>
                          Kiefer Taylor
                        </Typography>
                        <Typography className={classes.cardsubtitle}>
                          Quality Engineer, Baxter Machine{' '}
                        </Typography>
                        <img
                          className={classes.starimg}
                          src="./images/5star.png"
                        />
                        <Typography
                          className={classes.cardContent}
                          style={{ padding: '10px' }}
                        >
                          {' '}
                          Professional, personable and focused.
                        </Typography>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  alignContent="space-around"
                  style={{ justifyContent: 'space-evenly' }}
                  className={classes.cardContainerMain}
                >
                  <Grid item xs={12} md={6} className={classes.cardContainer1}>
                    <Paper
                      className={classes.card}
                      elevation={0}
                      style={{ padding: '10px' }}
                    >
                      <div className={classes.willimgcontainer}>
                        <img
                          className={classes.cardimg}
                          src="./images/profileimg1.png"
                        />
                      </div>
                      <Typography className={classes.cardTitle} style={{}}>
                        {' '}
                        Jacob Spangler
                      </Typography>
                      <Typography className={classes.cardsubtitle}>
                        Quality Engineer, Yamato Intl. Corp{' '}
                      </Typography>
                      <img
                        className={classes.starimg}
                        src="./images/5star.png"
                      />
                      <Typography
                        className={classes.cardContent}
                        style={{ padding: '10px' }}
                      >
                        {' '}
                        Mr. Masilamani is extremely knowledgeable and easy to
                        work with. His guidance has been crucial to the
                        development of a smoothly operating Quality and
                        Environmental management systems.
                        {/* <Link to="./testimonial#Russ" className={classes.redmore}>...Read More</Link> */}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Hidden mdDown>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.cardContainer1}
                    >
                      <Paper
                        className={classes.card}
                        style={{ padding: '10px' }}
                        elevation={0}
                      >
                        <div className={classes.willimgcontainer}>
                          <img
                            className={classes.cardimg}
                            src="./images/profileimg1.png"
                          />
                        </div>
                        <Typography className={classes.cardTitle} style={{}}>
                          Russ McDowell
                        </Typography>
                        <Typography className={classes.cardsubtitle}>
                          Director – Technology Services, ECCO Select{' '}
                        </Typography>
                        <img
                          className={classes.starimg}
                          src="./images/5star.png"
                        />
                        <Typography
                          className={classes.cardContent}
                          style={{ padding: '10px' }}
                        >
                          Palani at CMS was hands down the best choice we made
                          regarding our pursuit of ISO and CMMI certification. I
                          interviewed close to a dozen providers in this field
                          and Palani stood out immediately.
                          <Link
                            to="./testimonial#RussMC"
                            className={classes.redmore}
                          >
                            ...Read More
                          </Link>
                          {/* <Link to="./testimonial#Walker" className={classes.redmore}>...Read More</Link> */}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </ThemeProvider>
  );
};

export default DoubleCarosel;
