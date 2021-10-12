import React, { createContext, useState } from 'react';

export const DonationsContext = createContext({
  donations: [],
  updateDonations: (donations) => {}
});

const DonationsProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  const updateDonations = (donations) => {
    setDonations(donations);
  };

  return (
    <DonationsContext.Provider value={{ donations, updateDonations }}>
      {children}
    </DonationsContext.Provider>
  )
};

export default DonationsProvider;
