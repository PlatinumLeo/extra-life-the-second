import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = props => {
  return (
    <div style={{ height: '120px', alignSelf: 'center', display: 'flex' }}>
      <Typography variant="caption" style={{ display: 'inline-block', margin: '40px 5px' }}>Event Info</Typography>
      <Typography variant="caption" style={{ display: 'inline-block', margin: '40px 5px' }}>Community</Typography>
      <Typography variant="caption" style={{ display: 'inline-block', margin: '40px 5px' }}>About Us</Typography>
      <Typography variant="caption" style={{ display: 'inline-block', margin: '40px 5px' }}>Discord</Typography>
      <Typography variant="caption" style={{ display: 'inline-block', marginTop: '40px', marginLeft: 'auto' }}>©2021 Slalom, LLC. All rights reserved</Typography>
    </div>
  );
};

export default Footer;
