import "../workshopStyles.css";

import {
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import Fade from "react-reveal/Fade";
import FooterPage from "../Footer";
import HeaderComponent from "../HeaderComponnent";
import NavBArMat from "../NavBarMat";
import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ServicesStyles from "./ServicesStyles";
import clientimg from "../assets/images/clients1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Service(props) {
  const classes = ServicesStyles();
  let history = useHistory();
  return (
    <div>
      <div className={classes.imageContainer}>
        <img
          className={classes.bgimg}
          style={{ opacity: 0.9 }}
          src="./images/ourservice.jpg"
        />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.serviceTextContainer}>
            <Typography
              variant="h3"
              className={classes.clientH1}
              style={{ fontFamily: "Anton, sans-serif", color: "white" }}
            >
              OUR SERVICE
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Fade top>
              <ScrollableAnchor id={"services"}>
                <Typography
                  style={{
                    color: "#0C2D48",
                    fontFamily: "Hammersmith One, sans-serif",
                    fontWeight: "400",
                  }}
                  variant="h2"
                  className={classes.HeaderText1}
                >
                  Consultancy Services
                </Typography>
              </ScrollableAnchor>
            </Fade>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              className="underline"
            ></div>

            <div className={classes.consultancysub}>
              <Fade bottom>
                <Typography
                  align="center"
                  style={{ fontSize: "18px" }}
                  variant="subtitle1"
                >
                  Hands-on consultancy guidance on establishment and
                  implementation of the management system, including support
                  services
                </Typography>
              </Fade>
            </div>
          </Grid>
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={0} style={{ marginTop: "4%" }}>
              <Grid item xs={12} sm container>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  className={classes.gridcontainer1}
                >
                  <Fade top>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Strategic business planning
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Six Sigma Program Implementation
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Cost reduction projects{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Facilitation of Kaizen/Operational Excellence Events{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        QA as a Service(QAaaS){" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          ISO 9001
                        </span>
                        - Quality Management System Requirements{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          ISO 14001
                        </span>
                        - Environment Management System Requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          IATF 16949
                        </span>
                        - Quality Management System Requirements for automotive
                        suppliers
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          ISO/IEC 27001
                        </span>
                        - Information Security Management System Requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          ISO/IEC 17025
                        </span>
                        - General requirements for the competency of testing and
                        calibration laboratories
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          ISO/IEC 20000-1
                        </span>
                        - Service Management System Requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          NIST 800-171/ CMMC
                        </span>
                        - Cybersecurity Maturity Model Certification
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Training and Implementation of DOE projects
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform IQ/OQ/PQ(software validation) per ICH Guidelines
                        and 21CFR Part 11 compliance requirements
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Critical process analysis and development of Business
                        Continuity and Disaster Recovery Plans
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Fade bottom>
                    <Paper elevation={0} className={classes.firstimgcontainer}>
                      <img
                        style={{ width: "100%" }}
                        src="./images/onlineL.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={0} style={{ marginTop: "4%" }}>
              <Grid item xs={12} sm container>
                <Grid item md={6} xs={12}>
                  <Fade left delay={1000}>
                    <Paper elevation={0} className={classes.secoundpaper}>
                      <img
                        style={{ width: "100%" }}
                        src="./images/onlineT.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
                <Grid item xs container direction="column">
                  <Fade top>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Implementation of{" "}
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          APQP, FMEA, MSA, SPC & PPAP for specific projects
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Training and obtaining PPAP from suppliers
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Supplier Assessments
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Establish and implement ITIL processes{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Establish and implement Metrics for IT Governance
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        IT Risk Management in line with Established frameworks{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform risk-based IT audits
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform Application control review
                      </Typography>
                    </Grid>

                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform{" "}
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          IQ/QQ/PQ(software validation) per ICH Guidelines and{" "}
                          <span>21CFR Part 11 compliance requirements</span>
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Critical process analysis and development of Business
                        Continuity and Disaster Recovery Plans{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Documentation of policies, {""}
                        <span style={{ color: "#0C2D48", fontWeight: "600" }}>
                          SOPs{""}
                        </span>
                        , Operator Instructions, Visual Aids, Control Plans and
                        Training Materials relevant to Quality, Information
                        Security, and Environment Management area
                      </Typography>
                    </Grid>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            className={classes.paper}
            style={{
              width: "100%",
              backgroundColor: "#0B132B",
              marginBottom: "-13px",
            }}
            elevation={3}
          >
            <Grid item md={12} className={classes.Header1}>
              <Fade bottom>
                <ScrollableAnchor id={"approach"}>
                  <Typography
                    style={{
                      color: "white",
                      fontFamily: "Hammersmith One, sans-serif",
                      fontWeight: "400",
                    }}
                    variant="h2"
                    className={classes.HeaderText1}
                  >
                    Consultancy Approach
                  </Typography>
                </ScrollableAnchor>
              </Fade>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="underline"
              ></div>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{ marginTop: "5%", marginBottom: "5%" }}
            >
              <Grid item xs={12} sm container>
                <Fade top>
                  <Grid item xs container direction="column">
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "white" }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Understand the client needs and expectations{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "white" }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform "AS IS" assessment to understand the baseline
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        style={{ color: "white" }}
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a detailed technical proposal and get agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: "white" }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a commercial proposal and get agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: "white" }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Prepare a project plan and reach agreement
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: "white" }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Perform onsite visits/ virtual meetings as per the plan
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: "white" }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Unlimited offline support
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        style={{ color: "white" }}
                        gutterBottom
                        variant="subtitle1"
                        className={classes.typotext}
                      >
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Periodic submission of a progress report and review with
                        Stake Holders{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Fade>
                <Grid item md={6} xs={12}>
                  <Fade bottom>
                    <Paper className={classes.paper3} style={{}}>
                      <img
                        style={{ width: "100%" }}
                        src="./images/random1.jpg"
                      />
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          <Grid Container className={classes.TrainingWorkshop}>
            <Grid item md={12} className={classes.item1}>
              <Fade bottom>
                <ScrollableAnchor id={"training"}>
                  <Typography variant="h2" className={classes.workshopTitle}>
                    Training Workshops
                  </Typography>
                </ScrollableAnchor>
              </Fade>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="underline"
              ></div>
            </Grid>
            <Grid container style={{ width: "100%" }}>
              <Grid item md={6}>
                <Fade left>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Strategic Business Planning
                      </Typography>
                    </div>
                  </div>

                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Advanced Product Quality Planning{" "}
                        <span className={classes.spanText}>(APQP)</span>
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Failure Mode and Effect Analysis{" "}
                        <span className={classes.spanText}>(FMEA)</span>
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Measurement Systems Analysis{" "}
                        <span className={classes.spanText}>(MSA)</span>
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Statistical Process Control{" "}
                        <span className={classes.spanText}>(SPC)</span>
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Production Part Approval Process{" "}
                        <span className={classes.spanText}>(PPAP)</span>
                      </Typography>
                    </div>
                  </div>

                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Six Sigma - Green Belt
                      </Typography>
                    </div>
                  </div>
                </Fade>
              </Grid>
              <Grid item md={6} className={classes.item2}>
                <div className={classes.imageContainer}>
                  <img
                    src="./images/workshops.jpg"
                    alt=""
                    className={classes.workshopimg}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid Container className={classes.TrainingWorkshop2}>
            <Grid container style={{ width: "100%" }}>
              <Grid item md={6} className={classes.item2}>
                <div className={classes.imageContainer}>
                  <img
                    src="./images/workshop2.jpg"
                    alt=""
                    className={classes.workshopimg}
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <Fade right>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <span>
                          <img
                            style={{ paddingRight: "10px" }}
                            className={classes.img}
                            alt="complex"
                            src="./images/logosmall.png"
                          />
                        </span>
                        Measurement System Uncertainty
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Cost Reduction
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Operational Excellence & Lean Tools
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Continual Improvement
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Corrective Action{" "}
                        <span className={classes.spanText}>
                          (Problem Solving)
                        </span>
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Risk Management
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Design of Experiments
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Mistake Proofing
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        IT Risk Management
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        User responsibilities in Information Security Management
                        System
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.textContainer}>
                    <div>
                      <Typography
                        variant="subtitle1"
                        className={classes.trainingText}
                      >
                        {" "}
                        <img
                          style={{ paddingRight: "10px" }}
                          className={classes.img}
                          alt="complex"
                          src="./images/logosmall.png"
                        />
                        Cost of poor Quality
                      </Typography>
                    </div>
                  </div>
                </Fade>
              </Grid>
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
                onClick={() => history.push("./contact#message")}
              >
                Book a Consultation
              </Button>
            </Grid>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Service;
