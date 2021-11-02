// Source: https://techinscribed.com/building-react-app-using-material-ui-with-support-for-multiple-switchable-themes/
// Source: https://dev.to/nas5w/toggling-light-dark-theme-in-react-with-usecontext-39hn

import React, { createContext, useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { getThemeByName } from './theme';

export const ThemeContext = createContext({
  themeName: 'alpha',
  updateThemeName: (themeName) => {},
  themeType: 'light',
  toggleThemeType: () => {}
});

const ThemeProvider = ({ children }) => {
  const currentThemeName = localStorage.getItem('appTheme') || 'alpha';
  const currentThemeType = localStorage.getItem('appType') || 'light';

  const [themeName, setThemeName] = useState(currentThemeName);
  const [themeType, setThemeType] = useState(currentThemeType);
  const toggleThemeType = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
    localStorage.setItem('appType', themeType === 'light' ? 'dark' : 'light');
  };
  const updateThemeName = (themeName) => {
    setThemeName(themeName);
    localStorage.setItem('appTheme', themeName);
  };

  const theme = getThemeByName(themeName, themeType);

  return (
    <ThemeContext.Provider value={{ themeName, updateThemeName, themeType, toggleThemeType }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
