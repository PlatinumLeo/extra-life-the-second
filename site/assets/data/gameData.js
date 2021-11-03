import srb2kImg from '../images/Games/srb2k.png';

export default [{
  id: 'srb2k',
  name: 'Sonic Robo Blast 2 Kart',
  image: srb2kImg,
  platforms: ['PC', 'Mac', 'Linux'],
  obtain: {
    type: 'download',
    link: 'https://github.com/STJr/Kart-Public/releases'
  },
  join: [
    'Go to Multiplayer from the main menu',
    'Go to the *Specify IPV4 Address:* section',
    'Enter *howi.servegame.com*'
  ],
  extra: [
    'By default, the arrow keys and Enter navigate the menu, and you will need to press enter on the title screen once to open the menu.</Typography></li>',
    'Be sure to connect any controllers you want to use before you start, I think you can change configs afterwards, but that might take some doing.</Typography></li>',
    'I would check out the Tips & Secrets section under options and maybe drive around in Time Trails on my first boot just to get a feel for it.</Typography></li>',
  ]
}, {
  id: 'ssbu',
  name: 'Super Smash Bros. Ultimate',
  image: null,
  platforms: ['Switch'],
  obtain: {
    type: 'purchase',
    link: 'https://www.nintendo.com/games/detail/super-smash-bros-ultimate-switch/',
    join: [
      'Go to Online',
      'Enter the Room Code',
      'Enter the password'
    ],
    extra: [

    ]
  }
}, {
  id: 'jbg',
  name: 'Jackbox Games',
  image: null,
  platforms: ['PC'],
  obtain: {
    type: 'connect',
    link: 'https://jackbox.tv/#/'
  },
  join: [
    'Navigate to the link above',
    'Enter your name',
    'Enter the Room Code as shown on stream'
  ],
  extra: [
    'You can join in even if all of the game slots are filled as part of the audience',
    'The Jackbox Party Packs are great ways to have games for parties at home',
    'This game is best played with a cell phone'
  ]
}, {
  id: 'nm',
  name: 'Nippon Marathon',
  image: null,
  platforms: ['PS4', 'PS5'],
  obtain: {
    type: 'purchase',
    link: 'https://store.playstation.com/en-us/product/UP4293-CUSA11329_00-0000000000000000'
  },
  join: [
    '???'
  ],
  extra: [

  ]
}, {
  id: 'oc2',
  name: 'Overcooked 2',
  image: null,
  platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Switch', 'Xbox Series X and Series S', 'Linux'],
  obtain: {
    type: 'purchase',
    link: 'https://store.steampowered.com/app/728880/Overcooked_2/'
  },
  join: [
    'Let us know your Steam Handle',
    'We will invite you via Steam'
  ],
  extra: [
    
  ]
}];
