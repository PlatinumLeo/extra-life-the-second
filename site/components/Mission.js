import React from 'react';
import {
  Button,
  Typography
} from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';

const getMissionStyles = makeStyles((theme) => ({
  root: { padding: '48px 0 24px 0' },
  rule: { border: `1px solid ${theme.palette.primary.main}`, width: '60px' },
  text: {
    lineHeight: '170%',
    padding: '32px 24px',
    maxWidth: '700px',
    [theme.breakpoints.up('laptop')]: {
      paddingLeft: 'calc(calc(100vw - 700px) / 2)'
    }
  },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' }
}));

const Mission = (props) => {
  const theme = useTheme();
  const classes = getMissionStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" color='primary' style={{ textTransform: 'uppercase' }}>Our Mission</Typography>
      <hr className={classes.rule} />
      <Typography align="center" color='primary' className={classes.text}>Extra Life is a game-a-thon, where people get together to play games for charity. Extra Life partners with local hospitals across the United States and Canada. Donations are used for the most immediate needs facing local kids; everything from patient programs, new equipment, and charitable care.</Typography>
      <Button variant='outlined' color='secondary' className={classes.button}>Meet the Team</Button>
    </div>
  );
};

export default Mission;
