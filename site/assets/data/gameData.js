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
}];
