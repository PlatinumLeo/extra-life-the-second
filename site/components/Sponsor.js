import React from 'react';
import {
  Box,
  Container,
  Grid,
  SvgIcon
} from '@mui/material';

import Logo_CHOA from '../assets/images/Logos/Logo_CHOA.svg'
import Logo_CMNH from '../assets/images/Logos/Logo_CMNH.svg'
import Logo_Twitch from '../assets/images/Logos/Logo_Twitch.svg'

const ROOT_SX = {
  // backgroundColor: 'red',
  borderBottom: (theme) => `1px solid ${theme.palette.common.black}`,
  padding: {
    mobile: '42px 0',
    tablet: '16px 0'
  },

};

const WRAPPER_SX = {
  // '&:nth-of-type(even)': {
  //   backgroundColor: 'green'
  // },
  // '&:nth-of-type(odd)': {
  //   backgroundColor: 'yellow'
  // },
  padding: {
    mobile: '6px 24px',
    tablet: '0'
  }
};

const CHOA_SX = {
  left: 'calc(50% - 99px)',
  top: 'calc(50% - 25px)',
  position: 'relative',
  width: '198px',
  height: '50px'
};

const CMNH_SX = {
  left: 'calc(50% - 70px)',
  top: 'calc(50% - 31px)',
  position: 'relative',
  width: '140px',
  height: '62px'
};

const TWITCH_SX = {
  left: 'calc(50% - 51px)',
  top: 'calc(50% - 17px)',
  position: 'relative',
  width: '102px',
  height: '34px'
};

const Sponsor = ({...props}) => {
  return (
    <Box sx={ROOT_SX}>
      <Container>
        <Grid container>
          <Grid item mobile={12} tablet={4} sx={WRAPPER_SX}><SvgIcon component={Logo_CHOA} sx={CHOA_SX} inheritViewBox /></Grid>
          <Grid item mobile={12} tablet={4} sx={WRAPPER_SX}><SvgIcon component={Logo_CMNH} sx={CMNH_SX} inheritViewBox /></Grid>
          <Grid item mobile={12} tablet={4} sx={WRAPPER_SX}><SvgIcon component={Logo_Twitch} sx={TWITCH_SX} inheritViewBox /></Grid>
        </Grid>
      </Container>
    </Box>
  )
};

export default Sponsor;
