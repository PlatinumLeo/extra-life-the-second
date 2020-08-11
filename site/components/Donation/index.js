import React, { useEffect, useState } from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'

import ExtraLifeService from '../../services/ExtraLifeService';

const Donation = props => {
    const [team, setTeam] = useState(null);
    const [donations, setDonations] = useState(null);

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

    const listComponent = () => {
        if (!donations) {
            return (<Skeleton variant="text" />);
        }

        return (
            <List>
                {donations.map((item) => (
                    <ListItem key={`item-${item.donationID}`}>
                        <ListItemText>{`${item.displayName}: $${item.amount}`}</ListItemText>
                    </ListItem>
                ))}
            </List>
        )
    };

    return (
        <div>
            <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
            {goalComponent()}
            {listComponent()}
        </div>
    );
};

export default Donation;
