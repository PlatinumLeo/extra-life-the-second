import { makeStyles } from '@material-ui/core';
import { createNotchedClipPath } from '../../utils';

const getStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green',
    margin: '24px 0 24px 0',
    position: 'relative',
  },
  rule: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: '60px',
    marginLeft: '24px'
  },
  title: {
    padding: '32px 24px 0px 24px'
  },
  textContainer: {
    // backgroundColor: 'red',
  },
  game: {
    padding: '0 24px'
  },
  text: {
    // backgroundColor: 'yellow',
    lineHeight: '170%',
    padding: '0px 24px 32px 24px'
  },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    backgroundColor: 'red',
    height: 'calc(min(100vw, 100vh) - 48px)',
    marginLeft: '24px',
    marginRight: '24px',
    clipPath: createNotchedClipPath(12),
    [theme.breakpoints.up('sm')]: {
      margin: '0',
      height: 'calc(33vw - 48px)',
      width: 'calc(33vw - 48px)',
      left: '24px',
      top: '50%'
    }
  },
  imageRule: {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
    position: 'absolute',
    top: 'calc(min(100vw, 100vh) - 96px)',
    left: 0,
    width: '100%'
  }
}));

export default getStyles;