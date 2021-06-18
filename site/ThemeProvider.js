// Source: https://techinscribed.com/building-react-app-using-material-ui-with-support-for-multiple-switchable-themes/

import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { getThemeByName } from './theme';

export const ThemeContext = React.createContext((themeName) => {});

const ThemeProvider = props => {
  const currentThemeName = localStorage.getItem('appTheme') || 'default';
  const [themeName, _setThemeName] = useState(currentThemeName);
  const theme = getThemeByName(themeName);

  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
