// Seems promising, and adds cool things: https://www.smashingmagazine.com/2015/05/creating-responsive-shapes-with-clip-path/

import React from 'react';
import {
  ButtonBase,
  Typography,
  useTheme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const a = 8, b = 3;

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

// const POLYGON_PATH = `polygon(
//   0 0,
//   0 0,
//   calc(100% - 10px) 0,
//   100% 10px,
//   100% 100%,
//   calc(100% - 10px) 100%,
//   10px 100%,
//   0% calc(100% - 10px)
// )`;

const useStyles = makeStyles({
  base: props => ({
    background: 'rgba(0,0,0,0)',
    // backgroundColor: 'green',
    fontFamily: props.theme.typography.fontFamily,
    fontSize: props.theme.typography.fontSize,
    fontWeight: props.theme.typography.fontWeightRegular,
    lineHeight: props.theme.typography.lineHeight,
    minWidth: '64px',
    position: 'relative',
    textTransform: 'uppercase',
    clipPath: BASIC_PATH,
    WebkitClipPath: BASIC_PATH,
    '&::after': {
      content: '"Bad Order"',
      position: 'absolute',
      // background: 'rgba(0,0,0,0)',
      background: props.theme.palette.text.primary, 
      clipPath: POLYGON_PATH,
      WebkitClipPath: POLYGON_PATH,
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  }),
  notchBorder: {
    backgroundColor: 'red',
    // display: 'block',
    // position: 'absolute',
    padding: '6px 16px',
    zIndex: 1,
    top: '0',
    left: '0',
    height: '100%',
    width: '100%'
    // clipPath: `polygon(
    //   0 0,
    //   0 0,
    //   calc(100% - ${notchRadius}px) 0,
    //   100% ${notchRadius}px,
    //   100% 100%,
    //   calc(100% - ${notchRadius}px) 100%,
    //   ${notchRadius}px 100%,
    //   0% calc(100% - ${notchRadius}px))`
  },
  textField: {
    // position: 'absolute',
    zIndex: 2,
    top: '0',
    left: '0',
    padding: '6px 16px'
  }
});

const NotchedButton = props => {
  const { 
    notchRadius,
    borderWidth,
    ...otherProps
  } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <ButtonBase className={classes.base}>
      <Typography className={classes.textField}>Custom Button</Typography>
    </ButtonBase>
  );
};

NotchedButton.defaultProps = {
  notchRadius: 5,
  borderWidth: 5
};

export default NotchedButton;
