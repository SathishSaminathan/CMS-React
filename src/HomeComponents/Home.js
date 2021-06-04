import "../HomeStyles.css";

import {
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { MDBMask, MDBView } from "mdbreact";

import Button from "@material-ui/core/Button";
import Carousel from "react-multi-carousel";
import DoubleCarosel from "../DoubleCarosel";
import Fab from "@material-ui/core/Fab";
import Fade from "react-reveal/Fade";
import FooterPage from "../Footer";
import Header from "../HeaderComponent/Header";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-router-dom";
import NavBArMat from "../NavBarMat";
import React from "react";
import ScrollUp from "../ScrollUp";
import SimpleCarosel from "../SimpleCarosel";
import Slider from "react-slick";
import { goToAnchor } from "react-scrollable-anchor";
import { useHistory } from "react-router-dom";
import { useStyles } from "./Styles.js";

// import Carousel from "../carousolComponent";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function Home(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <NavBArMat />
        <Grid xl="auto" container id="back-to-top-anchor">
          <Grid item spacing={2} xs={12} className={classes.cmsContent}>
            <Typography
              style={{
                marginBottom: "10px",
                fontFamily: "Noto Sans KR, sans-serif",
                color: "white",
              }}
              variant="h4"
            >
              CMS IS A
            </Typography>
            <Typography className={classes.practicaltext} variant="h1">
              PRACTICAL & "SHOW-HOW"
            </Typography>
            <Typography
              style={{ marginBottom: "20px", color: "white" }}
              variant="h5"
            >
              Type of consultancy services organization
            </Typography>
            <Button
              onClick={() => history.push("./about")}
              variant="contained"
              style={{
                backgroundColor: "orangered",
                marginRight: "20px",
                borderRadius: "30px",
                color: "white",
                marginBottom: "10px",
                paddingTop: "18px",
                paddingBottom: "18px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Our Services
            </Button>
            <Button
              onClick={() => history.push("./about")}
              variant="outlined"
              style={{
                marginRight: "20px",
                borderRadius: "30px",
                color: "white",
                marginBottom: "10px",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderWidth: "2px",
                borderColor: "white",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={0}>
              <Grid item>
                <Fade left>
                  <Paper className={classes.paper1} elevation={0}>
                    <img
                      style={{
                        width: "90px",
                        marginBottom: "20px",
                        marginTop: "10px",
                      }}
                      src="../images/callAgent.png"
                    />
                    <Typography
                      style={{ fontSize: "22px", marginBottom: "10px" }}
                      variant="h5"
                    >
                      Consulting Services
                    </Typography>

                    <Typography className={classes.cardText} variant="h6">
                      Hands-on consultancy guidance on establishment and
                      implementation of the management system, including support
                      services.
                    </Typography>
                    {/* <Typography
                      style={{
                        fontSize: '12px',
                        textDecoration: 'underline',
                        color: 'white',
                      }}
                      variant="h6"
                    >
                    </Typography> */}
                    <Link
                      to="./service#services"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Read More
                    </Link>
                  </Paper>
                </Fade>
              </Grid>

              <Grid item>
                <Fade bottom>
                  <Paper className={classes.paper2} elevation={0}>
                    <img
                      className={classes.card2img}
                      style={{ width: "90px", marginBottom: "20px" }}
                      src="../images/pickingPeople.png"
                    />
                    <Typography
                      style={{ fontSize: "22px", marginBottom: "10px" }}
                      variant="h5"
                    >
                      Consultancy Approach
                    </Typography>

                    <Typography variant="h6" className={classes.cardText}>
                      All begins with our team. We have topnotch talent who
                      understands your business, understands your problems, and
                      works hand-in-hand with you to identify real
                      transformation opportunities.
                    </Typography>
                    {/* <Typography
                      style={{
                        fontSize: '12px',
                        textDecoration: 'underline',
                        color: 'white',
                      }}
                      variant="h6"
                    >
                    </Typography> */}
                    <Link
                      to="./service#approach"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Read More
                    </Link>
                  </Paper>
                </Fade>
              </Grid>

              <Grid item>
                <Fade right>
                  <Paper className={classes.paper3} elevation={0}>
                    <img
                      style={{
                        width: "90px",
                        marginBottom: "20px",
                        marginTop: "10px",
                      }}
                      src="../images/presentation.png"
                    />
                    <Typography
                      style={{ fontSize: "22px", marginBottom: "0px" }}
                      className={classes.cardText}
                      variant="h5"
                    >
                      Training Workshops
                    </Typography>

                    <Typography className={classes.cardText} variant="h6">
                      CMS offers a wide range of training and management
                      consultancy services across a variety of learning and
                      development areas.
                    </Typography>
                    <Link
                      to="./service#training"
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      Read More
                    </Link>
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className={classes.image1Container}>
            <Fade bottom>
              <img className={classes.img1} src="../images/looking.jpg" />

              <img className={classes.img2} src="../images/working.jpg" />
              <img className={classes.imgLogo} src="../images/logosmall.png" />
            </Fade>
          </Grid>
          <Grid md={4} item className={classes.cantonContainer}>
            <div class="devicer"></div>
            <Typography
              variant="h4"
              style={{ marginLeft: "40px", color: "orangered" }}
            >
              About Us
            </Typography>
            <Fade top>
              <Typography
                style={{
                  width: "50%",
                  color: "#0C2D48",
                  fontFamily: "Hammersmith One, sans-serif",
                }}
                variant="h2"
                gutterBottom="true"
              >
                Canton Management
              </Typography>
              <Typography variant="h6" gutterBottom="true">
                Our core competencies are{" "}
                <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                  Management Consultancy Services
                </span>{" "}
                on Integrated Management System(IMS), Business Process{" "}
                <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                  Re-Engineering
                </span>{" "}
                and improvement.
              </Typography>
              <Button
                className={classes.btnLearn}
                onClick={() => history.push("./about")}
                style={{
                  backgroundColor: "orangered",
                  borderRadius: "30px",

                  color: "white",
                  marginTop: "20px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
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
              <Typography variant="h4" style={{ color: "white" }}>
                {" "}
                Our{" "}
              </Typography>
              <Typography
                variant="h4"
                style={{ color: "white", fontWeight: "600" }}
              >
                {" "}
                News & blog{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.blogCard}>
              <Paper
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  backgroundColor: "transparent",
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
                  marginLeft: "10px",
                  marginRight: "10px",
                  backgroundColor: "transparent",
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
                  marginLeft: "10px",
                  marginRight: "10px",
                  backgroundColor: "transparent",
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
              <Button
                onClick={() => history.push("/blog")}
                variant="outlined"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                Go To Blog
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.partnerContainer} spacing={3}>
            <Grid item xs={12} md={12} className={classes.trustcontainer}>
              <Typography style={{ color: "white", fontSize: "30px" }}>
                {" "}
                <span class="devicer1"></span>TRUST WE GOT
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={classes.partnerText}>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Hammersmith One, sans-serif",
                }}
                variant="h1"
              >
                OUR PARTNERS
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <SimpleCarosel />
            </Grid>
          </Grid>
          <Grid container className={classes.cardCarosel}>
            <Grid item xs={12} md={12} style={{ paddingTop: 60 }}>
              <Typography
                variant="h4"
                style={{
                  color: "#1687a7",
                  fontFamily: "Hammersmith One, sans-serif",
                }}
              >
                From Our Great Clients
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                className={classes.clientText}
                variant="h3"
                style={{
                  color: "#0C2D48",
                  fontFamily: "Hammersmith One, sans-serif",
                }}
              >
                What clients Say About Us ?
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} style={{ marginBottom: "60px" }}>
              <DoubleCarosel />
            </Grid>
          </Grid>
          <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className={classes.businesstext}>
                We Help You unlock & unleash the power within your business
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                className={classes.btnconsol}
                onClick={() => {
                  history.push("./contact#message");
                }}
              >
                Book a Consultation
              </Button>
            </Grid>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
      <ScrollUp {...props}>
        <Fab
          style={{
            backgroundColor: "#a40606",
            backgroundImage:
              " linear-gradient(315deg, #a40606 0%, #d98324 74%)",
            opacity: "0.5",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollUp>
    </div>
  );
}

export default Home;
