import React, { useContext, useState } from 'react';
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

import { SizeContext } from '../../AdaptivityProvider';

const Header = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = useState(null);

  const { width } = useContext(SizeContext);

  const isMobile = theme.breakpoints.values.sm >= width;

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
        <Button component={RouterLink} to="/" color='primary' variant='contained'>
          Our Mission
        </Button>
        <Button component={RouterLink} to="/" color='primary' variant='contained'>
          Community
        </Button>
        <Button component={RouterLink} to="/" color='primary' variant='contained'>
          Meet the Team
        </Button>
        <Button className={classes.centerButton} href="https://discord.gg/NvshADM" target="_blank" color='primary' variant='contained'>
          Discord
        </Button>
      </Toolbar>
    );
  };

  const renderRightButton = () => (
    <Button className={classes.right} variant="outlined" href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">
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
