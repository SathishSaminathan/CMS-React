import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './NavMatStyles.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:"absolute",
    top:"20%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"78%",
    justifyContent:"center",
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    height:"9vh",
    [theme.breakpoints.down('md')]: {
      width:"100%",
      top:"0%",
      left:"0%",
      transform:"none",
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
    paddingBottom:"10px",
    flex: 1,
    alignContent:"center",
    textAlign:"center",
    alignContent:"center",
    paddingBottom:"25px"
  },
  containerIcons:{
      
    flex: 1,
    justifyContent: 'space-evenly',
  },
  hamburger:{
      display:"flex",
      justifyContent:"flex-end",
      paddingBottom:"35px" 
  },
  btn:{
     color:"white",
      
      '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
        transition:"none",
        borderRadius:"20px"

  },
},
icons:{
  marginTop:"5px"
},
menuicon:{
  display:"flex",
  
  
}

 
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
      <AppBar position="static" style={{backgroundColor: "#a40606",
backgroundImage:" linear-gradient(315deg, #a40606 0%, #d98324 74%)",
}}>
        <Toolbar >
          

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
                  <MenuItem onClick={() => handleClick('/blog')}>News & Blog</MenuItem>
                  <MenuItem onClick={() => handleClick('/client')}>Our Clients</MenuItem>
                  <MenuItem onClick={() => handleClick('/testimonial')}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => handleClick('/contact')}>Contact</MenuItem>
                </Menu>
                </div>
              </>
            ) : (
              <div className={classes.options}>
                <Button
                  onClick={() => handleButtonClick('/')}
                  className={classes.btn}
                  size="large"
                >
                  Home
                </Button>
                <Button
                  onClick={() => handleButtonClick('/about')}
                  className={classes.btn}
                >
                  About
                </Button>
                <Button
                  onClick={() => handleButtonClick('/service')}
                  className={classes.btn}
                >
                  Our Services
                </Button>
                <Button
                  onClick={() => handleButtonClick('/blog')}
                  className={classes.btn}
                >
                  News & Blog
                </Button>
                <Button
                  onClick={() => handleButtonClick('/client')}
                  className={classes.btn}
                >
                  Our Clients
                </Button>
                <Button
                  onClick={() => handleButtonClick('/testimonial')}
                  className={classes.btn}
                >
                  Testimonials
                </Button>
                <Button
                  onClick={() => handleButtonClick('/contact')}
                  className={classes.btn}
                >
                  Contact
                </Button>
                <FacebookIcon className={classes.icons}/>
                <TwitterIcon  className={classes.icons}/>
                <InstagramIcon  className={classes.icons}/>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBArMat);
