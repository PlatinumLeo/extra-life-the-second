import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

import Countdown from '../Countdown';

const COUNTDOWN_SX = {
  margin: {
    mobile: '0 24px 64px 24px',
    tablet: '0px 48px 32px 48px',
    desktop: '0px 512px 80px 512px',
  }
};

const NEXT_STREAM_SX = {
  letterSpacing: '0.08em',
  padding: '0 24px 20px 24px',
  textTransform: 'uppercase'
};

const NextStream = ({ breakpoint, dayOfPlay, ...props }) => (
  <Box>
    <Typography align='center' color='inherit' variant={(breakpoint === 'desktop') ? 'h4' : 'h6' } sx={NEXT_STREAM_SX}>Next stream starts in</Typography>
    <Countdown dayOfPlay={dayOfPlay} sx={COUNTDOWN_SX} />
  </Box>
);

export default NextStream;
