import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  ImageList,
  Hidden,
  Typography
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import teamData from '../../assets/data/teamData';
import { buildArrayReducer } from '../../utils';
import { SizeContext } from '../../providers/AdaptivityProvider';
import TeamImageListItem from './TeamImageListItem';

import {
  CONTENT_CENTERED_BUTTON_SX,
  CONTENT_CENTERED_RULE_SX,
  CONTENT_CENTERED_COPY_SX,
  CONTENT_CENTERED_TITLE_SX
} from '../../utils/system';

const CAROUSEL_SX = {
  // height: 'calc(calc(100vw - 64px) / 2)',
  // backgroundColor: 'green',
  height: '200px',
  margin: '0 24px',
  display: {
    mobile: 'none'
    // mobile: 'block',
    // tablet: 'none'
  }
};

const CAROUSEL_IMAGE_LIST_SX = {
  // backgroundColor: 'red',
  // width: 'calc(100vw - 68px)',
  overflow: 'hidden'
};

const TEMP_BUTTON_SX = Object.assign({}, CONTENT_CENTERED_BUTTON_SX, { display: { tablet: 'none' } });

const IMAGE_LIST_SX = {
  width: {
    tablet: 'calc(100vw - 156px)',
    desktop: '1400px' // 4 * 320px + 3 * 40px, 4 * img + 3 * spacing
  },
  marginLeft: {
    tablet: '78px',
    desktop: 'calc(calc(100vw - 1400px) / 2)'
  },
  overflow: {
    tablet: 'hidden'
  },
  display: {
    mobile: 'none',
    tablet: 'grid'
  }
};

const ITEM_SX = {
  height: {
    mobile: 'calc(calc(100vw - 64px) / 2)',
    tablet: 'calc(calc(100vw - 168px) / 4)', // 7m + 4x, m = 24
    laptop: 'calc(calc(100vw - 216px) / 4)', // 9m + 4x, m = 24
    desktop: '320px'
  },
  width: {
    mobile: 'calc(calc(100vw - 64px) / 2)',
    tablet: 'calc(calc(100vw - 168px) / 4)', // 7m + 4x, m = 24
    laptop: 'calc(calc(100vw - 216px) / 4)', // 9m + 4x, m = 24
    desktop: '320px'
  }
};

const tempScroll = () => { window.scrollTo(0, 0); }

const Team = ({...props}) => {
  return (
    <Box sx={{ padding: '48px 0 24px 0' }}>
      <Typography variant='h3' align='center' color='primary' sx={CONTENT_CENTERED_TITLE_SX}>Meet the Team</Typography>
      <Box component='hr' sx={CONTENT_CENTERED_RULE_SX} />
      <Typography align='center' color='primary' sx={CONTENT_CENTERED_COPY_SX}>
        Our Extra Life team is comprised of Slalom employees who all feel passionate about gaming and helping out those who need it most; children and their families who are in need of medical assistance.
      </Typography>
      <Button component={RouterLink} to='/aboutus' onClick={tempScroll} variant='outlined' color='secondary' sx={TEMP_BUTTON_SX}>Meet the Team</Button>
      <Carousel animation='slide' autoPlay={false} sx={CAROUSEL_SX}>
        {teamData.reduce(buildArrayReducer(2), []).map((pair, i) => (
          <ImageList key={`team-carousel-item-${i}`} sx={CAROUSEL_IMAGE_LIST_SX}>
            {pair.map((member, j) => (
              <TeamImageListItem member={member} sx={ITEM_SX} key={`team-member-${j}`} />
            ))}
          </ImageList>
        ))}
      </Carousel>
      <ImageList cols={4} sx={IMAGE_LIST_SX}>
        {teamData.map((member, i) => (
          <TeamImageListItem member={member} sx={ITEM_SX} key={`team-member-${i}`} />
        ))}
      </ImageList>
    </Box>
  );
};

export default Team;
