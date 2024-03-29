import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  li: {
    fontSize: "16px",
    fontFamily: "Poppins",
    padding: "2px 0px",
  },
  addressDetails: {},
  [theme.breakpoints.down("md")]: {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  termsnp: {
    marginLeft: "180px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      marginLeft: "90px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
    },
  },
  cantonHeader: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "25px",
    paddingLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  ulcontainer: {
    listStyleType: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  logo: {},
}));
const FooterPagePro = () => {
  const classes = useStyles();

  return (
    <MDBFooter
      className="page-footer font-small pt-4 mt-4"
      style={{
        width: "100%",
        backgroundColor: "rgb(0 21 45)",
        paddingTop: "40px",
      }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5" style={{ paddingTop: "40px" }}>
            <h5 className={classes.cantonHeader}>Canton Management Services</h5>
            <Typography className={classes.addressDetails}>
              <ul className={classes.ulcontainer}>
                <li className={classes.li}>46060 Ashton Woods Ct.</li>
                <li className={classes.li}>Canton, MI 48187 </li>
                <li className={classes.li}>USA</li>
                <li style={{ fontFamily: "Poppins" }} className={classes.li}>
                  Mail us: {""}
                  <Link
                    href="#"
                    style={{ color: "orangered", fontSize: "16px" }}
                    onClick={() =>
                      window.open(
                        "mailto:thirupu@canton-management.com; pmasilamani@canton-management.com?&cc=palani659@gmail.com"
                      )
                    }
                  >
                    pmasilamani@canton-management.com
                  </Link>
                  {/* <Link href="#" style={{ color: 'orangered',fontSize:"22px" }} onClick={()=>window.open('mailto:your@email.address?subject=Comments about the color blue')}>
                  sales@canton-management.com 
                  </Link> */}
                </li>
                <li style={{ fontFamily: "Poppins" }} className={classes.li}>
                  <Link
                    href="#"
                    style={{
                      color: "orangered",
                      fontSize: "16px",
                      paddingLeft: 65,
                    }}
                    onClick={() =>
                      window.open(
                        "mailto:thirupu@canton-management.com; sales@canton-management.com?&cc=palani659@gmail.com"
                      )
                    }
                  >
                    sales@canton-management.com
                  </Link>
                </li>
                <li style={{ fontFamily: "Poppins" }} className={classes.li}>
                  Call us: {""}
                  <Typography
                    style={{ fontSize: "16px", display: "inline-block" }}
                  >
                    +1(248)444-8097
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
              <Link style={{ paddingRight: "20px" }}>Terms</Link>
            </h6>
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <Link style={{ paddingRight: "20px" }}>Privacy Policy</Link>
            </h6>
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <Link to="./contact#contactus">Contact</Link>
            </h6>
          </MDBRow>
        </MDBRow>
      </MDBContainer>

      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <TwitterIcon />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <FacebookIcon style={{ color: "#ff4500" }} />{" "}
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <InstagramIcon />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <a href="" style={{ fontFamily: "Poppins" }}>
            ©2021 Canton Management Services, all rights reserved.
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
