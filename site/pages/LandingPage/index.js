import React, { useEffect, useState } from 'react';

import {
    Container,
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'

import Countdown from '../../components/Countdown';
import ExtraLifeService from '../../services/ExtraLifeService';
import useStyles from './styles';

const LandingPage = props => {
    const dayOfPlay = new Date("Nov 11, 2020 11:00:00").getTime();
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
        <Container>
            <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
            {goalComponent()}
            <Typography variant="h2">Day of Play: November 7th 11:00 AM ET</Typography>
            <Countdown dayOfPlay={dayOfPlay} />
        </Container>
    );
};

export default LandingPage;
