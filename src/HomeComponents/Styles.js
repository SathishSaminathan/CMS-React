import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles((theme) => ({
    imageContainer: {},
    cmsContent: {
      position: 'absolute',
      bottom: '25%',
      left: '11%',
  
      [theme.breakpoints.down('sm')]: {
        left: '10px',
        justifyContent: 'center',
        textAlign: 'center',
        bottom: '15%',
        marginBottom: '20px',
      },
      // [theme.breakpoints.down('md')]: {
      //   display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignIitems: "center",
      // paddingTop: "21em",
      // bottom: '0',
      // left: '0',
      // position:"initial"
      // },
    },
    paperblog1: {
      height: 350,
      width: 400,
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        left: '0',
      },
    },
    paperblog2: {
      height: 350,
      width: 400,
    },
    paperblog3: {
      height: 350,
      width: 400,
      position: 'relative',
  
      [theme.breakpoints.down('md')]: {
        right: '0',
      },
    },
    paper1: {
      height: 350,
      width: 400,
      backgroundColor: '#0C2D48',
      position: 'relative',
      top: '10px',
      left: '13%',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        left: '15%',
        top: '10%',
      },
      [theme.breakpoints.down('xs')]: {
        left: '0%',
        marginBottom: '5px',
        width: 340,
      },
      '&:hover, &:focus': {
        transform: 'scale(1.03)',
        boxShadow:
          '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
        transition: 'all ease 200ms',
      },
    },
    paper2: {
      height: 380,
      width: 350,
      backgroundColor: '#a40606',
      backgroundImage: ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',
  
      position: 'relative',
      justifyContent: 'center',
      textAlign: 'center',
      left: '14%',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        left: '15%',
        height: 350,
        width: 400,
        top: '10%',
      },
      [theme.breakpoints.down('xs')]: {
        left: '0px',
        width: 340,
      },
      '&:hover, &:focus': {
        transform: 'scale(1.03)',
        boxShadow:
          '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
        transition: 'all ease 200ms',
      },
    },
    paper3: {
      height: 350,
      width: 400,
      position: 'relative',
      top: '10px',
      left: '12.4%',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#2E8BC0',
      color: 'white',
  
      [theme.breakpoints.down('md')]: {
        left: '15%',
        top: '8%%',
      },
      [theme.breakpoints.down('xs')]: {
        left: '0px',
        width: 340,
      },
      '&:hover, &:focus': {
        transform: 'scale(1.03)',
        boxShadow:
          '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
        transition: 'all ease 200ms',
      },
    },
    card2img: {
      marginTop: '40px',
      [theme.breakpoints.down('md')]: {
        marginTop: '12px',
      },
    },
  
    root: {
      flexGrow: 1,
      position: 'absolute',
      top: '90%',
  
      [theme.breakpoints.down('md')]: {
        marginRight: '20px',
        paddingRight: '40px',
        paddingLeft: '50px',
      },
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: '0px',
        paddingRight: '0px',
        paddingLeft: '0px',
        top: '110%',
      },
    },
    img1: {
      objectFit: 'contain',
      width: '80%',
      height: '50%',
    },
    img2: {
      objectFit: 'contain',
      width: '60%',
      height: '70%',
      position: 'relative',
      bottom: '30%',
      left: '30%',
      [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        top: '40%',
      },
    },
    imgLogo: {
      width: '8%',
      position: 'relative',
      bottom: '52%',
      left: '12%',
      [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        left: '65%',
      },
    },
    image1Container: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '800px',
      marginTop: '90px',
      position: 'relative',
      marginLeft: '10%',
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
      },
    },
    cantonContainer: {
      display: 'flex',
      flex: '2',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'left',
      marginLeft: '35px',
      [theme.breakpoints.down('md')]: {
        marginLeft: '60px',
      },
    },
    newsnblog: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
  
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '0px',
      marginRight: '0px',
      position: 'relative',
  
      marginTop: '10px',
      backgroundColor: '#0C2D48',
    },
    partnerContainer: {
      backgroundColor: '#a40606',
      backgroundImage: ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '0px',
      marginRight: '0px',
      position: 'relative',
      marginTop: '12px',
    },
    cardCarosel: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      width: '99%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '0px',
      marginRight: '0px',
      position: 'relative',
      left: '0px',
      marginTop: '13px',
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
      marginBottom: '-25px',
    },
  
    blogContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#0C2D48',
    },
    blogImg1: {
      width: '100%',
    },
    authorText: {
      fontSize: '14px',
  
      color: 'white',
    },
    blogTitleText: {
      fontSize: '20px',
  
      color: 'white',
    },
    blogContent: {
      fontSize: '12px',
  
      color: 'white',
    },
    blogCard: {
      justifyContent: 'space-around',
      alignItems: 'left',
      textAlign: 'left',
      display: 'flex',
    },
    partnerCard: {
      height: 150,
      width: 150,
      marginBottom: '10px',
      backgroundColor: 'yellow',
    },
    blogBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      display: 'flex',
      marginTop: '70px',
      marginBottom:"1em"
    },
    trustcontainer: {
      marginLeft: '16%',
      [theme.breakpoints.down('md')]: {
        marginLeft: '0',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
    partnerText: {
      marginLeft: '16%',
      [theme.breakpoints.down('md')]: {
        marginLeft: '0',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
    practicaltext: {
      marginBottom: '30px',
      fontFamily: 'Hammersmith One, sans-serif',
      fontSize: '86px',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: ' 40px',
      },
    },
    clientText: {
      marginBottom: '20px',
      [theme.breakpoints.down('md')]: {
        fontSize: ' 25px',
      },
    },
    cardText: {
      fontSize: '16px',
      padding: '10px',
  
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        paddingLeft: '20px',
      },
    },
    btnconsol: {
      color: 'white',
      backgroundColor: 'orangered',
      borderRadius: '30px',
      paddingTop: '15px',
      paddingBottom: '15px',
      [theme.breakpoints.down('md')]: {
        borderRadius: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingRight: '5px',
        paddingLeft: '5px',
      },
    },
    businesstext: {
      color: 'white',
      paddingLeft: '50px',
      fontFamily: 'Hammersmith One, sans-serif',
      [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
        paddingLeft: '0px',
      },
    },
  }));

  export  {useStyles};