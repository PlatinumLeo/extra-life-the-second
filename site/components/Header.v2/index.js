import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material';
import {
  Menu as MenuIcon
} from '@mui/icons-material';

import ExtraLifeLogo from '../../assets/images/Logos/Generic/Extra Life_white.png';

import useStyles from './styles';

const Header = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const imageSrc = ExtraLifeLogo;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' sx={{ height: '80px' }}>
        <Toolbar sx={{ flexGrow: { mobile: 1, laptop: 'unset' }, alignSelf: 'center', maxWidth: '1188px' }}>
          <RouterLink to="/" sx={{ float: 'left' }}>
            <img src={imageSrc} className={classes.image} />
          </RouterLink>
          <Toolbar sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { mobile: 'none', desktop: 'block' } }}>
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
            </Box>
          </Toolbar>
          <Button variant='outlined' href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=456320#donate" target="_blank">
              Donate
          </Button>
          <Box sx={{ display: { mobile: 'block', desktop: 'none' } }}>
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
