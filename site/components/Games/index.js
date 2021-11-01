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
  },
  {
    name: 'Among Us',
    description: 'Game of Deception and Murder',
    links: ['http://www.innersloth.com/gameAmongUs.php'],
    ageRating: 'E',
    equipment: 'Computer, Mobile Device'
  },
  {
    name: 'Fall Guys',
    description: 'MMXC/Wipeout multiplayer game',
    links: ['https://fallguys.com/'],
    ageRating: 'E',
    equipment: 'PS4, Computer (Controller Recommended)'
  },
  {
    name: 'Rocket League',
    description: 'Car based Soccer',
    links: ['https://www.rocketleague.com/'],
    ageRating: 'E',
    equipment: 'PS4, XBox One, Switch, Computer (Controller Recommended)'
  },
  {
    name: 'JackBox Games',
    description: 'Fun Party Games',
    links: ['https://www.jackboxgames.com/'],
    ageRating: 'E',
    equipment: 'Computer, Mobile Device'
  },
  {
    name: 'Mario Kart 8 Deluxe (Swtich)',
    description: 'Mario Kart',
    links: ['https://mb.srb2.org/showthread.php?t=43708&page=3'],
    ageRating: 'E',
    equipment: 'Switch'
  },
  {
    name: 'Puyo Puyo Tetris',
    description: 'Play either Puyo Puyo, Tetris, or Both at once!',
    links: ['https://puyo.sega.com/tetris/'],
    ageRating: 'E',
    equipment: 'PS4, Switch, Computer'
  },
  {
    name: 'Skribblio',
    description: 'Pictonary on the Web',
    links: ['https://skribbl.io/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
  {
    name: 'Valorant',
    description: '5v5 Tactical Shooter',
    links: ['https://playvalorant.com/en-us/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
  {
    name: 'Spellbreak',
    description: 'Free to play Mario Kart clone on PC',
    links: ['https://playspellbreak.com/en'],
    ageRating: 'E',
    equipment: 'PS4, XBox One, Switch, Computer (Epic)'
  },
  {
    name: 'One-Night Werewolf',
    description: 'One Night Werewolf',
    links: ['https://netgames.io/games/onu-werewolf/', 'https://werewolv.es/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
  {
    name: 'Mafia',
    description: 'Mafia',
    links: ['https://mafia.gg', 'https://epicmafia.com/lobby/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
  {
    name: 'Secret Hitler',
    description: 'Politics and Intrigue Game',
    links: ['https://private.secrethitler.io/', 'https://netgames.io/games/secret-hitler/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
  {
    name: 'Uno',
    description: 'Uno',
    links: ['http://play-uno.com/newgame.php', 'https://play.unofreak.com/'],
    ageRating: 'E',
    equipment: 'Computer'
  },
];

const Games = (props) => {

  return (
    <div>
      <Typography>Games List</Typography>
      <Typography>Sonic Robo Blast 2 Kart (SRB2K)</Typography>
      <Typography>Platforms: PC, Mac, Linux</Typography>
      <Typography>Download: https://github.com/STJr/Kart-Public/releases</Typography>
      <Typography>
        Install:
        - https://github.com/STJr/Kart-Public/releases
        Configuration:
        - Before you launch, be sure to plug in a Controller
        - You use the arrow keys and ENTER to navigate the Menu
        - Options > Controller Setup... > Player 1 Controls
          - Gamepad Options
            - 
        How to Play:
        How to Play with Us:
        1. Download and install SRB2K on your computer.
        2. Open SRB2K
        3. Go to the Multiplayer Menu
        4. Go down to specify IP and enter `howi.servegame.com`
        5. Join the Fun!
      </Typography>
    </div>
  );
};

export default Games;
