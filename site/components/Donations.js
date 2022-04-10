import React, { useContext } from 'react';

import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';

import { DonationsContext } from '../providers/DonorDriveApiProvider';

const DonationListItem = ({ amount, avatarImageURL, displayName }) => {
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

const ROOT_SX = {
  padding: '32px 24px 32px 24px'
};

const Donations = ({ props }) => {
  const donations = useContext(DonationsContext);

  donations.sort((a, b) => b.amount - a.amount);

  return (
    <Box sx={ROOT_SX}>
      <Typography variant="h3">Donations</Typography>
      <List>
        {donations.map(donation => (
          <DonationListItem {...donation} key={`donation-list-item-${donation.donationID}`} />
        ))}
      </List>
    </Box>
  )
};

export default Donations;
