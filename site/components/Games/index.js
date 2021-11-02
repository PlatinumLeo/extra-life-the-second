import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

import getStyles from './styles';

import gameData from '../../assets/data/gameData';

const GameListItem = ({ id, name, image, platforms, obtain, join, extra }) => {
  const classes = getStyles();

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

const Games = (props) => {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <List>
        {gameData.map(game => (
          <GameListItem {...game} key={`game-list-item-${game.id}`}/>
        ))}
      </List>
    </div>
  );
};

export default Games;
