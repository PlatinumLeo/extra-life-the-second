import { makeStyles } from '@mui/styles';
import { createNotchedClipPath } from '../../utils';

const getStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'green',
    margin: '16px 0 16px 0',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },
  textContainer: {
    // backgroundColor: 'red',
    padding: '32px 24px'
  },
  navContainer: {
    margin: '0 24px 16px 24px'
  },
  imageContainer: {
    // backgroundColor: 'blue',
    height: 'calc(min(100vw, 100vh) - 48px)',
    marginLeft: '24px',
    marginRight: '24px',
    clipPath: createNotchedClipPath(12),
    [theme.breakpoints.up('tablet')]: {
      height: 'calc(33vw - 48px)',
      width: 'calc(33vw - 48px)',
    }
  },
  imageRule: {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
    position: 'absolute',
    top: 'calc(min(100vw, 100vh) - 96px)',
    left: 0,
    width: '100%',
    [theme.breakpoints.up('tablet')]: {
      visibility: 'hidden'
    }
  }
}));

export default getStyles;
