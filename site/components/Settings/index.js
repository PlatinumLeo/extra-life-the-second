import React, { useContext } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
  Switch
} from '@mui/material';

import { AutoRefreshContext } from '../../DonorDriveApiProvider';
import { ThemeContext } from '../../ThemeProvider';
import { themeNames } from '../../theme';
import getStyles from './styles';

function capitalizeFirstLetter([first, ...rest], locale = navigator.language) {
  return first.toLocaleUpperCase(locale) + rest.join('');
}

const Settings = props => {
  const classes = getStyles();
  const { themeName, updateThemeName, themeType, toggleThemeType } = useContext(ThemeContext);
  const { enabled, interval, toggleAutoRefresh } = useContext(AutoRefreshContext);

  let theme = localStorage.getItem('appTheme') || 'default';

  function handleChange(event) {
    updateThemeName(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Theme</FormLabel>
        <RadioGroup aria-label='theme' name='theme1' value={themeName} onChange={handleChange}>
          {themeNames.map((name) => (
            <FormControlLabel key={`theme-radio-${name}`} value={name} control={<Radio />} label={capitalizeFirstLetter(name)}/>
          ))}
        </RadioGroup>
        {/* <FormControlLabel control={<Switch checked={themeType === 'dark'} onChange={toggleThemeType}/>} label="Dark Mode" /> */}
      </FormControl>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Auto Refresh</FormLabel>
        <FormControlLabel control={<Switch checked={enabled} onChange={toggleAutoRefresh} />} label='Auto Refresh Data' />
        <FormControl disabled={!enabled}>
          <Input
            value={interval}
            endAdornment={<InputAdornment position='end'>ms</InputAdornment>}
          />
          <FormHelperText>Interval Milliseconds</FormHelperText>
        </FormControl>
      </FormControl>
    </div>
  )
};

export default Settings;
