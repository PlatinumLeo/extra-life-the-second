import { makeStyles } from '@mui/styles';
import { createNotchedClipPath } from '../../utils';

const getStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'green',
    margin: '24px 0 24px 0',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('mobile')]: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      '&:last-of-type': {
        borderBottom: 'none'
      }
    },
    [theme.breakpoints.up('tablet')]: {
      minHeight: '45vw',
      margin: '48px 0'
    },
    [theme.breakpoints.up('laptop')]: {
      minHeight: '608px'
    }
  },
  rule: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: '60px',
    marginLeft: '24px',
    marginBottom: '32px',
    [theme.breakpoints.up('tablet')]: {
      border: `2px solid ${theme.palette.primary.main}`,
      marginLeft: '48px',
    },
    [theme.breakpoints.up('laptop')]: {
      marginLeft: '120px',
      marginBottom: '32px',
      width: '100px',
    }
  },
  title: {
    padding: '32px 24px 0px 24px', 
    [theme.breakpoints.up('tablet')]: {
      paddingLeft: '48px'
    },
    [theme.breakpoints.up('laptop')]: {
      padding: '124px 0 16px 120px'
    }
  },
  textContainer: {
    // backgroundColor: 'red',
    [theme.breakpoints.up('tablet')]: {
      width: '55%',
      border: `2px solid ${theme.palette.primary.main}`,
      borderLeft: 'none'
    }
  },
  text: {
    // backgroundColor: 'yellow',
    lineHeight: '170%',
    padding: '0 24px 8px 24px',
    '&:last-of-type': {
      paddingBottom: '32px'
    },
    [theme.breakpoints.up('tablet')]: {
      padding: '0 80px 24px 48px'
    },
    [theme.breakpoints.up('laptop')]: {
      padding: '0 120px 40px 120px'
    }
  },
  textContainerRight: {
    // backgroundColor: 'red',
    [theme.breakpoints.up('tablet')]: {
      width: '55%',
      border: `2px solid ${theme.palette.primary.main}`,
      borderRight: 'none',
      position: 'relative',
      left: '45%',
      zIndex: '0'
    }
  },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },
  gray: {
    filter: 'grayscale(100%)',
  },
  hidden: {
    visibility: 'hidden'
  },
  imageContainer: {
    backgroundColor: 'red',
    height: 'calc(min(100vw, 100vh) - 48px)',
    marginLeft: '24px',
    marginRight: '24px',
    clipPath: createNotchedClipPath(12),
    [theme.breakpoints.up('tablet')]: {
      height: '45vw',
      width: '45vw',
      position: 'absolute',
      right: '0px',
      top: '-24px',
    },
    [theme.breakpoints.up('laptop')]: {
      height: '560px',
      width: '560px',
      left: 'calc(55vw - 60px)',
      top: '48px'
    }
  },
  imageOverlay: {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  imageRule: {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
    position: 'absolute',
    top: 'calc(min(100vw, 100vh) - 96px)',
    left: 0,
    width: '100%'
  },
  imageContainerRight: {
    backgroundColor: 'red',
    height: 'calc(min(100vw, 100vh) - 48px)',
    marginLeft: '24px',
    marginRight: '24px',
    clipPath: createNotchedClipPath(12),
    [theme.breakpoints.up('tablet')]: {
      height: '45vw',
      width: '45vw',
      position: 'absolute',
      left: '0px',
      top: '-24px',
      zIndex: '1'
    },
    [theme.breakpoints.up('laptop')]: {
      height: '560px',
      width: '560px',
      left: 'unset',
      right: 'calc(55vw - 60px)',
      top: '48px'
    }
  }
}));

export default getStyles;