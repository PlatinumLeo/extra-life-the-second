import React from 'react';
import { Typography } from '@material-ui/core';

const Sponsor = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '1440px' }}>
        <Typography>slalom</Typography>
        <Typography>slalom_build</Typography>
        <Typography>twitch</Typography>
        <Typography>Children's Miracle Network Hospitals</Typography>
        <Typography>Children's Healthcare of Atlanta</Typography>
        <Typography>slalom_build</Typography>
      </div>
    </div>
  );
};

export default Sponsor;
