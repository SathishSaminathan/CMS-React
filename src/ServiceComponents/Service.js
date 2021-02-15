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
import '../workshopStyles.css';
import HeaderComponent from '../HeaderComponnent';
import NavBArMat from '../NavBarMat';

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
        alignContent:"center",
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
        maxWidth: "5%",
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
      gridcontainer1:{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
          marginRight:"20%"
        },
      }

}));
function Service(props) {

    const classes = useStyles();

    return (
        <div>
             <div >
        <img className={classes.bgimg}  src="./images/ourservice.jpg"/>
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.ClientText}>
            <Typography variant="h3" className={classes.clientH1}>
              OUR SERVICE
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.Header1}>
            <Typography style={{ color: '#0B132B', fontWeight: '400' }} variant="h4" className={classes.HeaderText1}>
                Consultancy Services
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
            <Grid item xs container direction="column" className={classes.gridcontainer1} >
              <Grid
                item
                xs
                
                
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  
                >
                  <span >
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span >
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
Six sigma Program Implementation
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
Cost reduction projects                </Typography>
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
Facultication of Kaizen/Operational Excellence Events                </Typography>
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
QA as a Service(QAaaS)                </Typography>
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
<span style={{color:"#0C2D48",fontWeight:"600"}}>ISO 9001</span>- Quality Management System Requirements                </Typography>
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
                  <span style={{color:"#0C2D48",fontWeight:"600"}}>ISO 14001</span>- Environment Management System Requirements          

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
                  <span style={{color:"#0C2D48",fontWeight:"600"}}>IATF 16949</span>- Quality Management System Requirements for automotive suppliers         
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
                  <span style={{color:"#0C2D48",fontWeight:"600"}}>ISO/IEC 27001</span>- Information Security Management System Requirements        
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
                  <span style={{color:"#0C2D48",fontWeight:"600"}}>ISO/IEC 17025</span>- General requirements for the competency of testing and callibration laboratories     
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
                <Paper elevation={0} style={{width:450,height:400,backgroundColor:"transparent"}}><img style={{width:"80%",}} src="./images/onlineL.jpg"/></Paper>
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
Implementation of <span style={{color:"#0C2D48",fontWeight:"600"}}>APQP,FMEA,MSA,SPC & PPAP for specific projects</span> </Typography>
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
Training and obtaining PPAP from suppliers</Typography>
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
Supplier Assessments</Typography>
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
Establish and implement ITIL processes  </Typography>
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
Establish and implement Metrics for IT Governance</Typography>
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
IT Risk Management in line with Established frameworks </Typography>
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
Perform risk-based IT aduits</Typography>
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
Perform Application control review</Typography>
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
                  Perform Applicaton control review
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
Perform <span style={{color:"#0C2D48",fontWeight:"600"}}>IQ/QQ/PQ(software validation) per ICH Guidelines and <span>21CFR Part 11 complaince requirements</span></span>                </Typography>
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
Critical process analysis and development of Business Continuity and Disaster Recovery Plans </Typography>
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
Documentation of policies ,<span style={{color:"#0C2D48",fontWeight:"600"}}>SOPs,</span>,Operator instructions,Visual aids,Control plans and Training Materials relevant to Quality,information security ,and Environment Management area
</Typography>
              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>


      






      <Paper className={classes.paper} style={{width:"auto",backgroundColor:"#0B132B",marginBottom:"-13px"}} elevation={3}>
      <Grid item md={12} className={classes.Header1}>
            <Typography style={{ color: 'white', fontWeight: '400' }} variant="h4" className={classes.HeaderText1}>
                Consultancy Approach
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
                  style={{ color: 'white'}}
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
Understand the client needs and expectations                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ color: 'white'}}
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
Perform "AS IS" assesment to understand the baseline
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ color: 'white'}}
                >
                  <span>
                    <img
                    style={{paddingRight:"10px"}}
                      className={classes.img}
                      alt="complex"
                      src="./images/logosmall.png"
                    />
                  </span>
Prepare a detailed technical proposal and get agreement               
 </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                style={{ color: 'white'}}
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
Prepare a commercial proposal and get agreement
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                style={{ color: 'white'}}
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
Prepare a project a project plan and reach agreement
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                style={{ color: 'white'}}
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
Perform onsite visits as per the plan
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                style={{ color: 'white'}}
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
                  Unlimited offline support
                </Typography>
              </Grid>
              <Grid
                item
                xs
               
              >
                <Typography
                style={{ color: 'white'}}
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
Periodic submission of a progress report and review with Stake Holders                </Typography>
              </Grid>
              
             
            </Grid>
            <Grid item md={6} xs={12}>
                <Paper style={{width:"auto",height:"auto",marginLeft:"50px",marginRight:"20px"}}><img style={{width:"100%",}} src="./images/random1.jpg"/></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Grid container className={classes.lastGrid}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" style={{ color: 'white' }}>
                We Help You unlock & unleash the power within your large scale
                buissness
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

export default Service;