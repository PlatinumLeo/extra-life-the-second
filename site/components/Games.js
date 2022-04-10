import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';

import gameData from '../assets/data/gameData';

const GameListItem = ({ id, name, image, platforms, obtain, join, extra }) => {
  return (
    <ListItem button component={RouterLink} to={`/games/${id}`}>
      <ListItemAvatar>
        <Avatar variant='square' alt={name} src={image} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={platforms.join(', ')} />
    </ListItem>
  );
};

const ROOT_SX = {
  '& p': {
    color: (theme) => theme.palette.primary.main
  }
};

const Games = (props) => {
  return (
    <Box sx={ROOT_SX}>
      <List>
        {gameData.map(game => (
          <GameListItem {...game} key={`game-list-item-${game.id}`}/>
        ))}
      </List>
    </Box>
  );
};

export default Games;
