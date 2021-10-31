import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import CHOALogo from './svg/CHOALogo';
import CMNHLogo from './svg/CMNHLogo';
import TwitchLogo from './svg/TwitchLogo';

const getSponsorStyles = makeStyles((theme) => ({
  root: { padding: '48px 0 48px 0', borderBottom: `1px solid ${theme.palette.common.black}` },
  wrapper: { padding: '0 24px 12px 24px' },
  choa: { left: 'calc(50% - 99px)', position: 'relative' },
  cmnh: { left: 'calc(50% - 70px)', position: 'relative' },
  twitch: { left: 'calc(50% - 51px)', position: 'relative' },
}));

const Sponsor = props => {
  const theme = useTheme();
  const classes = getSponsorStyles(theme);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.wrapper}><CHOALogo className={classes.choa} /></Grid>
      <Grid item xs={12} className={classes.wrapper}><CMNHLogo className={classes.cmnh} /></Grid>
      <Grid item xs={12} className={classes.wrapper}><TwitchLogo className={classes.twitch} /></Grid>
    </Grid>
  )
};

export default Sponsor;
