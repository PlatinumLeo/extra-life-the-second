import React, { createContext, useState } from 'react';

export const TeamContext = createContext({
  team: {},
  updateTeam: (team) => {}
});

const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState({});

  const updateTeam = (team) => {
    setTeam(team);
  };

  return (
    <TeamContext.Provider value={{ team, updateTeam }}>
      {children}
    </TeamContext.Provider>
  )
};

export default TeamProvider;
