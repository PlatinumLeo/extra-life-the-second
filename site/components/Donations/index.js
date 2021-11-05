import React, { useContext } from 'react';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';

import { DonationsContext } from '../../DonorDriveApiProvider';

import getStyles from './styles';

const DonationListItem = ({ amount, avatarImageURL, displayName }) => {
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
        secondary={dollarFormat.format(amount)} />
    </ListItem>
  );
};

const Donations = ({ props }) => {
  const classes = getStyles();
  const donations = useContext(DonationsContext);

  donations.sort((a, b) => b.amount - a.amount);

  return (
    <div className={classes.root}>
      <Typography variant="h3">Donations</Typography>
      <List>
        {donations.map(donation => (
          <DonationListItem {...donation} key={`donation-list-item-${donation.donationID}`} />
        ))}
      </List>
    </div>
  )
};

export default Donations;
