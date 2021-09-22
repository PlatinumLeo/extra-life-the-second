import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';

import Countdown from '../../components/Countdown';
import Donation from '../../components/Donation';
import Events from '../../components/Events';
import Explaination from '../../components/Explaination';

import { useDefaultStyles } from '../../styles';

const LandingPage = props => {
  const classes = useDefaultStyles();
  const dayOfPlay = new Date("Nov 6, 2021 11:00:00").getTime();

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} lg={6}>
        <Events />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Explaination />
      </Grid>
      <Grid container item xs={12} lg={6}>
        <Donation />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h2">Day of Play: November 6th 11:00 AM ET</Typography>
        <Countdown dayOfPlay={dayOfPlay} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
