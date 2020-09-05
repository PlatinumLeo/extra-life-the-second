import React from 'react';

import {
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const gameList = [
  {
    name: 'Cards Against Humanity',
    description: 'A fun game where you try to make your friends laugh',
    links: ['http://playingcards.io/game/cards-against-humanity', 'https://pretendyoure.xyz/zy/'],
    ageRating: 'M',
    equipment: 'Internet Browser'
  },
  {
    name: 'Sonic Robo Blast 2 Kart (SRB2K)',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  }
];

const GamesPage = props => {
  return (
    <React.Fragment>
      <Typography variant="h2">Games List</Typography>
      <List>
        {gameList.map((game, i) => (
        <ListItem key={`game-list-${i}`}>
          <ListItemText 
            primary={game.name}
            secondary={
              <>
                <Typography>Rating: {game.ageRating}</Typography>
                <Typography>Equipment: {game.equipment}</Typography>
                <Typography>{game.description}</Typography>
                <List>
                  {game.links.map((link, j) => (
                  <ListItem key={`game-list-${i}-link-${j}`}>
                    <Link href={link}>{link}</Link>
                  </ListItem>
                  ))}
                </List>
              </>
            }
          />
        </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default GamesPage;
