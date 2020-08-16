import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Donation.css'

import {
    Avatar,
    GridList,
    GridListTile,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'

import { TeamActions } from '../../actions';
import ExtraLifeService from '../../services/ExtraLifeService';

const mapStateToProps = state => ({
    donations: state.donations,
    donors: state.donors,
    fundraisingGoal: state.team.fundraisingGoal,
    sumDonations: state.team.sumDonations
});

const Donation = ({ donations, donors, fundraisingGoal, sumDonations }) => {
    const goalComponent = () => {
        if (!fundraisingGoal || !sumDonations) {
            return (<Skeleton variant="text" />);
        }

        // return (
        //     <Typography variant="h2">
        //         Goal: ${team.sumDonations}/${team.fundraisingGoal}
        //     </Typography>
        // );

        const spanStyle = {
            width: `25%`
        };

        // return (
        //     <Typography variant="h2">
        //         Goal: ${sumDonations}/${fundraisingGoal}
        //     </Typography>
        // );
        return (
            <div className="meter">
                <span style={spanStyle}><span></span></span>
            </div>
        );
    };

    const donationsComponent = () => {
        if (!donations) {
            return (<Skeleton variant="text" />);
        }

        return (
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
        )
    };

    const donorComponent = () => {
        if (!donors) {
            return (<Skeleton variant="text" />);
        }

        return (
            <List>
                {donors.map((item) => (
                    <ListItem alignItems="flex-start" key={`item-${item.donorId}`}>
                        <ListItemAvatar>
                            <Avatar alt={item.displayName ? item.displayName : "Anonymous Donor"} src={item.avatarImageURL}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.displayName ? item.displayName : "Anonymous Donor"}
                            secondary={`$${item.sumDonations}`} />
                    </ListItem>
                ))}
            </List>
        );
    };

    return (
        <React.Fragment>
            <GridList cols={1}>
                <GridListTile>
                    <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
                </GridListTile>
                <GridListTile>{goalComponent()}</GridListTile>
            </GridList>
            <GridList cols={2}>
                <GridListTile>{donationsComponent()}</GridListTile>
                <GridListTile>{donorComponent()}</GridListTile>
            </GridList>
        </React.Fragment>
    );
};

export default connect(mapStateToProps)(Donation);
