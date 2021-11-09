// Source: https://techinscribed.com/building-react-app-using-material-ui-with-support-for-multiple-switchable-themes/
// Source: https://dev.to/nas5w/toggling-light-dark-theme-in-react-with-usecontext-39hn

import React, { createContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { getThemeByName } from './theme';

export const ThemeContext = createContext({
  themeName: 'alpha',
  updateThemeName: (themeName) => {},
  themeMode: 'light',
  toggleThemeType: () => {}
});

const ThemeProvider = ({ children }) => {
  const currentThemeName = localStorage.getItem('appTheme') || 'alpha';
  const currentThemeMode = localStorage.getItem('appType') || 'light';

  const [themeName, setThemeName] = useState(currentThemeName);
  const [themeMode, setThemeType] = useState(currentThemeMode);
  const toggleThemeType = () => {
    setThemeType(themeMode === 'light' ? 'dark' : 'light');
    localStorage.setItem('appType', themeMode === 'light' ? 'dark' : 'light');
  };
  const updateThemeName = (themeName) => {
    setThemeName(themeName);
    localStorage.setItem('appTheme', themeName);
  };

  const theme = getThemeByName(themeName, themeMode);

  return (
    <ThemeContext.Provider value={{ themeName, updateThemeName, themeMode, toggleThemeType }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
