import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '0 0 16px 0',
    // overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '0 0 16px 0',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 0 16px 0',
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
