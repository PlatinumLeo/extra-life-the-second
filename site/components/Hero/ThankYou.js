import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

const NEXT_STREAM_SX = {
  letterSpacing: '0.08em',
  padding: '0 24px 20px 24px',
  textTransform: 'uppercase'
};

const THANK_YOU_SX = {
  padding: {
    mobile: '0 24px 20px 24px',
    tablet: '0 96px 16px 96px',
    desktop: '0 560px 32px 560px',
  }
};

const ThankYou = ({ breakpoint, ...props }) => (
  <Box>
    <Typography align='center' variant={(breakpoint === 'desktop') ? 'h4' : 'h6' } sx={NEXT_STREAM_SX}>Thank you all so much!</Typography>
    <Box sx={THANK_YOU_SX}>
      <Typography align='center' display='inline'>We had a wonderful time streaming 25 hours and had a blast with everyone showing up! </Typography>
      <Typography align='center' display='inline'>While the stream has completed, we are still raising money for the Children's Miracle Network. </Typography>
      <Typography align='center' display='inline'>We hope to see everyone next year and even more people show up to have fun and help make the world a better place!</Typography>
    </Box>
  </Box>
);

export default ThankYou;
