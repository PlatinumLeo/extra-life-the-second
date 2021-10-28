import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';

const Countdown = ({ dayOfPlay }) => {
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  let timeLeft = dayOfPlay - now;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '700px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography color='textSecondary' variant="h5">{Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toLocaleString()}</Typography>
        <Typography color='textSecondary' variant="caption" style={{ textTransform: 'uppercase' }}>Days</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography color='textSecondary' variant="h5">{Math.floor(timeLeft / (1000 * 60 * 60)).toLocaleString()}</Typography>
        <Typography color='textSecondary' variant="caption" style={{ textTransform: 'uppercase' }}>Hours</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography color='textSecondary' variant="h5">{Math.floor(timeLeft / (1000 * 60)).toLocaleString()}</Typography>
        <Typography color='textSecondary' variant="caption" style={{ textTransform: 'uppercase' }}>Minutes</Typography>
      </div>
    </div>
  );
};

export default Countdown;
