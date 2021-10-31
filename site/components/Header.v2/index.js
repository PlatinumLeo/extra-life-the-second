import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Divider,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

import ExtraLifeLogo from '../../assets/images/Logos/Generic/Extra Life_white.png';

import useStyles from './styles';

const Header = props => {
  const theme = useTheme();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = theme.breakpoints.values.sm >= props.dimensions.width

  const imageSrc = ExtraLifeLogo;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.toolbar}>
        <Toolbar className={classes.centerBar}>
          <RouterLink to="/" className={classes.left}>
            <img src={imageSrc} className={classes.image} />
          </RouterLink>
          <Toolbar className={classes.center}>
            <Hidden lgDown>
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
            </Hidden>
          </Toolbar>
          <Button className={classes.right} variant="outlined" href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">
              Donate
          </Button>
          <Hidden xlUp>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
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
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
