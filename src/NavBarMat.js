import './NavMatStyles.css';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '78%',
    justifyContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '9vh',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      top: '0%',
      left: '0%',
      transform: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
  },
  options: {
    display: 'flex',
    justifyContent: 'space-around',
    // paddingBottom:"10px",
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  containerIcons: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  hamburger: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '35px',
  },
  toolbar: {
    [theme.breakpoints.down('lg')]: {
      minHeight: 'unset',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '-webkit-fill-available',
    },
  },
  btn: {
    fontSize: '17px',
    fontFamily: 'Work Sans, sans-serif',
    //     color: "white !important",
    //     position:"relative",
    //     '&::before': {
    //       content: "",
    //       position: "absolute",
    //       width: "100%",
    //       height: "2px",
    //       bottom: 0,
    //       left: 0,
    //       backgroundColor: "#FFF",
    //       visibility: "hidden",
    //       transform: "scaleX(0)",
    //       transition: "all 0.3s ease-in-out",
    //     },
    //     '&:hover:before':{
    //       visibility: "visible",
    // transform: "scaleX(1)",
    //     },

    '&:hover': {
      borderBottom: 'white 0.140em solid',
      transition: 'width 0.3s ease 1s, left 0.3s ease 0s',
    },
  },
  icons: {
    marginTop: '5px',
  },
  menuicon: {
    display: 'flex',
  },
}));

function NavBArMat(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageUrl) => {
    history.push(pageUrl);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#a40606',
          backgroundImage: ' linear-gradient(315deg, #a40606 0%, #d98324 74%)',
        }}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.containerIcons}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            {isMobile ? (
              <>
                <div className={classes.hamburger}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '4%',
                      paddingTop: '4px',
                    }}
                  >
                    <img
                      style={{
                        width: '60%',
                        filter: 'brightness(0) invert(1)',
                        opacity: '0.8',
                      }}
                      src="./images/logosmall.png"
                    />
                  </div>

                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    className={classes.menuicon}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleClick('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleClick('/about')}>
                      About
                    </MenuItem>
                    <MenuItem onClick={() => handleClick('/service')}>
                      Our Services
                    </MenuItem>
                    <MenuItem onClick={() => handleClick('/blog')}>
                      News & Blog
                    </MenuItem>
                    <MenuItem onClick={() => handleClick('/client')}>
                      Our Clients
                    </MenuItem>
                    <MenuItem onClick={() => handleClick('/testimonial')}>
                      Testimonials
                    </MenuItem>
                    <MenuItem onClick={() => handleClick('/contact')}>
                      Contact
                    </MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <div className={classes.options}>
                <Link
                  onClick={() => handleButtonClick('/')}
                  className={classes.btn}
                  size="large"
                >
                  Home
                </Link>
                <Link
                  onClick={() => handleButtonClick('/about')}
                  className={classes.btn}
                >
                  About
                </Link>
                <Link
                  onClick={() => handleButtonClick('/service')}
                  className={classes.btn}
                >
                  Our Services
                </Link>
                <Link
                  onClick={() => handleButtonClick('/blog')}
                  className={classes.btn}
                >
                  News & Blog
                </Link>
                <Link
                  onClick={() => handleButtonClick('/client')}
                  className={classes.btn}
                >
                  Our Clients
                </Link>
                <Link
                  onClick={() => handleButtonClick('/testimonial')}
                  className={classes.btn}
                >
                  Testimonials
                </Link>
                <Link
                  onClick={() => handleButtonClick('/contact')}
                  className={classes.btn}
                >
                  Contact
                </Link>
                <Divider orientation="vertical" flexItem />
                <TwitterIcon className={classes.icons} />

                <Divider orientation="vertical" flexItem />
                <FacebookIcon className={classes.icons} />

                <Divider orientation="vertical" flexItem />

                <InstagramIcon className={classes.icons} />
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBArMat);
