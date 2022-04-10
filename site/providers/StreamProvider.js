import React, { createContext, useEffect, useState } from 'react';

const CHANNEL_ID = '23679089';
const DEFAULT_REFRESH_RATE = 15 * 1000;
const STREAMING_REFRESH_RATE = 5 * 60 * 1000;

export const StreamContext = createContext([]);

const StreamProvider = ({ children }) => {
  const [streams, setStreams] = useState([]);

  const fetchStream = async() => {
    const response = await fetch(`/api/twitch/streams?channel=${CHANNEL_ID}`);
    const json = await response.json();
    setStreams(json.streams);
  };

  useEffect(() => {
    // const fetchInterval = setInterval(() => {
      fetchStream();
    // }, (streams.length > 0) ? STREAMING_REFRESH_RATE : DEFAULT_REFRESH_RATE);

    // return () => clearInterval(fetchInterval);
  }, []);

  return (
    <StreamContext.Provider value={streams}>
      {children}
    </StreamContext.Provider>
  )
};

export default StreamProvider;
