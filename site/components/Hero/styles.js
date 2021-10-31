import { makeStyles } from '@material-ui/core';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';

const getStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(76deg, #9EEEE188, #462DEA88), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 0 100px 0',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '144px 0 240px 0'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '96px 0 144px 0'
    }
  },
  callout: {
    padding: '0 24px 32px 24px', 
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      padding: '0 96px 32px 96px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 420px 32px 420px',
    }
  },
  nextStream: { letterSpacing: '0.08em', padding: '0 24px 20px 24px', textTransform: 'uppercase' },
  countdown: {
    margin: '0 24px 64px 24px',
    [theme.breakpoints.up('sm')]: {
      margin: '0px 48px 32px 48px'
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0px 512px 80px 512px'
    }
  },
  progressBar: {
    padding: '0 24px 20px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 96px 16px 96px',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0 560px 32px 560px',
    }
  },
  donationSumContainer: { float: 'left', left: '50%', position: 'relative' },
  donationSumContent: { float: 'left', left: '-50%', position: 'relative' }
}));

export default getStyles;
