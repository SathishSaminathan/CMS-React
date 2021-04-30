import { makeStyles } from '@material-ui/core/styles';

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
      width: '5%',
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
        width: "100px",
        height: "100px",
        borderRadius: " 50%",
        marginBottom:10,
        objectFit:"cover"
      },
      root:{
        
          maxWidth: "100%",
          padding:"60px",
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

  export {useStyles};