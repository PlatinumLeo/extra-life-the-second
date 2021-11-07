import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'calc(calc(100vw - 1024px) / 2)'
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: 'calc(calc(100vw - 1620px) / 2)'
    }
  }
}));

export default getStyles;
