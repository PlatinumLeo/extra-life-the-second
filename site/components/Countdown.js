import React, { useEffect, useState } from 'react';

import DataDisplay from './DataDisplay';

const Countdown = ({ dayOfPlay, ...props }) => {
  const [now, setNow] = useState(new Date().getTime());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setNow(new Date().getTime());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  let timeLeft = dayOfPlay - now;
  let dataPoints = [
    { title: Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toLocaleString(), subtitle: 'days' },
    { title: Math.floor(timeLeft / (1000 * 60 * 60)).toLocaleString(), subtitle: 'hours' },
    { title: Math.floor(timeLeft / (1000 * 60)).toLocaleString(), subtitle: 'minutes' }
  ];

  return (
    <DataDisplay {...props} dataPoints={dataPoints} />
  );
};

export default Countdown;
