import { makeStyles } from '@mui/styles';

const getStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '0 0 16px 0',
    // overflowX: 'hidden',
    [theme.breakpoints.up('tablet')]: {
      padding: '0 0 16px 0',
    },
    [theme.breakpoints.up('laptop')]: {
      padding: '0 0 16px 0',
    },
  },
  textContainer: {
    margin: '0 24px',
    [theme.breakpoints.up('tablet')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.up('laptop')]: {
      margin: '0px 96px'
    }
  },
  twitch: {
    margin: '0',
    [theme.breakpoints.up('desktop')]: {
      marginLeft: 'calc(calc(100vw - 1620px) / 2)'
    }
  }
}));

export default getStyles;
