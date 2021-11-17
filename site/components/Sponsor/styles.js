import { makeStyles } from '@mui/styles';

const getStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    borderBottom: `1px solid ${theme.palette.common.black}`,
    [theme.breakpoints.down('mobile')]: {
      padding: '48px 0 48px 0',
    },
    [theme.breakpoints.up('tablet')]: {
      padding: '16px 0'
    }
  },
  wrapper: {
    [theme.breakpoints.down('mobile')]: {
      padding: '0 24px 12px 24px'
    }
  },
  choa: {
    // backgroundColor: 'blue',
    left: 'calc(50% - 99px)',
    top: 'calc(50% - 25px)',
    position: 'relative'
  },
  cmnh: {
    // backgroundColor: 'green',
    left: 'calc(50% - 70px)',
    top: 'calc(50% - 31px)',
    position: 'relative'
  },
  twitch: {
    // backgroundColor: 'yellow',
    left: 'calc(50% - 51px)',
    top: 'calc(50% - 17px)',
    position: 'relative'
  }
}));

export default getStyles;
