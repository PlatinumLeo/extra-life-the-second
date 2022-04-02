import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Typography
} from '@mui/material';

const ROOT_SX = {
  borderTop: (theme) => `2px solid ${theme.palette.primary.main}`,
  padding: '24px 24px 96px 24px'
};

const Footer = props => {
  return (
    <Box sx={ROOT_SX}>
      <div>
        <Button component={RouterLink} to='/'>Event Info</Button>
        <Button component={RouterLink} to='/community'>Community</Button>
        <Button component={RouterLink} to='/aboutus'>About Us</Button>
        <Button href="https://discord.gg/NvshADM" target="_blank">Discord</Button>
      </div>
      <Typography variant="caption">©2021 Slalom, LLC. All rights reserved</Typography>
    </Box>
  );
};

export default Footer;
