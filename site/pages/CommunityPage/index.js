import React from 'react';

import {
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import Stream from '../../components/Stream';
import Twitch from '../../components/Twitch';

const CommunityPage = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stream />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" align="center">What is this?</Typography>
        <Typography>
          We want to test out the stream and make sure we have all of the processes worked out. Alex will also probably be streaming practice of his Mega Man X4 speed runs here.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h4" align="center">Upcoming Events</Typography>
        <Typography>
          Leading up to the Day of Play on November 7th, 11 am EST, we may hold various events to get people hype! Here will be a list of upcoming events people can participate in.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CommunityPage;
