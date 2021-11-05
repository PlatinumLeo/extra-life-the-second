import React from 'react';
import { connect } from 'react-redux';

import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material';

const mapStateToProps = state => ({
    donations: state.donations
});

const DonationList = ({ donations }) => {
  donations.sort((a, b) => b.amount - a.amount);

    return (
        <React.Fragment>
            <Typography variant="h3">
                Biggest Donations
            </Typography>
            <List>
                {donations.map((item) => (
                    <ListItem alignItems="flex-start" key={`item-${item.donationID}`}>
                        <ListItemAvatar>
                            <Avatar alt={item.displayName ? item.displayName : "Anonymous Donor"} src={item.avatarImageURL}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.displayName ? item.displayName : "Anonymous Donor"}
                            secondary={`$${item.amount}`} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
};

export default connect(mapStateToProps)(DonationList);
