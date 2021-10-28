// To do full border with clip: https://stackoverflow.com/questions/31854185/how-to-add-border-in-my-clip-path-polygon-css-style

import React from 'react';
import {
  Button,
  Typography
} from '@material-ui/core';


const Header = props => {

  return (
    <div>
      <Typography variant="h3">Button Test Area</Typography>
      <Button>Button</Button>
      <Button variant='contained'>Contained Button</Button>
      <Button variant='outlined' color='secondary'>Meet the Team</Button>
    </div>
  );
};

export default Header;
