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
        [theme.breakpoints.down('md')]: {
          paddingLeft:"20px"
        },
        [theme.breakpoints.down('xs')]: {
         
        },
      },
      HeaderText1: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        marginTop: '50px',
       color:"#0C2D48",fontFamily: 'Hammersmith One, sans-serif' ,
       fontSize:"60px",
       
        [theme.breakpoints.down('md')]: {
          padding:"0",
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          fontSize:"40px",
        },
        [theme.breakpoints.down('xs')]: {
        
          fontSize:"30px",
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
        textAlign:"center",
        paddingTop:"20px",
        fontSize:"23px",
       
      },
      logoContainer:{
      
       
       marginTop:"50px",
      
[theme.breakpoints.down('md')]: {
  display:"flex",
  justifyContent:"space-evenly",
  alignContent:"center",
  alignItems:"center",
  left:"0",
  margin:"0",
  padding:"0"
},
      },
      consultancysub: {
       
     
      },
      
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
          <div className={classes.consultancysub}>
            <Typography   variant="h3" className={classes.HeaderText1}>
              Here are just a few examples of client relationships.
            </Typography>
            </div>
            <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  left: '46%',
                  
                }}
                className="underline"
              ></div>
                <div className={classes.consultancysub}>
              <Typography className={classes.subtext}>
Our clients are over 400 of the worlds leading organizations,from a wide range of sectors.
                </Typography>
                </div></Grid>
          <Grid container direction="row"
  justify="center"
  alignItems="center" spacing={0} style={{marginBottom:"100px"}} className={classes.logoContainer}>
        <Grid item  sm={6} md={2}>
          <Paper className={classes.paper} elevation={20}>
            <img className={classes.cardimg} src="./images/mspng.png"/>

          </Paper>
        </Grid>
        <Grid item sm={6} md={2}>  
          <Paper className={classes.paper} elevation={20}>
              
          <img  className={classes.cardimg} src="./images/ibmpng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/fedexpng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
          <Paper className={classes.paper} elevation={20}>
          <img className={classes.cardimg} src="./images/nikepng.png"/>
          </Paper>
        </Grid>
        <Grid item sm={6}  md={2}>
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