import React from 'react';
import {
  GridListTile,
  GridListTileBar
} from '@material-ui/core';

import './teamTile.css';

const TeamTile = ({ data }) => {

  let {
    name, discordTag, game, description, image, gameImage
  } = data;

  return (
    <GridListTile style={{ height: '328px', width: '328px', margin: '16px' }}>
      <div className="card">
        <div className="content">
          <div className="front">
            <img src={image} />
            <GridListTileBar title={name} subtitle={discordTag} />
          </div>
          <div className="back">
            <img src={gameImage} />
            <GridListTileBar title={game} subtitle={name} />
          </div>
        </div>
      </div>
    </GridListTile>
  );
};

export default TeamTile;
