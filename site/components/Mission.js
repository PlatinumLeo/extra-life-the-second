import React from 'react';
import {
  Box,
  Button,
  Typography
} from '@mui/material';

import {
  CONTENT_CENTERED_BUTTON_SX,
  CONTENT_CENTERED_RULE_SX,
  CONTENT_CENTERED_COPY_SX,
  CONTENT_CENTERED_TITLE_SX
} from '../utils/system';

const ROOT_SX = {
  padding: '48px 0 24px 0'
};

const Mission = ({...props}) => {
  return (
    <Box sx={ROOT_SX}>
      <Typography variant="h3" align="center" color='primary' style={CONTENT_CENTERED_TITLE_SX}>Our Mission</Typography>
      <Box component='hr' sx={CONTENT_CENTERED_RULE_SX} />
      <Typography align="center" color='primary' sx={CONTENT_CENTERED_COPY_SX}>Extra Life is a game-a-thon, where people get together to play games for charity. Extra Life partners with local hospitals across the United States and Canada. Donations are used for the most immediate needs facing local kids; everything from patient programs, new equipment, and charitable care.</Typography>
      <Button variant='outlined' color='secondary' sx={CONTENT_CENTERED_BUTTON_SX}>Meet the Team</Button>
    </Box>
  );
};

export default Mission;
