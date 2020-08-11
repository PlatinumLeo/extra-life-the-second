import React, { useEffect, useState } from 'react';

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

import ExtraLifeService from '../../services/ExtraLifeService';

const Donation = props => {
    const [team, setTeam] = useState(null);
    const [donations, setDonations] = useState(null);
    const [donors, setDonors] = useState(null);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        ExtraLifeService.getTeam()
            .then(response => setTeam(response.data))
            .catch(err => console.log(err));

        ExtraLifeService.getTeamDonations()
            .then(response => setDonations(response.data))
            .catch(err => console.log(err));

        ExtraLifeService.getTeamDonors()
            .then(response => setDonors(response.data))
            .catch(err => console.log(err));
    };

    const goalComponent = () => {
        if (!team) {
            return (<Skeleton variant="text" />);
        }

        return (
            <Typography variant="h2">
                Goal: ${team.sumDonations}/${team.fundraisingGoal}
            </Typography>
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

export default Donation;
