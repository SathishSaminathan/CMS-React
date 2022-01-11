import '../testimonialStyles.css';

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

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from 'react-reveal/Fade';
import FooterPage from '../Footer';
import HeaderComponent from '../HeaderComponnent';
import NavBArMat from '../NavBarMat';
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from './TestimonialStyles.js';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Testimonial(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.bgimg} src="images/thumbsup.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.testimonialTextContainer}>
            <Typography
              variant="h3"
              className={classes.testimonialH1}
              style={{ fontFamily: 'Anton, sans-serif', color: 'white' }}
            >
              TESTIMONIALS
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.header1}>
            <Fade bottom delay={2000}>
              <ScrollableAnchor id={'Walker'}>
                <Typography
                  className={classes.HeaderText1}
                  style={{ color: '#0C2D48', fontWeight: '400' }}
                  variant="h3"
                >
                  What Client Says About Us?
                  <div className="underline"></div>
                </Typography>
              </ScrollableAnchor>
            </Fade>
          </Grid>
          <Grid
            container
            md={12}
            sm={12}
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.secoundaryGrid}
          >
            <Grid item md={12} sm={12} className={classes.cardGrid}>
              <div style={{ position: 'relative' }}>
                <Paper
                  className={classes.root}
                  style={{ backgroundColor: '#0C2D48' }}
                >
                  {/* <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
        />
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
          <Typography gutterBottom variant="h5" component="h2" style={{ color: 'white' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography style={{ color: 'white', fontSize:"16px", }} variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography> */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div style={{ width: '100%' }}>
                        <img
                          src="./images/profileimg1.png"
                          className={classes.media}
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          width: '100%',
                          justifyContent: 'flex-end',
                          display: 'flex',
                        }}
                      >
                        <img
                          className={classes.starimg}
                          src="./images/5star.png"
                        />
                      </div>
                    </div>
                    <div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{ color: 'white' }}
                      >
                        G. Walker
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                        component="p"
                        style={{ color: 'orangered' }}
                      >
                        Business Controller
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                        component="p"
                        style={{ color: 'orangered' }}
                      >
                        EMAG LLC
                      </Typography>
                      <p
                        style={{
                          color: 'white',
                          fontSize: '16px',
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                        }}
                      >
                        CMS Consultants has worked with our company less than
                        one year in a consulting capacity involving both ISO
                        Standards 9001: 2015 as well as 14001: 2015. That
                        included preparation for, and leading us through one
                        surveillance audit for each standard. He is
                        professional, courteous, and focused on the substantive
                        matters at hand. Palani’s practical and make-it-work
                        approach has been especially helpful with our Managers
                        {/* <br/>
Shawn Etheridge, SVP<br/>
ECCO Select<br/>

I am pleased to endorse CMS Consultants Masilamani without reservation.  My company is an IT staffing and
services business that had an urgent need for ISO certification.  While many vendors said they could not
meet our timeline, CMS Consultants agreed to aid us.  As part of his consultancy and evidence of willingness to see
us succeed he outlined responsibilities and risks so all parties understood what was required.  Over the
course of the certification evolution CMS Consultants quickly understood our industry and existing business
practices and provided exceptional subject matter expertise backed by unparalleled support.  The result
of CMS Consultants’s work with us was a flawless Stage 2 audit on the demanding timeline we had and we simply
could not be more pleased with the outcome.
We will continue to work with CMS Consultants in the future as his work ethic and commitment to client success
make him an absolute must have for any ISO or CMMI work.
<br/>
<br/>
Russ McDowell<br/>
Director, Technology Services<br/>
ECCO Select Corporation<br/> */}
                      </p>
                    </div>
                  </div>
                </Paper>
                <img
                  className={classes.orangebox}
                  src="../images/orangebox.png"
                />
              </div>
            </Grid>
            <Grid item md={12} sm={12} className={classes.cardGrid}>
              <div style={{ position: 'relative' }}>
                <ScrollableAnchor id={'Shawn'}>
                  <Paper
                    className={classes.root}
                    style={{ backgroundColor: '#0C2D48' }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <div style={{ width: '100%' }}>
                          <img
                            src="./images/profileimg1.png"
                            className={classes.media}
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            width: '100%',
                            justifyContent: 'flex-end',
                            display: 'flex',
                          }}
                        >
                          <img
                            className={classes.starimg}
                            src="./images/5star.png"
                          />
                        </div>
                      </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ color: 'white' }}
                        >
                          Shawn Etheridge
                        </Typography>

                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                          SVP
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                          ECCO Select Corporation
                        </Typography>
                        <p
                          style={{
                            color: 'white',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                          }}
                        >
                          The most critical decision we made in pursuing 3 ISO
                          certifications simultaneously was to hire Canton
                          Management Services. We were able to organize quickly,
                          construct an effective management system, and pass all
                          three audits in under 4 months. Remarkable.
                        </p>
                      </div>
                    </div>
                  </Paper>
                </ScrollableAnchor>

                <img
                  className={classes.orangebox}
                  src="../images/orangebox.png"
                />
              </div>
            </Grid>
            <Grid item md={12} sm={12} className={classes.cardGrid}>
              <div style={{ position: 'relative' }}>
                <ScrollableAnchor id={'Russ'}>
                  <Paper
                    className={classes.root}
                    style={{ backgroundColor: '#0C2D48' }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <div style={{ width: '100%' }}>
                          <img
                            src="./images/profileimg1.png"
                            className={classes.media}
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            width: '100%',
                            justifyContent: 'flex-end',
                            display: 'flex',
                          }}
                        >
                          <img
                            className={classes.starimg}
                            src="./images/5star.png"
                          />
                        </div>
                      </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ color: 'white' }}
                        >
                          Russ McDowell
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                          Director, Technology Services
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                          ECCO Select Corporation
                        </Typography>
                        <p
                          style={{
                            color: 'white',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                          }}
                        >
                          I am pleased to endorse CMS Consultants without
                          reservation.  My company is an IT staffing and
                          services business that had an urgent need for ISO
                          certification.  While many vendors said they could not
                          meet our timeline, CMS agreed to aid us.  As part of
                          thier consultancy and evidence of willingness to see
                          us succeed they outlined responsibilities and risks so
                          all parties understood what was required.  Over the
                          course of the certification evolution CMS quickly
                          understood our industry and existing business
                          practices and provided exceptional subject matter
                          expertise backed by unparalleled support.  The result
                          of CMS’s work with us was a flawless Stage 2 audit on
                          the demanding timeline we had and we simply could not
                          be more pleased with the outcome. We will continue to
                          work with CMS in the future as their work ethic and
                          commitment to client success make them an absolute
                          must have for any ISO or CMMI work
                        </p>
                      </div>
                    </div>
                  </Paper>
                </ScrollableAnchor>
                <img
                  className={classes.orangebox}
                  src="../images/orangebox.png"
                />
              </div>
            </Grid>
            <Grid item md={12} sm={12} className={classes.cardGrid}>
              <div style={{ position: 'relative' }}>
                <ScrollableAnchor id={'RussMC'}>
                  <Paper
                    className={classes.root}
                    style={{ backgroundColor: '#0C2D48' }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <div style={{ width: '100%' }}>
                          <img
                            src="./images/profileimg1.png"
                            className={classes.media}
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            width: '100%',
                            justifyContent: 'flex-end',
                            display: 'flex',
                          }}
                        >
                          <img
                            className={classes.starimg}
                            src="./images/5star.png"
                          />
                        </div>
                      </div>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ color: 'white' }}
                        >
                          Russ McDowell
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                         Director – Technology Services,
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          style={{ color: 'orangered' }}
                        >
                          ECCO Select 
                        </Typography>
                        <p
                          style={{
                            color: 'white',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                          }}
                        >
                        Palani at CMS was hands down the best choice we made regarding our pursuit of ISO and CMMI certification.
 I interviewed close to a dozen providers in this field and Palani stood out immediately.
 We were on a demanding timeline for our initial deliverables and his expertise made all the difference in our success.
 Palani is extremely knowledgeable and experienced, professional, efficient, and flexible.
 I would recommend Palani at CMS without reservation for any business seeking the services he provides 
                        </p>
                      </div>
                    </div>
                  </Paper>
                </ScrollableAnchor>

                <img
                  className={classes.orangebox}
                  src="../images/orangebox.png"
                />
              </div>
            </Grid>
          </Grid>
          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Testimonial;
