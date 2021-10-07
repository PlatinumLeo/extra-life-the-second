import React from 'react';
import { Typography } from '@material-ui/core';

const Hero = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" align="center" style={{ maxWidth: '850px' }}>We play games to help children’s hospitals in the united states and canada</Typography>
      <hr style={{ width: '100px', border: '3px solid' }} />
      <Typography align="center" style={{ maxWidth: '700px' }}>The money we raise goes to the Children's Hospital of Atlanta. It will pay for equipment and medical treatment for families in need, helping to make sure children get the best care possible, and a family isn't made destitute taking care of their child.</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '700px' }}>
        <Typography>146 Days</Typography>
        <Typography>3,505 Hours</Typography>
        <Typography>210,240 Minutes</Typography>
      </div>
    </div>
  );
};

export default Hero;
