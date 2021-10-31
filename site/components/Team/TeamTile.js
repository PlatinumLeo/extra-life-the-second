// Original Card Flip: https://codepen.io/edeesims/pen/iGDzk

import React, { useState } from 'react';
import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Modal,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { createNotchedClipPath } from '../../utils';

import './teamTile.css';

const getTeamTileStyles = makeStyles((theme) => ({
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '150px',
    height: '150px',
    margin: '-75px',
    float: 'left',
    perspective: '500px',
    '&:hover': {
      '&>div': {
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s'
      }
    },
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d'
  },
  front: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    objectFit: 'cover',
    clipPath: createNotchedClipPath(12)
  },
  back: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    objectFit: 'cover',
    transform: 'rotateY(180deg)',
    clipPath: createNotchedClipPath(12, true)
  }
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: '#fafafa',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const TeamTile = ({ data }) => {
  const theme = useTheme();
  const classes = getTeamTileStyles(theme);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let {
    name, discordTag, game, description, image, gameImage
  } = data;

  return (
    <ImageListItem style={{ height: '150px', width: '150px' }} onClick={handleOpen}>
      <div className={classes.card}>
        <div className={classes.content}>
          <div className={classes.front}>
            <img src={image} />
            <ImageListItemBar title={name} subtitle={discordTag} />
          </div>
          <div className={classes.back}>
            <img src={gameImage} />
            <ImageListItemBar title={game} subtitle={name} />
          </div>
        </div>
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}>
          <Box style={modalStyle}>
            <Typography>{description}</Typography>
          </Box>
      </Modal> */}
    </ImageListItem>
  );
};

export default TeamTile;
