import React from 'react';
import { connect } from 'react-redux';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const mapStateToProps = state => ({
  donors: state.donors
});

const DonorList = ({ donors }) => {
  donors.sort((a, b) => b.sumDonations - a.sumDonations);

  if (!donors || donors.length == 0) {
    return (
      <React.Fragment>
        <Typography variant="h3">
          Biggest Donor
        </Typography>
        <List>
          {[1, 2, 3].map((item) => (
            <ListItem alignItems="flex-start" key={`donor-empty-${item}`}>
              <ListItemAvatar><Skeleton variant="circle" /></ListItemAvatar>
              <ListItemText><Skeleton /><Skeleton /></ListItemText>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h3">
          Biggest Donor
        </Typography>
        <List>
          {donors.map((item) => (
            <ListItem alignItems="flex-start" key={`item-${item.donorID}`}>
              <ListItemAvatar>
                <Avatar alt={item.displayName ? item.displayName : "Anonymous Donor"} src={item.avatarImageURL}/>
              </ListItemAvatar>
              <ListItemText
                primary={item.displayName ? item.displayName : "Anonymous Donor"}
                secondary={`$${item.sumDonations}`} />
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
};

export default connect(mapStateToProps)(DonorList);
