import React from 'react';
import {
  ButtonBase,
  Typography,
  useTheme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const POLYGON_PATH = `polygon(
  0 0,
  0 0,
  calc(100% - 5px) 0,
  100% 5px,
  100% 100%,
  calc(100% - 5px) 100%,
  5px 100%,
  0% calc(100% - 5px)
)`;

const useStyles = makeStyles({
  base: props => ({
    backgroundColor: 'green',
    fontFamily: props.theme.typography.fontFamily,
    fontSize: props.theme.typography.fontSize,
    fontWeight: props.theme.typography.fontWeightRegular,
    lineHeight: props.theme.typography.lineHeight,
    minWidth: '64px',
    position: 'relative',
    textTransform: 'uppercase',
    clipPath: POLYGON_PATH,
    WebkitClipPath: POLYGON_PATH,
    '&::after': {
      content: '""',
      position: 'absolute',
      background: 'rgba(0,0,0,0)',
      // background: '#f00', 
      clipPath: POLYGON_PATH,
      WebkitClipPath: POLYGON_PATH,
      top: '5px',
      left: '5px',
      right: '5px',
      bottom: '5px'
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
