import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdbreact';
import  './doublecarosal.css';
import Hidden from '@material-ui/core/Hidden';

import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  starimg:{
    width:"20%",
    alignItems:"left",
    justifyContent:"left",
    display:"flex",
    position:"relative",
    top:"-10px",
    left:"8px",
    [theme.breakpoints.down('md')]: {
      top:"0px",
      width:"10%",
    },[theme.breakpoints.down('xs')]: {
      top:"0px",
      width:"20%",
    },


  },
  cardimg:{
    width:"20%",
    height:"90px",
    borderRadius:"50%",
   alignItems:"left",
   justifyContent:"left",
   display:"flex",
   position:"relative",
   top:"0px",
   left:"7px",
   objectFit:"cover",
   [theme.breakpoints.down('md')]: {
    left:"0px",
    width: "100%",
    height: "119px",
    display: "flex",
    position: "relative",
    objectFit: "fill",
    alignItems: "left",
    borderRadius: "50%",
    justifyContent: "left",
  },
   [theme.breakpoints.down('xs')]: {
    

  },
  },
  card:{
    width:500,
    height:330,
backgroundColor:"#0C2D48",
[theme.breakpoints.down('xs')]: {
  width: "301px",
  height: "352px",
},
},
  cardTitle:{
    alignItems:"left",
   justifyContent:"left",
   display:"flex",
  
   fontSize:"22px",
   color:"white",
   position:"relative",
   left:"10px",
   [theme.breakpoints.down('md')]: {
    fontSize:"13px",

  },
  },
  cardsubtitle:{
    alignItems:"left",
    justifyContent:"left",
    display:"flex",
   
    fontSize:"22px",
    marginLeft:"10px",
    color:"white",
    [theme.breakpoints.down('md')]: {
      fontSize:"13px",
    },

  },
  cardContent:{
color:"white",
justifyContent:"left",
textAlign:"left",
fontSize:"15px",
[theme.breakpoints.down('md')]: {
  fontSize:"13px",

},
    
  },
  cardContainer2:{
   
     
    },
   
  
  cardContainer1:{
  
      
      
    },
    cardContainerMain:{
    
   
    },
    willimgcontainer:{
      [theme.breakpoints.down('md')]: {
  
        width: "77px",
        height: "119px",
        borderRadius: "50%",
        transform:" scale(.76, .5)",
      },
    },
    caroselinner:{
      
        
        display: "flex",
        justifyContent: "center",
 
    }
    
  }
  

));
const DoubleCarosel = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        slide={true}
        showControls={true}
        showIndicators={true}
        
      >
        <MDBCarouselInner className={classes.caroselinner}>
          <MDBRow>
            {/* <MDBCarouselItem itemId="1" >
              <Grid container direction="row" spacing={2} alignContent='space-around' style={{marginLeft:"10px"}}>
                
                <Grid item xs={12} md={2} >
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                    <MDBCardTitle>will Smith</MDBCardTitle>
                   <Typography>CEO,Canton Management Services</Typography>
                   <img className={classes.starimg} src="./images/5star.png"/>
                  </MDBCardBody>
                  </MDBCard>
                </Grid>
                <Grid item xs={12} md={2} >
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    />
                    <MDBCardBody>
                    <MDBCardTitle>will Smith</MDBCardTitle>
                   <Typography>CEO,Canton Management Services</Typography>
                   <img className={classes.starimg} src="./images/5star.png"/>
                  </MDBCardBody>
                  </MDBCard>
                </Grid>
               
              </Grid>
            </MDBCarouselItem> */}
           
            <MDBCarouselItem itemId="1" >
              <Grid container direction="row" spacing={2} alignContent='space-around' style={{justifyContent:"space-evenly"}} className={classes.cardContainerMain}>
                <Grid item xs={12} md={6} className={classes.cardContainer1}>
                  <Paper className={classes.card}  style={{  padding: '10px' }} elevation={0}>
                   
                    <div className={classes.willimgcontainer}>
                       <img
                      className={classes.cardimg}
                      src="./images/willsmith.jpg"
                    />
                    </div>
                    <Typography className={classes.cardTitle} style={{}}>will Smith</Typography>
                   <Typography className={classes.cardsubtitle}>CEO,Canton Management Services</Typography>
                   <img className={classes.starimg} src="./images/5star.png"/>
                   <Typography className={classes.cardContent}  style={{ padding: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat laboriosam, officia eveniet enim fuga doloribus blanditiis recusandae suscipit dicta nostrum nam dolorem sunt numquam unde laborum, id, explicabo amet?</Typography>
                  
                  </Paper>
                </Grid>
                <Hidden mdDown>
                <Grid item xs={12} md={6} className={classes.cardContainer1}>
               
                <Paper className={classes.card} elevation={0}  style={{  padding: '10px',backgroundColor: "#a40606",
backgroundImage:" linear-gradient(315deg, #a40606 0%, #d98324 74%)",}}>
                   
                <div className={classes.willimgcontainer}>
                   <img
                  className={classes.cardimg}
                  src="./images/willsmith.jpg"
                />
                </div>
                <Typography className={classes.cardTitle} style={{color:"white"}}>will Smith</Typography>
               <Typography className={classes.cardsubtitle} style={{color:"white"}}>CEO,Canton Management Services</Typography>
               <img className={classes.starimg} src="./images/5star.png"/>
               <Typography className={classes.cardContent}  style={{ padding: '10px',color:"white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat laboriosam, officia eveniet enim fuga doloribus blanditiis recusandae suscipit dicta nostrum nam dolorem sunt numquam unde laborum, id, explicabo amet?</Typography>
              
              </Paper>
              
                </Grid>
                </Hidden>
                </Grid>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" >
              <Grid container direction="row" spacing={2} alignContent='space-around' style={{justifyContent:"space-evenly"}} className={classes.cardContainerMain}>
                <Grid item xs={12} md={6} className={classes.cardContainer1}>
                <Paper className={classes.card} elevation={0} style={{  padding: '10px' }}>
                   
                <div className={classes.willimgcontainer}>
                   <img
                  className={classes.cardimg}
                  src="./images/willsmith.jpg"
                />
                </div>
                <Typography className={classes.cardTitle} style={{}}>will SmithB</Typography>
               <Typography className={classes.cardsubtitle}>CEO,Canton Management Services</Typography>
               <img className={classes.starimg} src="./images/5star.png"/>
               <Typography className={classes.cardContent}  style={{ padding: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat laboriosam, officia eveniet enim fuga doloribus blanditiis recusandae suscipit dicta nostrum nam dolorem sunt numquam unde laborum, id, explicabo amet?</Typography>
              
              </Paper>
                </Grid>
                <Hidden mdDown>

                <Grid item xs={12} md={6} className={classes.cardContainer1}>
                <Paper className={classes.card} elevation={0}  style={{  padding: '10px',backgroundColor: "#a40606",
backgroundImage:" linear-gradient(315deg, #a40606 0%, #d98324 74%)", }}>
                   
                <div className={classes.willimgcontainer}>
                   <img
                  className={classes.cardimg}
                  src="./images/willsmith.jpg"
                />
                </div>
                <Typography className={classes.cardTitle} style={{}}>will SmithA</Typography>
               <Typography className={classes.cardsubtitle}>CEO,Canton Management Services</Typography>
               <img className={classes.starimg} src="./images/5star.png"/>
               <Typography className={classes.cardContent}  style={{ padding: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat laboriosam, officia eveniet enim fuga doloribus blanditiis recusandae suscipit dicta nostrum nam dolorem sunt numquam unde laborum, id, explicabo amet?</Typography>
              
              </Paper>
                </Grid>
                </Hidden>
                </Grid>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </ThemeProvider>
  );
};

export default DoubleCarosel;
