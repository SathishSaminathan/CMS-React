import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
import clientimg from '../assets/images/clients1.jpg'
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
import NavBArMat from '../NavBarMat';

import HeaderComponent from '../HeaderComponnent';
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
       paddingLeft:"12.8em",
        marginBottom: '60px',
        [theme.breakpoints.down('md')]: {
          padding:"0",
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
        },
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
        width: '80%',color:"#0C2D48",fontFamily: 'Hammersmith One, sans-serif' ,
        paddingLeft:"8em",
        [theme.breakpoints.down('md')]: {
          padding:"0",
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
        },
      },
      paper:{
          width:200,
          height:200,
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display:"flex",
          marginBottom:"10px",
          marginTop:"10px",
          [theme.breakpoints.down('md')]: {
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center",
            display:"flex",
          },
      },
      cardimg:{
          width:"70%"
      },
      subtext:{
        textAlign:"center",paddingLeft:"25em",paddingTop:"20px",fontSize:"23px",width:"70%",
        [theme.breakpoints.down('md')]: {
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display:"flex",
          left:"0",
          marginTop:"0px",
          padding:0,
        },
      },
      logoContainer:{
      paddingLeft:"20em",
       
       marginTop:"50px"
,
[theme.breakpoints.down('md')]: {
  display:"flex",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  marginLeft:"40px",
  left:"0",
  marginTop:"0px"
},
      }
      
}));
function Client(props) {
    const classes = useStyles();
    return (
        <div>
            <div >
        <img className={classes.bgimg}  src={clientimg} />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ClientText}>
            <Typography variant="h3" className={classes.clientH1}>
              OUR CLIENTS
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Typography   variant="h3" className={classes.HeaderText1}>
              Here are just a few examples of client relationships.
            </Typography>
            <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: '46%',
                  
                }}
                className="underline"
              ></div>
              <Typography className={classes.subtext}>
Our clients are over 400 of the worlds leading organizations,from a wide range of sectors.
                </Typography></Grid>
          <Grid container spacing={0} style={{marginBottom:"50px"}} className={classes.logoContainer}>
        <Grid item xs md={2}>
          <Paper className={classes.paper} elevation={20}>
            <img className={classes.cardimg} src="./images/mspng.png"/>

          </Paper>
        </Grid>
        <Grid item xs md={2}>  
          <Paper className={classes.paper} elevation={20}>
              
          <img  className={classes.cardimg} src="./images/ibmpng.png"/>
          </Paper>
        </Grid>
        <Grid item xs md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/fedexpng.png"/>
          </Paper>
        </Grid>
        <Grid item xs md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/nikepng.png"/>
          </Paper>
        </Grid>
        <Grid item xs md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/addidaspng.png"/>
          </Paper>
        </Grid>
      </Grid>
      <FooterPage />

          </Grid>
          
        </ThemeProvider>
        </div>
    );
}

export default Client;