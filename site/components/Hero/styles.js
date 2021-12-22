import { makeStyles } from '@mui/styles';
import backgroundImage from '../../assets/images/BackgroundImages/mmx4_still.jpg';

const getStyles = makeStyles((theme) => ({
  videoBackground: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: -2,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(76deg, #9EEEE1aa, #462DEAaa), url(${backgroundImage})`,
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
