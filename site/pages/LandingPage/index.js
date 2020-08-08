import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Container,
    Typography
} from '@material-ui/core';

import Countdown from '../../components/Countdown';
import useStyles from './styles';

const goalComponent = team => {
    if (!team) {
        return 'Fetching team data...'
    }

    return `Goal: $${team.sumDonations}/$${team.fundraisingGoal}`;
};

const LandingPage = props => {
    const dayOfPlay = new Date("Nov 11, 2020 11:00:00").getTime();
    const [team, setTeam] = useState(null);
    const [fetchingTeam, setFetching] = useState(false);

    useEffect(() => {
        if (!dayOfPlay || new Date().getTime() >= dayOfPlay) {
            return;
        }

        if (!team && !fetchingTeam) {
            setFetching(true);
            axios.get("https://www.extra-life.org/api/teams/51804")
                .then(response => setTeam(response.data))
                .catch(err => console.log(err))
                .finally(() => setFetching(false));
        }
    }, [fetchingTeam]);

    return (
        <Container>
            <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
            <Typography variant="h2">{goalComponent(team)}</Typography>
            <Typography variant="h2">Day of Play: November 7th 11:00 AM ET</Typography>
            <Countdown dayOfPlay={dayOfPlay} />
        </Container>
    );
};

export default LandingPage;
