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
  root: { padding: '24px 0 24px 0', borderBottom: `1px solid ${theme.palette.common.black}` },
  wrapper: { float: 'left', left: '50%', position: 'relative' },
  content: { float: 'left', left: '-50%', position: 'relative' }
}));

const Sponsor = props => {
  const theme = useTheme();
  const classes = getSponsorStyles(theme);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.wrapper}><CHOALogo className={classes.content} /></Grid>
      <Grid item xs={12} className={classes.wrapper}><CMNHLogo className={classes.content} /></Grid>
      <Grid item xs={12} className={classes.wrapper}><TwitchLogo className={classes.content} /></Grid>
    </Grid>
  )
};

export default Sponsor;
