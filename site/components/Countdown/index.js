import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';

const parseTimeLeft = timeleft => {
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    return `${days}:${hours}:${minutes}:${seconds}`;
};

const Countdown = props => {
    const {dayOfPlay} = props;
    const [now, setNow] = useState(new Date().getTime());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setNow(new Date().getTime());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <Typography variant="h3">Countdown: {parseTimeLeft(dayOfPlay - now)}</Typography>
    );
};

export default Countdown;
