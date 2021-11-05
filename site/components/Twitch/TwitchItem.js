import React from 'react';
import {
  Link,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

const TwitchItem = ({ channel, stream }) => {
  return (
    <ListItem>
      <ListItemText
        primary={channel.display_name}/>
    </ListItem>
  );
};

export default TwitchItem;
