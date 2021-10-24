import React, { useState } from 'react';
import {
  Box,
  GridListTile,
  GridListTileBar,
  Modal,
  Typography
} from '@material-ui/core';

import './teamTile.css';

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
    <GridListTile style={{ height: '328px', width: '328px', margin: '16px' }} onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}>
          <Box style={modalStyle}>
            <Typography>{description}</Typography>
          </Box>
      </Modal>
    </GridListTile>
  );
};

export default TeamTile;
