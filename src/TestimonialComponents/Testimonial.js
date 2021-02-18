import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from '../Footer';
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
import '../testimonialStyles.css';
import NavBArMat from '../NavBarMat';
import Fade from 'react-reveal/Fade';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import HeaderComponent from '../HeaderComponnent';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "50vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:" rgba(111,111,111,2.0)",
    zIndex: -1,
    background: "linear-gradient(90deg, black, transparent)",
  },

  bgimg: {
    // margin: 'auto',
    height: '50vh',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: 0,
    opacity: '0.5',
    backgroundPosition: ' 0 -500px',
    [theme.breakpoints.down('xs')]: {},
  },
  GridContainer: {
    position: 'absolute',
    top: '42%',
  },
  TestimonialText: {
   paddingLeft:"12.5em"
  },
  
  
  willsmith: {
    width: '8%',
    height: '7vh',
    borderRadius: '50%',
    marginTop: '15px',
    marginLeft: '0px',
    position: 'relative',
    right: '64px',
    objectFit:"cover",
    [theme.breakpoints.down('md')]: {
      right: '20px',
      height:"6vh",
      
    },
  },
  starimg: {
    width: '20%',
   
  },
  detailContainer: {
    paddingLeft: '6em',
    position: 'relative',
    bottom: '70px',
    paddingBottom:"20px"
  },
  paper: {
    backgroundColor: 'white',
    width:"70%",
    height:290,
    marginTop: '10px',
  },
  cardContent: {
    fontSize: '15px',
    paddingLeft: '25px',
    paddingRight: '10px',
    paddingBottom: '10px',
    position: 'relative',
    bottom: '35%',
    paddingTop: '10px',
    color: 'black',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '80px',
   
   
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5px',
      marginRight:"0px",
      marginLeft:"0",
    },
  },
  orangebox: {
    width: '10%',
    position: 'absolute',
    zIndex: '-1',
   top:"-10px",
   left:"-23px",
   [theme.breakpoints.down('xs')]: {
    left:"-10px",
  },
   
  },
  HeaderText1: {
   
    
   color:"#0C2D48",fontFamily: 'Hammersmith One, sans-serif' ,
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   alignContent:"center",
   alignItems:"center",
   
    [theme.breakpoints.down('md')]: {
      paddingTop:"50px"
      
    },
  },
  // starimg:{
  //   width:"20%",
  //   alignItems:"left",
  //   justifyContent:"left",
  //   display:"flex",
  //   position:"relative",
  //   top:"-10px",
  //   left:"8px",
  //   [theme.breakpoints.down('md')]: {
  //     top:"0px",
  //     width:"10%",
  //   },[theme.breakpoints.down('xs')]: {
  //     top:"0px",
  //     width:"20%",
  //   },


  // },
  cardimg:{
    width:"20%",
    height:"90px",
    borderRadius:"50%",
   alignItems:"left",
   justifyContent:"left",
   display:"flex",
   position:"relative",
   top:"0",
   left:"0",
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
    width:650,
    height:330,
backgroundColor:"#0C2D48",
[theme.breakpoints.down('xs')]: {
  width: "241px",
  height: "400px",
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
    
    marginLeft:"40px"
    },
    willimgcontainer:{
      position:"relative",
      [theme.breakpoints.down('md')]: {
  
        width: "77px",
        height: "119px",
        borderRadius: "50%",
        transform:" scale(.76, .5)",
      },
    },
    media: {
      height: 140,
      verticalAlign: " middle",
      width: "50px",
      height: "50px",
      borderRadius: " 50%"
    },
    root:{
      
        maxWidth: 600,
        [theme.breakpoints.down('sm')]: {
          marginRight:"10px",
         
        },
        [theme.breakpoints.down('xs')]: {
          marginLeft:"15px"
         
        },

     
    },
    cardsubtext:{
      fontSize:"16px",
      fontWeight:"800",
      color:"black"
    },
    testimonialTextContainer: {
      position:"absolute",
      left:"11%",
      marginBottom: '60px',
      paddingBottom:"80px",
      [theme.breakpoints.down('sm')]: {
        left:"2%",
      },
     
    },
    header1: {
      marginTop:"10em",
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      color:"#0C2D48",
      fontFamily: 'Hammersmith One, sans-serif' ,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'space-evenly',
      },
    },
    secoundaryGrid:{
      maxWidth: "90%",
   
    position: "relative",
    left: "7%",
    
    [theme.breakpoints.down('md')]: {
      position: "revert",
      left: "0",
      maxWidth: "100%",
    },
    }
}));
function Testimonial(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.bgimg} src="images/thumbsup.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
<NavBArMat/>
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} className={classes.testimonialTextContainer}>
           
            <Typography variant="h3" className={classes.testimonialH1} style={{fontFamily:"Anton, sans-serif",
    color:"white"}}>
              TESTIMONIALS
            </Typography>
           
          </Grid>
          <Grid item md={12} className={classes.header1}>
          <Fade bottom delay={2000}>
            <Typography
className={classes.HeaderText1}
              style={{ color:"#0C2D48", fontWeight: '400' }}
              variant="h3"
            >
              What Client Says About Us?
              <div
               
                className="underline"
              ></div>
            </Typography>
            </Fade>
          </Grid>
        <Grid container md={12} sm={12} spacing={1}  direction="row"
  justify="center"
  alignItems="center"
  className={classes.secoundaryGrid}
  >
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}   style={{ backgroundColor: '#0C2D48' }}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
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
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />
    </div>

    
          </Grid>
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
        />
        
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
       
        
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0d335d' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography className={classes.cardsubtext} variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />
    </div>

    
          </Grid>
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
        />
        
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
       
        
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0d335d' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography  className={classes.cardsubtext}variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />
    </div>

    
          </Grid>
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
        />
        
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
       
        
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0d335d' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography  className={classes.cardsubtext} variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />
    </div>

    
          </Grid>
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
        />
        
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
       
        
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0d335d' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography  className={classes.cardsubtext} variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <img
                className={classes.orangebox}
                src="../images/orangebox.png"
              />
    </div>

    
          </Grid>
          <Grid item md={6} sm={12} className={classes.cardGrid}>
                 <div style={{position:"relative"}}>
                

                 
                  <Card className={classes.root}>
               
      <CardActionArea>
        
      
    
        <CardContent>
        <CardMedia
          className={classes.media}
          image="./images/willsmith.jpg"
          title="profile"
          gutterBottom
        />
        
          <img
          className={classes.starimg}
          src="./images/5star.png"
        />
       
        
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#0d335d' }}>
            Will smith
          </Typography>
          <Typography  gutterBottom variant="h6" color="textSecondary" component="p" style={{ color: 'orangered' }}>
            CEO,Cantan Management Services
          </Typography>
          <Typography className={classes.cardsubtext} variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            assumenda minima distinctio id tempore corrupti ea nihil architecto
            mollitia aperiam, odio maxime eaque nulla error cupiditate, aut non
            corporis nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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
