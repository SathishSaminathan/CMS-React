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
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 200,
    height: 150,
    
  },
  img:{
    width:"90%"
  },
  paperContainer:{
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
  }
}));

const SimpleCarosel = () => {
  const classes = useStyles();

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={1}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <Grid
                container
                direction="row"
                spacing={2}
                alignContent="space-around"
                style={{ marginLeft: '10px' }}
                className={classes.paperContainer}
              >
                <Grid item xs={12} md={2}>
                  <Paper className={classes.paper} elevation={0} >
                    <MDBCardImage
                      className={classes.img}
                      src="./images/mspng.png"
                      style={{width:"60%",position:"relative",left:"16%"}}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/ibmpng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/fedexpng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/addidaspng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      style={{width:"100%",position:"relative",top:"9px"}}
                      src="./images/nikepng.png"
                    />
                  </Paper>
                </Grid>
              </Grid>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default SimpleCarosel;
