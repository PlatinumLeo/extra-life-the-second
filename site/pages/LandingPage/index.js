import React, { useEffect, useState } from 'react';

import {
    Container,
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'


import ExtraLifeService from '../../services/ExtraLifeService';
import useStyles from './styles';

const parseTimeLeft = timeleft => {
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    return `${days}:${hours}:${minutes}:${seconds}`;
};

const LandingPage = props => {
    const dayOfPlay = new Date("Nov 11, 2020 11:00:00").getTime();
    const [now, setNow] = useState(new Date().getTime());
    const [team, setTeam] = useState(null);

    useEffect(() => {
        initialize();

        if (!dayOfPlay || new Date().getTime() >= dayOfPlay) {
            return;
        }

        const timerInterval = setInterval(() => {
            setNow(new Date().getTime());
        }, 1000);

        return () => clearInterval(timerInterval);
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
            <Typography variant="h3">Countdown: {parseTimeLeft(dayOfPlay - now)}</Typography>
        </Container>
    );
};

export default LandingPage;
