import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Hidden, Typography } from "@material-ui/core";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Navbar from "./NavBar";
import "../HomeStyles.css";

const useStyles = makeStyles((theme) => ({
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
      width: "50%",
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
}));

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src="/images/company.jpg"
          alt="companyImg"
          className={classes.companyImg}
        />
      </div>

      <Grid container spacing={3}>
        <Hidden mdDown>
          <Grid item xl={3} md={2} className={classes.logoContainer}>
            <img
              className={classes.logo}
              src="/images/logoBg.png"
              alt="companylogo"
            />
          </Grid>
          <Grid item xl={3} md={2} className={classes.phoneContainer}>
            <div className={classes.phoneDetails}>
              <PhoneInTalkOutlinedIcon
                style={{ position: "relative", top: "19px", right: "50px",color:"white" }}
              />
              <Typography className={classes.phoneNumber} variant="h6">
                +1(242)848-2805
              </Typography>
              <Typography style={{ fontSize: "16px",paddingTop:"12px",fontWeight:"500",color:"white" }}>
                Give us a call
              </Typography>
            </div>
          </Grid>
          <Grid item xl={3} md={2} className={classes.emailContainer}>
            <div className={classes.emailDetails}>
              <EmailOutlinedIcon
                style={{ position: "relative", top: "-10px",color:"white" }}
              />
              <Typography className={classes.email} variant="h6">
                cantonManagement@gmail.com
              </Typography>
              <Typography style={{fontWeight:"500"}} className={classes.emailText}>
                Get in Touch
              </Typography>
            </div>
          </Grid>
          <Grid item xl={3} md={2} className={classes.inTouchBtn}>
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
      </Grid>
    </div>
  );
}

export default Header;
