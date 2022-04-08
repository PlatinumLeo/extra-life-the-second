import React from 'react';
import {
  Box,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';

import FlipCard from '../FlipCard';
import { createNotchedClipPath } from '../../utils';

const IMAGE_SX = (isFront) => ({
  filter: isFront ? 'grayscale(100%)' : '',
  height: '100%',
  width: '100%',
  objectFit: 'cover'
});

const OVERLAY_SX = {
  opacity: 0.5,
  backgroundColor: (theme) => `${theme.palette.secondary.main}`,
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0
};

const SIDE_SX = (isFront) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  clipPath: createNotchedClipPath(12, !isFront)
});

const Side = ({image, title, subtitle, isFront, ...props}) => {
  return (
    <Box sx={SIDE_SX(isFront)}>
      <Box component='img' src={image} sx={IMAGE_SX(isFront)} />
      <Box sx={(isFront) ? OVERLAY_SX : {}} />
      <ImageListItemBar title={title} subtitle={subtitle} />
    </Box>
  );
};

const TeamImageListItem = ({ member, sx, ...props }) => {
  let {
    name, discordTag, game, description, image, gameImage
  } = member;

  let front = (<Side image={image} title={name} subtitle={discordTag} isFront={true} />);
  let back = (<Side image={gameImage} title={game} subtitle={name} isFront={false} />);

  return (
    <ImageListItem sx={sx}>
      <FlipCard front={front} back={back} sx={sx} />
    </ImageListItem>
  );
};

export default TeamImageListItem;
