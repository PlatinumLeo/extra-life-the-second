import React, { useContext } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Link,
  Typography
} from '@mui/material';

import ArrowBack from '@mui/icons-material/ArrowBack';
import defaultImage from '../../assets/images/Icons/controller_blue.png';

import NotchedImage from './NotchedImage';
import { createNotchedClipPath } from '../utils';
import { BreakpointContext } from '../providers/AdaptivityProvider';

import gameData from '../assets/data/gameData';

const ROOT_SX = {
  margin: '16px 0 16px 0',
  position: 'relative',
};

const TEXT_CONTAINER_SX = {
  padding: '32px 24px'
};

const NAV_CONTAINER_SX = {
  margin: '0 24px 16px 24px'
};

const IMAGE_CONTAINER_SX = {
  height: {
    mobile: 'calc(min(100vw, 100vh) - 48px)',
    tablet: 'calc(33vw - 48px)'
  },
  width: {
    tablet: 'calc(33vw - 48px)'
  },
  marginLeft: '24px',
  marginRight: '24px',
  clipPath: createNotchedClipPath(12)
};

const IMAGE_RULE_SX = {
  backgroundColor: (theme) => theme.palette.primary.main,
  height: '2px',
  position: 'absolute',
  top: 'calc(min(100vw, 100vh) - 96px)',
  left: 0,
  width: '100%',
  display: {
    mobile: 'block',
    tablet: 'none'
  }
};


const GameDetails = ({...props}) => {
  const { id } = useParams();
  let { name, image, platforms, obtain, join, extra } = gameData.find(g => g.id === id);
  const breakpoint = useContext(BreakpointContext);

  const textAlign = (breakpoint === 'mobile') ? 'center' : 'left';

  const Obtain = ({ type, link }) => {
    switch (type) {
      case 'connect': return <Typography align={textAlign}>No need to purchase, just connect <Link href={obtain.link} target='_blank'>here</Link>.</Typography>
      default: return <Typography align={textAlign}>{(obtain.type === 'download') ? 'Download' : 'Purchase'} it from <Link href={obtain.link} target='_blank'>here</Link>.</Typography>;
    }
  };

  return (
    <Box sx={ROOT_SX}>
      <Grid container>
        <Grid item mobile={12} sx={NAV_CONTAINER_SX}>
          <Button startIcon={<ArrowBack />} component={RouterLink} to='/games'>
            Back to Game List
          </Button>
        </Grid>
        <Grid item mobile={12} tablet={4}>
          <Box>
            <Box sx={IMAGE_RULE_SX} />
            <Box sx={IMAGE_CONTAINER_SX}>
              <NotchedImage src={(image) ? image : defaultImage} />
            </Box>
          </Box>
        </Grid>
        <Grid item mobile={12} tablet={8}>
          <Box sx={TEXT_CONTAINER_SX}>
            <Typography align={textAlign} variant='h3'>{name}</Typography>
            <Typography display='inline' variant='h6'>Platforms: </Typography>
            <Typography align={textAlign} display='inline'>{platforms.join(', ')}</Typography>
            <Typography align={textAlign} variant='h4'>How to Get It:</Typography>
            <Obtain {...obtain} />
            <Typography align={textAlign} variant='h4'>How to Join Us:</Typography>
            <ul>
              {join.map((item, i) => (
                <li key={`join-item-${i}`}><Typography>{item}</Typography></li>
                ))}
            </ul>
            <Typography align={textAlign} variant='h4'>Extra Notes:</Typography>
            <ul>
              {extra.map((item, i) => (
                <li key={`extra-item-${i}`}><Typography>{item}</Typography></li>
                ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameDetails;
