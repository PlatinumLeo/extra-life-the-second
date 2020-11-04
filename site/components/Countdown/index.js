import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';

const padding = number => {
  let output = '' + number;
  while(output.length < 2) output = '0' + output;
  return output;
} 

const parseTimeLeft = timeleft => {
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  return `${days}:${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
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
