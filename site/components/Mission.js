import React from 'react';
import { Button, Typography } from '@material-ui/core';

const Mission = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" align="center" style={{ textTransform: 'uppercase' }}>Our Mission</Typography>
      <hr style={{ width: '100px', border: '3px solid' }} />
      <Typography align="center" style={{ maxWidth: '700px' }}>Extra Life is a game-a-thon, where people get together to play games for charity. Extra Life partners with local hospitals across the United States and Canada. Donations are used for the most immediate needs facing local kids; everything from patient programs, new equipment, and charitable care.</Typography>
      <Button>Meet the Team</Button>
    </div>
  );
};

export default Mission;
