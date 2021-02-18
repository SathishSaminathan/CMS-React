import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  li: {
    fontSize: '22px',
  },
  addressDetails: {
    
  },
  [theme.breakpoints.down('md')]: {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  termsnp: {
    marginLeft: '180px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: '90px',
    },
    [theme.breakpoints.down('sm')]: {
     
      marginLeft: '30px',
    },
  },
  cantonHeader:{
    fontFamily: "Yanone Kaffeesatz, sans-serif",
    fontSize:"30px",
    paddingLeft:"40px",
    [theme.breakpoints.down('sm')]: {
     
      padding:"0px",
    },
  },
  ulcontainer:{
    listStyleType: 'none',
    [theme.breakpoints.down('sm')]: {
     
      padding:"0px",
    },
  },
  logo:{
    
  }
  
}));
const FooterPagePro = () => {
  const classes = useStyles();

  return (
    <MDBFooter
      color="bg-dark"
      className="page-footer font-small pt-4 mt-4"
      style={{ width: '100%', backgroundColor: '1e212d' }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            <h5
              className={classes.cantonHeader}
            >
              Canton Management Services
            </h5>
            <Typography className={classes.addressDetails}>
              <ul className={classes.ulcontainer}>
                <li className={classes.li}>Canton,Michigan,</li>
                <li className={classes.li}>United States</li>
                <li style={{ fontWeight: '800' }} className={classes.li}>
                  Mail us:
                  <Link href="#" style={{ color: 'orangered',fontSize:"22px" }}>
                    palani59@gmail.com
                  </Link>
                </li>
                <li style={{ fontWeight: '800' }} className={classes.li}>
                  Call us:
                  <Typography
                    style={{ fontSize: '20px', display: 'inline-block' }}
                  >
                    +1(248)842 - 2805
                  </Typography>
                </li>
              </ul>
            </Typography>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <div className="text-center py-3">
              <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <img className={classes.logo} src="./images/logoBg.png" />
                </li>
              </ul>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />

          <hr className="clearfix w-100 d-md-none" />
          <MDBRow className={classes.termsnp} md="4" sm="12">
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <Link style={{ paddingRight: '20px' }}>Terms</Link>
            </h6>
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <Link style={{ paddingRight: '20px' }}>Privacy Policy</Link>
            </h6>
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <Link>Contact</Link>
            </h6>
          </MDBRow>
        </MDBRow>
      </MDBContainer>

      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href=""> CantonManagement.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
