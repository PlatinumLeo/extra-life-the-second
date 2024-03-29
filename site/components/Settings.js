import React, { useContext } from 'react';
import {
  Container,
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

import { AutoRefreshContext } from '../providers/DonorDriveApiProvider';
import { ThemeContext } from '../providers/ThemeProvider';
import { themeNames } from '../theme';

function capitalizeFirstLetter([first, ...rest], locale = navigator.language) {
  return first.toLocaleUpperCase(locale) + rest.join('');
}

const Settings = ({...props}) => {
  const { themeName, updateThemeName, themeType, toggleThemeType } = useContext(ThemeContext);
  const { enabled, interval, toggleAutoRefresh } = useContext(AutoRefreshContext);

  function handleChange(event) {
    updateThemeName(event.target.value);
  }

  return (
    <Container fixed>
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
    </Container>
  )
};

export default Settings;
