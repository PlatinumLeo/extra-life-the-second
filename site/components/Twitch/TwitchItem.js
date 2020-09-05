import React from 'react';
import {
  Link,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';

const TwitchItem = ({ channel, stream }) => {
  return (
    <ListItem>
      <ListItemText
        primary={channel.display_name}/>
    </ListItem>
  );
};

export default TwitchItem;
