import React, { useContext } from 'react';
import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Hidden,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';

import teamData from '../assets/data/teamData';
import { buildArrayReducer } from '../utils';
import { SizeContext } from '../AdaptivityProvider';


const tileSX = {
  width: {
    xs: 'calc(calc(100vw - 64px) / 2)',
    sm: 'calc(calc(100vw - 168px) / 4)',
    lg: '320px'
  }
};

const Team = (props) => {
  return (
    <Box sx={{ padding: '48px 0 24px 0' }}>
      <Typography variant='h3' align='center' color='primary' sx={{ textTransform: 'uppercase' }}>Meet the Team</Typography>
      <Divider />
      <Typography align='center' color='primary'>
        Our Extra Life team is comprised of Slalom employees who all feel passionate about gaming and helping out those who need it most; children and their families who are in need of medical assistance.
      </Typography>
      <ImageList>
        {teamData.map((member, i) => (
          <ImageListItem key={member.image}>
            <img src={member.image} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Team;
