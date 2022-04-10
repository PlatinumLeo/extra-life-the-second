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

import { DonorsContext } from '../providers/DonorDriveApiProvider';

const DonationListItem = ({ avatarImageURL, displayName, sumDonations }) => {
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

const ROOT_SX = {
  padding: '32px 24px 32px 24px'
};

const Donors = () => {
  const donors = useContext(DonorsContext);

  donors.sort((a, b) => b.sumDonations - a.sumDonations);

  return (
    <Box sx={ROOT_SX}>
      <Typography variant="h3">Donors</Typography>
      <List>
        {donors.map(donation => (
          <DonationListItem {...donation} key={`donor-list-item-${donation.donorID}`} />
        ))}
      </List>
    </Box>
  )
};

export default Donors;
