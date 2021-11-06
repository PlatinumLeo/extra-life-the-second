import React, { createContext, useEffect, useState } from 'react';

const CHANNEL_ID = '23679089';

export const StreamContext = createContext([]);

const StreamProvider = ({ children }) => {
  const [streams, setStreams] = useState([]);

  const fetchStream = async() => {
    const response = await fetch(`/api/twitch/streams?channel=${CHANNEL_ID}`);
    const json = await response.json();
    console.log(json);
    setStreams(json.streams);
  };

  useEffect(() => {
    fetchStream();
  }, []);

  return (
    <StreamContext.Provider value={streams}>
      {children}
    </StreamContext.Provider>
  )
};

export default StreamProvider;
