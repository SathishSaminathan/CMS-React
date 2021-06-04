import "./simpleCarosel.css";

import {
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";

import { Images } from "./assets/images";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
    marginTop: "10px",
    marginLeft: "20px",
    backgroundColor: "transparent",
    borderRadius: 200,
    borderColor: "black",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "50px",
    },
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
      transition: "all ease 200ms",
    },
  },
  cardimg: {
    width: "70%",
  },
  paperContainer: {
    width: "auto",
  },
  container: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: " 44px",
    },
  },
}));

const SimpleCarosel = () => {
  const classes = useStyles();

  return (
    <MDBContainer className={classes.container}>
      <MDBCarousel
        activeItem={1}
        length={1}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow style={{ marginRight: "10px" }}>
            <MDBCarouselItem itemId="1">
              {/* <Grid
                container
                direction="row"
                spacing={0}
                
                style={{ marginLeft: '10px' }}
                className={classes.paperContainer}
              >
                <Grid item xs={12} md={2} className={classes.gridPaper}>
                  <Paper className={classes.paper} elevation={0} >
                    <MDBCardImage
                      className={classes.img}
                      src="./images/mspng.png"
                      style={{width:"60%",position:"relative",left:"16%"}}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} className={classes.gridPaper}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/ibmpng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} className={classes.gridPaper}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/fedexpng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} className={classes.gridPaper}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      src="./images/addidaspng.png"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} className={classes.gridPaper}>
                  <Paper className={classes.paper}>
                    <MDBCardImage
                      className={classes.img}
                      style={{width:"100%",position:"relative",top:"9px"}}
                      src="./images/nikepng.png"
                    />
                  </Paper>
                </Grid>
              </Grid> */}
              <Grid
                container
                spacing={0}
                style={{ marginBottom: "50px", width: "100%" }}
              >
                <Grid item xs>
                  <Paper className={classes.paper} variant="outlined">
                    <img className={classes.cardimg} src={Images[1]} />
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper} variant="outlined">
                    <img className={classes.cardimg} src={Images[2]} />
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper} variant="outlined">
                    <img className={classes.cardimg} src={Images[4]} />
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper} variant="outlined">
                    <img className={classes.cardimg} src={Images[5]} />
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper} variant="outlined">
                    <img className={classes.cardimg} src={Images[6]} />
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
