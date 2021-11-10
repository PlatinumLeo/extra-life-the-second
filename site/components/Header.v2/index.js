/** @jsx jsx */

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@mui/material';
import {
  Menu as MenuIcon
} from '@mui/icons-material';
import { jsx } from '@emotion/react';

import ExtraLifeLogo from '../../assets/images/Logos/Generic/Extra Life_white.png';

const Header = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const imageSrc = ExtraLifeLogo;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, color: 'primary.contrastText' }}>
      <AppBar position='sticky' sx={{ height: '80px' }}>
        <Toolbar sx={{ flexGrow: { mobile: 1, laptop: 'unset' }, alignSelf: 'center', maxWidth: '1188px' }}>
          <RouterLink to="/" sx={{ float: 'left' }}>
            <img src={imageSrc} css={{ height: '45px' }} />
          </RouterLink>
          <Toolbar sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { mobile: 'none', desktop: 'block' } }}>
              <Button component={RouterLink} to="/" color='inherit'>
                Home
              </Button>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color='inherit'>
                Event Info
              </Button>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} color='inherit'>
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
              <Button component={RouterLink} to="/community" color='inherit'>
                Community
              </Button>
              <Button component={RouterLink} to="/aboutus" color='inherit'>
                About Us
              </Button>
              <Button
                color='inherit'
                href="https://discord.gg/NvshADM"
                target="_blank">Discord</Button>
            </Box>
          </Toolbar>
          <Button variant='outlined' href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=456320#donate" target="_blank">
              Donate
          </Button>
          <Box sx={{ display: { mobile: 'block', desktop: 'none' } }}>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} sx={{ color: 'primary.contrastText' }}>
              <MenuIcon color='inherit' />
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
