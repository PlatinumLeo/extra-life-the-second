import { makeStyles } from '@mui/styles';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';

const getStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    backgroundImage: `linear-gradient(76deg, #9EEEE188, #462DEA88), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.primary.contrastText,
    position: 'relative',
    padding: '80px 0 100px 0',
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '144px 0 240px 0'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '96px 0 144px 0'
    },
    zIndex: 5
  },
  content: {
    // backgroundColor: 'green'
    zIndex: 4,
    opacity: 1
  },
  callout: {
    padding: '0 24px 32px 24px', 
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      padding: '0 96px 32px 96px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 420px 32px 420px',
    }
  },
  nextStream: { letterSpacing: '0.08em', padding: '0 24px 20px 24px', textTransform: 'uppercase' },
  thankYouParagraph: {
    padding: '0 24px 20px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 96px 16px 96px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 560px 32px 560px',
    }
  }, 
  countdown: {
    margin: '0 24px 64px 24px',
    [theme.breakpoints.up('sm')]: {
      margin: '0px 48px 32px 48px'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0px 512px 80px 512px'
    }
  },
  progressBar: {
    padding: '0 24px 20px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 96px 16px 96px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 560px 32px 560px',
    }
  },
  donationSumContainer: { float: 'left', left: '50%', position: 'relative' },
  donationSumContent: { float: 'left', left: '-50%', position: 'relative' },
  videoBackground: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: -2,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(76deg, #9EEEE188, #462DEA88), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: 0, left: 0,
    '& video': {
      position: 'absolute',
      width: '100%',
      display: 'block',
      margin: 'auto',
      top: '0px'
    }
  },
  videoOverlay: {
    background: `linear-gradient(76deg, #9EEEE1aa, #462DEAaa)`,
    opacity: 1,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: -1,
    height: '100%',
    width: '100%',
    top: 0, left: 0,
    backdropFilter: 'blur(4px)'
  }
}));

export default getStyles;
