import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '80px 0 100px 0',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '144px 0 240px 0'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '96px 0 144px 0'
    },
  },
  textContainer: {
    margin: '0 24px',
    [theme.breakpoints.up('sm')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0px 96px'
    }
  }
}));

export default getStyles;
