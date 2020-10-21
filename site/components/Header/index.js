import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Divider,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import ControllerImage from '../../assets/images/Icons/controller_white.png';
import ElDiceImage from '../../assets/images/Icons/EL_dice.png';
import ExtraLifeLogo from '../../assets/images/Logos/Generic/Extra Life_white.png';

import useStyles from './styles';


const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = theme.breakpoints.values.sm >= props.dimensions.width

  const imageSrc = isMobile ? ControllerImage : ExtraLifeLogo;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderLeftButton = () => {
    if (!isMobile) {
      return (
        <RouterLink to="/" className={classes.left}>
          <img src={imageSrc} className={classes.image} />
        </RouterLink>
      );
    }
  
    return (
      <>
        <Button className={classes.left} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <img src={imageSrc} className={classes.image} />
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            component={RouterLink}
            to="/"
            onClick={handleClose}
          >Home</MenuItem>
          <MenuItem
            component={RouterLink}
            to="/schedule"
            onClick={handleClose}
            >Schedule</MenuItem>
          <MenuItem
            component={RouterLink}
            to="/participate"
            onClick={handleClose}
            >Participation FAQ</MenuItem>
          <MenuItem
            component={RouterLink}
            to="/games"
            onClick={handleClose}
            >Games List</MenuItem>
          <Divider />
          <MenuItem
            component={RouterLink}
            to="/community"
            onClick={handleClose}
            >Community</MenuItem>
          <Divider />
          <MenuItem
            component={RouterLink}
            to="/aboutus"
            onClick={handleClose}
            >About Us</MenuItem>
      </Menu>
      </>
    );
  };

  const renderCenterArea = () => {
    if (isMobile) {
      return (
        <Typography variant="h4" className={classes.title} align="center">
          Slalom { isMobile ? '' : ' - Atlanta'}
        </Typography>
      );
    }
    
    return (
      <Toolbar align="center" className={classes.center}>
        <Button component={RouterLink} to="/" className={classes.centerButton}>
          Home
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.centerButton}>
          Event Info
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} className={classes.centerButton}>
          <MenuItem
            component={RouterLink}
            to="/schedule"
            onClick={handleClose}
            >Schedule</MenuItem>
          <MenuItem
            component={RouterLink}
            to="/participate"
            onClick={handleClose}
            >Participation FAQ</MenuItem>
          <MenuItem
            component={RouterLink}
            to="/games"
            onClick={handleClose}
            >Games List</MenuItem>
        </Menu>
        <Button component={RouterLink} to="/community" className={classes.centerButton}>
          Community
        </Button>
        <Button component={RouterLink} to="/aboutus" className={classes.centerButton}>
          About Us
        </Button>
        <Button
          className={classes.centerButton}
          href="https://discord.gg/NvshADM"
          target="_blank">Discord</Button>
      </Toolbar>
    );
  };

  const renderRightButton = () => (
    <Button className={classes.right} color="secondary" variant="outlined" href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">
      {!isMobile && 
      <Typography className={classes.buttonText}>
        Donate
      </Typography>
      }
      <img src={ElDiceImage} className={classes.buttonImage}/>
    </Button>
  );
  
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.toolbar}>
        <Toolbar className={classes.centerBar}>
          {renderLeftButton()}
          {renderCenterArea()}
          {renderRightButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
