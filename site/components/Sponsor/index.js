import React from 'react';
import {
  Grid
} from '@mui/material';

import getStyles from './styles';

import CHOALogo from '../svg/CHOALogo';
import CMNHLogo from '../svg/CMNHLogo';
import TwitchLogo from '../svg/TwitchLogo';

const Sponsor = props => {
  const classes = getStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item mobile={12} tablet={4} className={classes.wrapper}><CHOALogo className={classes.choa} /></Grid>
      <Grid item mobile={12} tablet={4} className={classes.wrapper}><CMNHLogo className={classes.cmnh} /></Grid>
      <Grid item mobile={12} tablet={4} className={classes.wrapper}><TwitchLogo className={classes.twitch} /></Grid>
    </Grid>
  )
};

export default Sponsor;
