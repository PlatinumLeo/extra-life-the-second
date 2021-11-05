import React from 'react';

import {
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

// let data = require('./data.json');
import data from './ace';

const Events = ({ }) => {
  // console.log(data);

  return (
    <>
      <Typography variant="h4">Upcoming Events</Typography>
      <List>
        {/* {data.map((item) => {
          <ListItem>
            <ListItemText
              primary="This is supposed to be something else" />
          </ListItem>
        })} */}
        <ListItem key="event-item-0">
          <ListItemText
            primary="SRB2K Live & Learn"
            secondary="October 9th 7pm ET" />
        </ListItem>
        <ListItem key="event-item-1">
          <ListItemText
            primary="Smash Bros. the Donation Goal"
            secondary="October 16th 7pm ET" />
        </ListItem>
        <ListItem key="event-item-2">
          <ListItemText
            primary="Mega Man Madness"
            secondary="October 23rd 7pm ET" />
        </ListItem>
        <ListItem key="event-item-3">
          <ListItemText
            primary="Fight Hype Night! DBFZ & Lethal League Blaze"
            secondary="October 30th 7pm ET" />
        </ListItem>
      </List>
    </>
  );
};

export default Events;
