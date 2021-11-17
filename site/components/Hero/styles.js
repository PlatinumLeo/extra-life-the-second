import { makeStyles } from '@mui/styles';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';

const getStyles = makeStyles((theme) => ({
  thankYouParagraph: {
    padding: '0 24px 20px 24px',
    [theme.breakpoints.up('tablet')]: {
      padding: '0 96px 16px 96px',
    },
    [theme.breakpoints.up('laptop')]: {
      padding: '0 560px 32px 560px',
    }
  }, 
  countdown: {
    margin: '0 24px 64px 24px',
    [theme.breakpoints.up('tablet')]: {
      margin: '0px 48px 32px 48px'
    },
    [theme.breakpoints.up('laptop')]: {
      margin: '0px 512px 80px 512px'
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
