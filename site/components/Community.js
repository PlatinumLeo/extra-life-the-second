import React from 'react';

import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import Stream from './Stream';

const Community = ({...props}) => {
  return (
    <Container fixed>
      <Grid container>
        <Grid item mobile={12}>
          <Stream />
        </Grid>
        <Grid item mobile={12} tablet={4}>
          <Typography variant="h4" align="center">What is this?</Typography>
          <Typography>
            We want to test out the stream and make sure we have all of the processes worked out. Alex will also probably be streaming practice of his Mega Man X4 speed runs here.
          </Typography>
        </Grid>
        <Grid item mobile={12} tablet={8}>
          <Typography variant="h4" align="center">Upcoming Events</Typography>
          <Typography>
            Leading up to the Day of Play on November 7th, 11 am EST, we may hold various events to get people hype! Here will be a list of upcoming events people can participate in.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Community;
