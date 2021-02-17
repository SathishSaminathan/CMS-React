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
import HeaderComponent from '../HeaderComponnent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NavBArMat from '../NavBarMat';

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
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  BlogText: {
   
    
    [theme.breakpoints.down('md')]: {
      
    },
    [theme.breakpoints.down('sm')]: {
    
    },
  },
  GridContainer: {
    position: 'absolute',
    top: '40%',
    flexGrow: 1,
  },
  blogCard: {
    marginTop: '5%',

    [theme.breakpoints.down('md')]: {
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
  blogImg1: {
    width: '100%',
  },
  authorText: {
    fontSize: '15px',
    paddingTop: '20px',
    color: 'orangered',
  },
  blogTitleText: {
    fontSize: '30px',
    paddingTop: '10px',
    color: '#0C2D48',
    fontWeight: '500',
  },
  blogContent: {
    fontSize: '15px',
    paddingTop: '10px',
    fontWeight: '400',
  },
  paper: {
    width: 500,
    height: 350,
    backgroundColor: 'pink',
    marginBottom: '15em',

    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth:  "100%",
      marginBottom: '120px',
    },
  },
  paperGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: '40px',
    paddingLeft: '7em',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0',
    },
  },
  paperContainer: {
    [theme.breakpoints.down('md')]: {
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
  category: {
    marginTop:"10em",
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-evenly',
    },
  },
  btn: {
    color: 'white',
    backgroundColor: 'orangered',
    marginTop: '50px',
    borderRadius: '30px',
    paddingTop: '15px',
    paddingBottom: '15px',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft:"10px",
    paddingRight:"10px",
 
    },
  },
  BlogTextContainer: {
    position:"absolute",
    left:"11%",
    marginBottom: '60px',
    paddingBottom:"80px",
    [theme.breakpoints.down('sm')]: {
      left:"2%",
    },
   
  },
}));

function Blog(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.bgimg} src="images/Blog.jpg" />
      </div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
        <NavBArMat />
        <Grid container spacing={0} className={classes.GridContainer}>
          <Grid item md={12} sm={12} xs={12} className={classes.BlogTextContainer}>
            <Typography style={{ fontFamily:"Anton, sans-serif",
    color:"white"}}  variant="h3">Blog</Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.category}
            
          >
            <Grid item md={2}>
              <Typography style={{ paddingRight: '20px',fontWeight:"500" }} variant="body1">
                SHOWING 50 POST
              </Typography>
            </Grid>
            <Grid item md={1}>
              <InputLabel id="demo-controlled-open-select-label" style={{margin:"0"}}>
                Filter Category
              </InputLabel>
            </Grid>
            <Grid item md={1}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid container spacing={0} className={classes.paperGrid}>
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bman.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img
                  className={classes.blogImg1}
                  src="../images/ourclients.jpg"
                />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bman.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img className={classes.blogImg1} src="../images/bwomen.jpg" />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
            <Grid item xs>
              <Paper
                style={{
                  backgroundColor: 'transparent',
                }}
                className={classes.paper}
                elevation={0}
              >
                <img
                  className={classes.blogImg1}
                  src="../images/ourclients.jpg"
                />
                <Typography className={classes.authorText} variant="subtitle1">
                  BY AUTHOR PUBLISHED ON JULY 9,2020
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
          </Grid>

          <Grid
            item
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width:"100%",
              marginTop:"50px"
            }}
          >
            <Button variant="outlined" className={classes.btn}>
              Read More
            </Button>
          </Grid>

          <FooterPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Blog;
