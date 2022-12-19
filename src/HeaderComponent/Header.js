import "../HomeStyles.css";

import { Box, Button, Hidden, Typography } from "@material-ui/core";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Grid from "@material-ui/core/Grid";
import Navbar from "./NavBar";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: " 102vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: " rgba(111,111,111,0.7)",
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
    color: "white",
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
    color: "white",

    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  email: {
    position: "absolute",
    top: "-4px",
    left: "60px",
    fontSize: "16px",
    color: "white",
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
    paddingTop: "10px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  touchBtn: {
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",

    [theme.breakpoints.down("md")]: {},
  },
  inTouchBtn: {
    position: "absolute",

    left: "80%",
    top: "3%",
    [theme.breakpoints.down("md")]: {},
  },
  textContainer: {
    paddingLeft: 15,
  },
  text: {
    fontSize: "16px",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 500,

    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  icons: {
    color: "white",
  },
}));

function Header(props) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src="/images/company.jpg"
          alt="companyImg"
          className={classes.companyImg}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "78%" }}>
          <Hidden mdDown>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="/images/logoBg.png"
                  alt=""
                  style={{ width: "135px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "15px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PhoneInTalkOutlinedIcon className={classes.icons} />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={classes.text}>
                    +1(248)444-8097
                  </Typography>
                  <Typography
                    className={classes.text}
                    style={{ textAlign: "center" }}
                  >
                    Give us a call
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "15px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    "mailto:thirupu@canton-management.com; sales@canton-management.com?&cc=palani659@gmail.com"
                  )
                }
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <EmailOutlinedIcon className={classes.icons} />
                </div>
                <div className={classes.textContainer}>
                  <Typography className={classes.text}>
                    sales@canton-management.com
                  </Typography>
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <Button
                  className={classes.touchBtn}
                  variant="outlined"
                  size="medium"
                  style={{ borderRadius: "20px", borderColor: "white" }}
                  onClick={() => history.push("./contact#message")}
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

export default Header;
