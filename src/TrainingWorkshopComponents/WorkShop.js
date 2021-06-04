import '../workshopStyles.css';

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

import FooterPage from '../Footer';
import HeaderComponent from '../HeaderComponnent';
import NavBArMat from '../NavBarMat';
import React from 'react';
import clientimg from '../assets/images/clients1.jpg'
import { makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
    imageContainer: {},
  
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
        marginLeft: '140px',
        marginBottom: '60px',
      },
      clientH1: {
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('xs')]: {
          position: 'absolute',
          right: '10%',
        },
        

    },
    HeaderText1: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
           marginTop:"90px",
           
          },
      },
      logimg:{
          
      },
      img: {
        display: "block",
        maxWidth: "8%",
        maxHeight: "10",
        display: "inline-block",
        [theme.breakpoints.down('md')]: {
            maxWidth: "5%",
          },
          [theme.breakpoints.down('xs')]: {
            maxWidth: "8%",
          },
      },
      paper:{
          paddingLeft:"150px",
          [theme.breakpoints.down('xs')]: {
            paddingLeft:"20px",
            width:" max-content",
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
        marginBottom:"-25px"
      },
      

}));
function WorkShop(props) {

    const classes = useStyles();

    return (
        <div>
             <div >
        <img className={classes.bgimg}  src="./images/training.jpg"/>
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ClientText}>
            <Typography variant="h3" className={classes.clientH1}>
              TRAINING WORKSHOP
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Typography style={{ color: '#0B132B', fontWeight: '400' }} variant="h4" className={classes.HeaderText1}>
                Training Workshops
            </Typography>
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
          <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={0} style={{marginTop:"10%"}}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" >
              <Grid
                item
                xs
                
                
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Stratergic buissness planning
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
                <Paper style={{width:450,height:400}}><img style={{width:"100%",}} src="./images/onlineL.jpg"/></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={0} style={{marginTop:"10%"}}>
          <Grid item xs={12} sm container>
          <Grid item md={6} xs={12}>
                <Paper elevation={0} style={{width:450,height:650}}><img style={{width:"90%"}} src="./images/onlineT.jpg"/></Paper>
            </Grid>
            <Grid item xs container direction="column" >
              <Grid
                item
                xs
                
                
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Stratergic buissness planning
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ha.
                </Typography>
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
      <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" style={{ color: 'white' }}>
                We Help You unlock & unleash the power within your 
                business
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
          <FooterPage />
          </Grid>
          </ThemeProvider>
        </div>
    );
}

export default WorkShop;