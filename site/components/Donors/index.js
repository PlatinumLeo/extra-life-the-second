import React, { useContext } from 'react';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';

import { DonorsContext } from '../../DonorDriveApiProvider';

import getStyles from './styles';

const DonationListItem = ({ avatarImageURL, displayName, sumDonations }) => {
  const classes = getStyles();
  const dollarFormat = Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={displayName ? displayName : 'Anonymous'} src={avatarImageURL} />
      </ListItemAvatar>
      <ListItemText 
        primary={displayName ? displayName : 'Anonymous'}
        secondary={dollarFormat.format(sumDonations)} />
    </ListItem>
  );
};

const Donors = () => {
  const classes = getStyles();
  const donors = useContext(DonorsContext);

  donors.sort((a, b) => b.sumDonations - a.sumDonations);

  return (
    <div className={classes.root}>
      <Typography variant="h3">Donors</Typography>
      <List>
        {donors.map(donation => (
          <DonationListItem {...donation} key={`donor-list-item-${donation.donorID}`} />
        ))}
      </List>
    </div>
  )
};

export default Donors;
