import React, { createContext, useEffect, useMemo, useState } from 'react';

const TEAM_ID = '57288';
const DEFAULT_REFRESH_RATE = 15 * 1000;

const defaultAutoRefresh = {
  enabled: false,
  interval: DEFAULT_REFRESH_RATE,
  toggleAutoRefresh: () => {},
  updateInterval: (milliseconds) => {}
};

export const TeamContext = createContext({});
export const DonationsContext = createContext([]);
export const DonorsContext = createContext([]);
export const AutoRefreshContext = createContext(defaultAutoRefresh);

const DonorDriveApiProvider = ({ children }) => {
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);
  const [interval, setInterval] = useState(DEFAULT_REFRESH_RATE);
  const [team, setTeam] = useState({});
  const [donations, setDonations] = useState([]);
  const [donors, setDonors] = useState([]);

  const fetchTeam = async() => {
    const response = await fetch(`/api/teams/${TEAM_ID}`);
    const json = await response.json();
    if (json.name && json.name == 'Error') {
      console.log(json);
      setTeam({});
    } else {
      setTeam(json);
    }
  };

  const fetchDonations = async() => {
    const response = await fetch(`/api/teams/${TEAM_ID}/donations`);
    const json = await response.json();
    if (json.name && json.name == 'Error') {
      console.log(json);
      setDonations([]);
    } else {
      setDonations(json);
    }
  };

  const fetchDonors = async() => {
    const response = await fetch(`/api/teams/${TEAM_ID}/donors`);
    const json = await response.json();
    if (json.name && json.name == 'Error') {
      console.log(json);
      setDonors([]);
    } else {
      setDonors(json);
    }
  };

  useEffect(() => {
      const fetchInterval = setInterval(() => {
        fetchTeam();
        fetchDonations();
        fetchDonors();
      }, interval);
  
      return () => clearInterval(fetchInterval);
  }, []);

  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled)
  };

  const donationsContext = useMemo(() => (donations), [donations]);
  const teamContext = useMemo(() => (team), [team]);
  const donorsContext = useMemo(() => (donors), [donors]);

  return (
    <TeamContext.Provider value={teamContext}>
      <AutoRefreshContext.Provider value={{ enabled: autoRefreshEnabled, interval, toggleAutoRefresh }}>
        <DonorsContext.Provider value={donorsContext}>
          <DonationsContext.Provider value={donationsContext}>
            {children}
          </DonationsContext.Provider>
        </DonorsContext.Provider>
      </AutoRefreshContext.Provider>
    </TeamContext.Provider>
  );
};

export default DonorDriveApiProvider;
