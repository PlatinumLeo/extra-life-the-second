// To do full border with clip: https://stackoverflow.com/questions/31854185/how-to-add-border-in-my-clip-path-polygon-css-style

import React from 'react';
import {
  AppBar,
  Button,
  Divider,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { borders } from '@material-ui/system';

import ControllerImage from '../assets/images/Icons/controller_white.png';
import ExtraLifeLogo from '../assets/images/Logos/Generic/Extra Life_white.png';
import { useDefaultStyles } from '../styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     paddingLeft: 10,
//   },
//   image: {
//     height: 45,
//   },
//   buttonText: {
//     paddingTop: 2, 
//     paddingRight: 10,
//   },
//   buttonImage: {
//     width: 25, 
//     height: 25
//   },
//   centerBar: {
//     [theme.breakpoints.down('md')]: {
//       flexGrow: 1
//     },
//     [theme.breakpoints.up('lg')]: {
//       alignSelf: 'center',
//       width: 1188
//     }
//   },
//   left: {
//     float: 'left'
//   },
//   right: {
//     float: 'right'
//   },
//   center: {
//     flexGrow: 1
//   },
//   centerButton: {
//     color: theme.palette.primary
//   },
//   testButton: { 
//     'clip-path': `polygon(
//       0 0,
//       0 0,
//       90% 0,
//       100% 20%,
//       100% 100%,
//       90% 100%,
//       10% 100%,
//       0% 80%)`
//   }
// }));

const defaultProps = {
  // color: 'secondary', 
  variant: 'contained', 
  // variant: 'outlined'
};

const Header = props => {
  const theme = useTheme();
  const classes = useDefaultStyles();

  // const isMobile = theme.breakpoints.values.sm >= props.dimensions.width

  // const imageSrc = isMobile ? ControllerImage : ExtraLifeLogo;

  return (
    <div className={classes.main}>
      <Typography>Header</Typography>
      <Button {...defaultProps}>Donate</Button>
    </div>
  );
};

export default Header;
