import { Box, Button, Hidden, Typography } from '@material-ui/core';

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Grid from '@material-ui/core/Grid';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  //   imageContainer:{
       
  //     // position: "absolute",
  //     // width: "100%",
  //     // height: "102vh",
  //     // top: 0,
  //     // left: 0,
  //     // right: 0,
  //     // bottom: 0,
  //     // backgroundColor:" rgba(111,111,111,2.0)",
  //     // zIndex: -1,
  //     // cursor: "pointer",
  //   },
    
  //   root: {
  //       flexGrow: 1,
  //     },
  // companyImg: {
  //   margin: 0,
  //   display: "block",
  //   objectFit: "cover",
  //   width: "100%",
  //   height: "auto",
  //   position: "absolute",
  //   opacity: ".4",
  //   maxWidth: "100%",
  //   maxHeight: "102vh",
  //   [theme.breakpoints.down("md")]: {
  //     height: "103%",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     height: "83%",
  //   },
  // },
   
   
  // logo: {
  //   width: "20%",
  //   color:"white",
  //   // filter: "invert(48%) sepia(13%) saturate(3207%) hue-rotate(335deg) brightness(95%) contrast(80%)",
      
  //   [theme.breakpoints.down("xl")]: {
  //     width: "50%",
  //   },
  // },

  // logoContainer: {
  //   position: "absolute",
  //   left: "10%",
  //   top: "0%",
  //   width: "15%",
  // },
  // phoneContainer: {
  //   position: "absolute",
  //   left: "30%",
  //   top: "4%",
  // },
  // phoneDetails: {
  //   position: "absolute",
  //   left: "40px",
  //   top: "-15px",
  //   width: "130px",
   
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "10px",
  //   },
  // },
  // phoneNumber: {
  //   fontSize: "16px",
  //   position: "absolute",
  //   top: "10px",
  //   right: "2px",
  //   width: "100%",
  //   color:"white",
    
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "10px",
  //   },
  // },
  // email: {
  //   position: "absolute",
  //   top: "-4px",
  //   left: "60px",
  //   fontSize: "16px",
  //   color:"white",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "10px",
  //   },
  // },
  // emailContainer: {
  //   position: "absolute",
  //   left: "50%",
  //   top: "35px",
  //   [theme.breakpoints.down("md")]: {},
  // },
  // emailText: {
  //   fontSize: "16px",
  //   left: "48px",
  //   bottom: "24px",
  //   position: "relative",
  //   paddingTop:"10px",
  //   color:"white",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "12px",
  //   },
  // },
  // touchBtn: {
  //   paddingTop:"10px",
  //   paddingBottom:"10px",
  //   color:"white",
        
  //       [theme.breakpoints.down("md")]: {
    
    
  //       },
  //     },
  // inTouchBtn: {
  //   position: "absolute",

  //   left: "80%",
  //   top: "3%",
  //   [theme.breakpoints.down("md")]: {},
  // },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height:" 102vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:" rgba(111,111,111,0.7)",
    zIndex: -1,
    background: "linear-gradient(90deg, black, transparent)",


  },

  root: {
    flexGrow: 1,
  },
  companyImg: {
    margin: 0,
    display: "block",
    objectFit: "cover",
    width: "100%",
    height: "auto",
    position: "absolute",
    opacity: ".4",
    maxWidth: "100%",
    maxHeight: "102vh",
    [theme.breakpoints.down("md")]: {
      height: "103%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "103%",
    },
  },
  logo: {
    width: "20%",
    color:"white",
    // filter: "invert(48%) sepia(13%) saturate(3207%) hue-rotate(335deg) brightness(95%) contrast(80%)",
      
    [theme.breakpoints.down("xl")]: {
      width: "135px",
    },
  },

  logoContainer: {
    position: "absolute",
    left: "10%",
    top: "0%",
    width: "15%",
  },
  phoneContainer: {
    position: "absolute",
    left: "30%",
    top: "4%",
  },
  phoneDetails: {
    position: "absolute",
    left: "40px",
    top: "-15px",
    width: "130px",
   
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  phoneNumber: {
    fontSize: "16px",
    position: "absolute",
    top: "10px",
    right: "2px",
    width: "100%",
    color:"white",
    
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  email: {
    position: "absolute",
    top: "-4px",
    left: "60px",
    fontSize: "16px",
    color:"white",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  emailContainer: {
    position: "absolute",
    left: "50%",
    top: "35px",
    [theme.breakpoints.down("md")]: {},
  },
  emailText: {
    fontSize: "16px",
    left: "48px",
    bottom: "24px",
    position: "relative",
    paddingTop:"10px",
    color:"white",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  touchBtn: {
    paddingTop:"10px",
    paddingBottom:"10px",
    color:"white",
        
        [theme.breakpoints.down("md")]: {
    
    
        },
      },
  inTouchBtn: {
    position: "absolute",

    left: "80%",
    top: "3%",
    [theme.breakpoints.down("md")]: {},
  },
  textContainer:{
    paddingLeft:15
  },
  text:{
    fontSize: "16px",
    color:"white",
    fontFamily:"Poppins",
    fontWeight:500,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  icons:{
    color:"white"
  }
  }));





function HeaderComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            {/* <Navbar/> */}
                     

             {/* <Grid container spacing={3}>

             
        <Hidden mdDown >
        <Grid item xl={3} md={2}  className={classes.logoContainer} >
       
            <img className={classes.logo} src="/images/logoBg.png" alt="companylogo"/>
           
        </Grid>
        <Grid item xl={3} md={2} className={classes.phoneContainer}>
        <div className={classes.phoneDetails}>
            <PhoneInTalkOutlinedIcon style={{position:"relative",top:"15px",right:"50px",color:"white"}}/>
            <Typography className={classes.phoneNumber} variant="h6">+1(242)848-2805</Typography>
            <Typography style={{ fontSize: "16px",paddingTop:"12px",fontWeight:"500",color:"white" }}>
                Give us a call
              </Typography>
            </div>
        </Grid>
        <Grid item xl={3} md={2} className={classes.emailContainer} >
        <div className={classes.emailDetails}>
            <EmailOutlinedIcon  style={{position:"relative",top:"-10px",color:"white"}}/>
            <Typography className={classes.email} variant="h6">cantonManagement@gmail.com</Typography>
            <Typography style={{fontWeight:"500"}} className={classes.emailText}>Get in Touch</Typography>
            </div>
        </Grid>
        <Grid item xl={3} md={2} className={classes.inTouchBtn} >

        <Button
              className={classes.touchBtn}
              variant="outlined"
              size="medium"
              style={{borderRadius:"20px",  borderColor:"white"}}
            >
              Get in Touch
            </Button>
        </Grid>
   
        </Hidden>
       
             </Grid> */}
              <div style={{display: 'flex',justifyContent: 'center'}}>
      <div style={{width:"78%"}}>
      <Hidden mdDown>
        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <img src="/images/logoBg.png" alt="" style={{width:"135px"}}/>
        </div>
        <div style={{display:"flex", flexDirection:"row",paddingTop:"15px"}}>
        <div style={{display:"flex",alignItems:"center"}}>
        <PhoneInTalkOutlinedIcon className={classes.icons}/>
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.text}>+1(248)842-2805</Typography>
          <Typography  className={classes.text}>Give us a call</Typography>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row",paddingTop:"15px"}}>
        <div style={{display:"flex",alignItems:"center"}}>
        <EmailOutlinedIcon className={classes.icons}
              />
        </div>
        <div className={classes.textContainer}>
          <Typography  className={classes.text}>sales@canton-management.com  </Typography>
          {/* <Typography  className={classes.text}>Get in Touch</Typography> */}
        </div>
        </div>

      <div style={{paddingTop:"10px"}}>
      <Button
              className={classes.touchBtn}
              variant="outlined"
              size="medium"
              style={{borderRadius:"20px",  borderColor:"white"}}
            >
              Get in Touch
            </Button>
      </div>
        </div>
</Hidden>
      </div>
    </div>
        </div>
    );
}

export default HeaderComponent;