import React from 'react';

import {
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
  },
  {
    name: 'Among Us',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Fall Guys',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Rocket League',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'JackBox Games',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Mario Kart 8 Deluxe (Swtich)',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Puyo Puyo Tetris',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Skribblio',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://skribbl.io/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Valorant',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://playvalorant.com/en-us/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Spellbreak',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://playspellbreak.com/en'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'One-Night Werewolf',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://netgames.io/games/onu-werewolf/', 'https://werewolv.es/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Mafia',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://mafia.gg', 'https://epicmafia.com/lobby/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Secret Hitler',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://private.secrethitler.io/', 'https://netgames.io/games/secret-hitler/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
  {
    name: 'Uno',
    description: 'Free to play Mario Kart clone on PC',
    links: ['http://play-uno.com/newgame.php', 'https://play.unofreak.com/'],
    ageRating: 'E',
    equipment: 'Computer (Controller Recommended)'
  },
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
