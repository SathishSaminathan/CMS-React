import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
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
import '../testimonialStyles.css';
import NavBArMat from '../NavBarMat';


import HeaderComponent from '../HeaderComponnent';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  imageContainer: {},

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
    [theme.breakpoints.down('xs')]: {},
  },
  GridContainer: {
    position: 'absolute',
    top: '42%',
  },
  TestimonialText: {
    marginLeft: '140px',
    marginBottom: '60px',
  },
  header1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    marginTop: '50px',
  },
  testimonialH1: {
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      right: '10%',
    },
  },
  willsmith: {
    width: '15%',
    height: '9vh',
    borderRadius: '50%',
    marginTop: '15px',
    marginLeft: '0px',
    position: 'relative',
    right: '35px',
  },
  starimg: {
    width: '20%',
    paddingBottom: '20px',
  },
  detailContainer: {
    paddingLeft: '5em',
    position: 'relative',
    bottom: '50px',
  },
  paper: {
    backgroundColor: 'white',
    width: 350,
    height: 230,
    marginTop: '10px',
  },
  cardContent: {
    fontSize: '12px',
    paddingLeft: '25px',
    paddingRight: '10px',
    paddingBottom: '10px',
    position: 'relative',
    bottom: '35%',
    paddingTop: '10px',
    color: 'black',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5px',
    },
  },
  orangebox: {
    width: '15%',
    position: 'relative',
    zIndex: '-1',
    right: '15px',
    bottom: '30px',
  },
}));
function Testimonial(props) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img className={classes.bgimg} src="images/thumbsup.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
<NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.TestimonialText}>
            <Typography variant="h3" className={classes.testimonialH1}>
              TESTIMONIALS
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.header1}>
            <Typography
              style={{ color:"#0C2D48", fontWeight: '400' }}
              variant="h4"
            >
              What Client Says About Us?
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: '40%',
                }}
                className="underline"
              ></div>
            </Typography>
          </Grid>
          <Grid item md={7} className={classes.cardGrid}>
            <div className={classes.box}></div>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: '#0C2D48' }}
            >
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: 'white' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography
                style={{ color: 'white' }}
                className={classes.cardContent}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={5} className={classes.cardGrid}>
            <Paper className={classes.paper}>
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: '#0d335d' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography className={classes.cardContent}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={7} className={classes.cardGrid}>
            <div className={classes.box}></div>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: '#0C2D48' }}
            >
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: 'white' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography
                style={{ color: 'white' }}
                className={classes.cardContent}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={5} className={classes.cardGrid}>
            <Paper className={classes.paper}>
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: '#0d335d' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography className={classes.cardContent}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={7} className={classes.cardGrid}>
            <div className={classes.box}></div>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: '#0C2D48' }}
            >
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: 'white' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography
                style={{ color: 'white' }}
                className={classes.cardContent}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={5} className={classes.cardGrid}>
            <Paper className={classes.paper}>
              <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />

              <img className={classes.willsmith} src="./images/willsmith.jpg" />
              <div className={classes.detailContainer}>
                <Typography style={{ color: '#0d335d' }} variant="subtitle1">
                  Will Smith
                </Typography>
                <Typography style={{ color: 'orangered' }} variant="h6">
                  CEO,Cantan Management Services
                </Typography>
                <img className={classes.starimg} src="./images/5star.png" />
              </div>

              <Typography className={classes.cardContent}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                assumenda minima distinctio id tempore corrupti ea nihil
                architecto mollitia aperiam, odio maxime eaque nulla error
                cupiditate, aut non corporis nesciunt.
              </Typography>
            </Paper>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Testimonial;
