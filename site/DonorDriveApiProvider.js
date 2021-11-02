import React, { createContext, useEffect, useMemo, useState } from 'react';

const TEAM_ID = '57288';

const defaultAutoRefresh = {
  enabled: false,
  interval: 5000,
  toggleAutoRefresh: () => {},
  updateInterval: (milliseconds) => {}
};

export const TeamContext = createContext({});
export const DonationsContext = createContext([]);
export const AutoRefreshContext = createContext(defaultAutoRefresh);

const DonorDriveApiProvider = ({ children }) => {
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);
  const [interval, setInterval] = useState(5000);
  const [team, setTeam] = useState({});
  const [donations, setDonations] = useState([]);

  const fetchTeam = async() => {
    const response = await fetch(`/api/teams/${TEAM_ID}`);
    const json = await response.json();
    setTeam(json);
  };

  const fetchDonations = async() => {
    const response = await fetch(`/api/teams/${TEAM_ID}/donations`);
    const json = await response.json();
    setDonations(json);
  };

  useEffect(() => {
    fetchTeam();
    fetchDonations();
  }, []);

  useEffect(() => {
      const fetchInterval = setInterval(() => {
        if (autoRefreshEnabled) { fetchDonations(); }
      }, interval);
  
      return () => clearInterval(fetchInterval);
  }, []);

  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled)
  };

  const donationsContext = useMemo(() => (donations), [donations]);
  const teamContext = useMemo(() => (team), [team]);

  return (
    <TeamContext.Provider value={teamContext}>
      <AutoRefreshContext.Provider value={{ enabled: autoRefreshEnabled, interval, toggleAutoRefresh }}>
        <DonationsContext.Provider value={donationsContext}>
          {children}
        </DonationsContext.Provider>
      </AutoRefreshContext.Provider>
    </TeamContext.Provider>
  );
};

export default DonorDriveApiProvider;
