import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { themeNames } from '../theme';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Switch
} from '@material-ui/core';

import { useDefaultStyles } from '../styles';

function capitalizeFirstLetter([first, ...rest], locale = navigator.language) {
  return first.toLocaleUpperCase(locale) + rest.join('');
}

const SettingsPage = props => {
  const classes = useDefaultStyles();
  const { themeName, updateThemeName, themeType, toggleThemeType } = useContext(ThemeContext);

  let theme = localStorage.getItem('appTheme') || 'default';

  function handleChange(event) {
    updateThemeName(event.target.value);
  }

  return (
    <div className={classes.main}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Theme</FormLabel>
        <RadioGroup aria-label="theme" name="theme1" value={themeName} onChange={handleChange}>
          <FormControlLabel value="default" control={<Radio />} label="Default" />
          <FormControlLabel value="monochrome" control={<Radio />} label="Monochrome" />
        </RadioGroup>
        <FormControlLabel control={<Switch checked={themeType === 'dark'} onChange={toggleThemeType}/>} label="Dark Mode" />
      </FormControl>
    </div>
  )
};

export default SettingsPage;
