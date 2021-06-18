import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { themeNames } from '../theme';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';

import { useDefaultStyles } from '../styles';

function capitalizeFirstLetter([first, ...rest], locale = navigator.language) {
  return first.toLocaleUpperCase(locale) + rest.join('');
}

const SettingsPage = props => {
  const classes = useDefaultStyles();
  const setThemeName = useContext(ThemeContext);

  let theme = localStorage.getItem('appTheme') || 'default';

  function handleChange(event) {
    setThemeName(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Theme</FormLabel>
        <RadioGroup aria-label="theme" name="theme1" value={theme} onChange={handleChange}>
          <FormControlLabel value="default" control={<Radio />} label="Default" />
          <FormControlLabel value="monochrome" control={<Radio />} label="Monochrome" />
        </RadioGroup>
      </FormControl>
    </div>
  )
};

export default SettingsPage;
