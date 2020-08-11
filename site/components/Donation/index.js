import React, { useEffect, useState } from 'react';

import {
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'

import ExtraLifeService from '../../services/ExtraLifeService';

const Donation = props => {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        ExtraLifeService.getTeam()
            .then(response => setTeam(response.data))
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

    return (
        <div>
            <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
            {goalComponent()}
        </div>
    );
};

export default Donation;
