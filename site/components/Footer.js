import React from 'react';
import {
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const getFooterStyles = makeStyles((theme) => ({
  root: {
    borderTop: `2px solid ${theme.palette.primary.main}`,
    padding: '24px 24px 96px 24px'
  },
  rule: { border: `1px solid ${theme.palette.primary.main}`, width: '60px' },
  text: { paddingRight: '1em' },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' }
}));

const Footer = props => {
  const theme = useTheme();
  const classes = getFooterStyles(theme);
  
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="caption" className={classes.text}>Event Info</Typography>
        <Typography variant="caption" className={classes.text}>Community</Typography>
        <Typography variant="caption" className={classes.text}>About Us</Typography>
        <Typography variant="caption" className={classes.text}>Discord</Typography>
      </div>
      <Typography variant="caption">©2021 Slalom, LLC. All rights reserved</Typography>
    </div>
  );
};

export default Footer;
