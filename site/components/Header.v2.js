// To do full border with clip: https://stackoverflow.com/questions/31854185/how-to-add-border-in-my-clip-path-polygon-css-style

import React from 'react';
import {
  AppBar,
  Button,
  ButtonBase,
  Divider,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { borders } from '@material-ui/system';

import NotchedButton from './NotchedButton';

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

const clipRadius = 5;

const divStyle = {
  backgroundColor: 'black', display: 'inline-flex',
  clipPath: `polygon(
    0 0,
    0 0,
    calc(100% - ${clipRadius}px) 0,
    100% ${clipRadius}px,
    100% 100%,
    calc(100% - ${clipRadius}px) 100%,
    ${clipRadius}px 100%,
    0% calc(100% - ${clipRadius}px))`
  // 'clip-path': 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)'
};

const a = 12, b = 4;

const BASIC_PATH = `polygon(
  0 0,
  0 calc(100% - ${a}px),
  ${a}px 100%,
  100% 100%,
  100% ${a}px,
  calc(100% - ${a}px) 0
)`;

const POLYGON_PATH = `polygon(
  0 0,
  0 calc(100% - ${a}px),
  ${a}px 100%,
  ${a}px calc(100% - ${b}px),
  ${b}px calc(100% - ${a}px),
  ${b}px ${b}px,
  calc(100% - ${a}px) ${b}px,
  calc(100% - ${b}px) ${a}px,
  calc(100% - ${b}px) calc(100% - ${b}px),
  ${a}px calc(100% - ${b}px),
  ${a}px 100%,
  100% 100%,
  100% ${a}px,
  calc(100% - ${a}px) 0
)`;

const simplyStylish = makeStyles({
  cssButton: props => ({
    background: 'rgba(0,0,0,0)',
    minWidth: '64px',
    position: 'relative',
    textTransform: 'uppercase',
    clipPath: BASIC_PATH,
    WebkitClipPath: BASIC_PATH,
    padding: '6px 16px',
    '&::after': {
      content: '"Bad Order"',
      position: 'absolute',
      background: props.theme.palette.text.primary, 
      clipPath: POLYGON_PATH,
      WebkitClipPath: POLYGON_PATH,
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  })
});

const defaultProps = {
  // color: 'secondary', 
  variant: 'contained', 
  // variant: 'outlined'
};

const MonochromeBorderButton = props => {
  const { 
    notchRadius,
    borderWidth,
    ...otherProps
  } = props;

  return (
    <ButtonBase {...otherProps}>
      <span style={{ backgroundColor: 'red' }}></span>
      <span>Button</span>
    </ButtonBase>
  );
};

MonochromeBorderButton.defaultProps = {
  notchRadius: 5,
  borderWidth: 5
};

const Header = props => {
  const theme = useTheme();
  const classes = useDefaultStyles();
  const secondSet = simplyStylish({ theme });

  // const isMobile = theme.breakpoints.values.sm >= props.dimensions.width

  // const imageSrc = isMobile ? ControllerImage : ExtraLifeLogo;

  return (
    <div>
      <Typography>Header</Typography>
      <Button {...defaultProps}>Contained Button</Button>
      {/* <div style={divStyle}>
        <Button className={classes.button} {...defaultProps}>Outlined Button</Button>
      </div> */}
      <NotchedButton />
      <Button className={secondSet.cssButton}>Simply CSS</Button>
    </div>
  );
};

export default Header;
