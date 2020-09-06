import React from 'react';

import {
  Link,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import Twitch from '../../components/Twitch';

const CommunityPage = props => {
  return (
    <React.Fragment>
      <Typography variant="h2">Community Page</Typography>
      <Twitch />
    </React.Fragment>
  );
};

export default CommunityPage;
