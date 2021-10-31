// Original Card Flip: https://codepen.io/edeesims/pen/iGDzk

import React, { useState } from 'react';
import {
  ImageListItem,
  ImageListItemBar
} from '@material-ui/core';

import { getTeamTileStyles } from './styles';

const TeamTile = ({ data, className }) => {
  const classes = getTeamTileStyles();

  let {
    name, discordTag, game, description, image, gameImage
  } = data;

  return (
    <ImageListItem className={classes.tile}>
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
    </ImageListItem>
  );
};

export default TeamTile;
