import { makeStyles } from '@material-ui/core';
import { createNotchedClipPath } from '../../utils';

export const getTeamStyles = makeStyles((theme) => ({
  root: { padding: '48px 0 24px 0' },
  rule: { border: `1px solid ${theme.palette.primary.main}`, width: '60px' },
  text: {
    lineHeight: '170%',
    padding: '32px 24px',
    maxWidth: '700px',
    [theme.breakpoints.up('sm')]: {
      padding: '32px 160px'
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 'calc(calc(100vw - 700px) / 2)',
      paddingBottom: '64px'
    }
  },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  carousel: {
    // backgroundColor: 'red',
    padding: '0 24px',
    maxWidth: '1376px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 48px'
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 'calc(calc(100vw - 1376px) / 2)',
      paddingBottom: '64px'
    }
  }
}));

export const getTeamTileStyles = makeStyles((theme) => ({
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'calc(calc(100vw - 64px) / 2)',
    height: 'calc(calc(100vw - 64px) / 2)',
    margin: 'calc(calc(100vw - 64px) / -4)',
    float: 'left',
    perspective: '500px',
    '&:hover': {
      '&>div': {
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s'
      }
    },
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    },
    [theme.breakpoints.up('sm')]: {
      width: 'calc(calc(100vw - 168px) / 4)',
      height: 'calc(calc(100vw - 168px) / 4)',
      margin: 'calc(calc(100vw - 168px) / -8)',
    },
    [theme.breakpoints.up('xl')]: {
      width: '320px',
      height: '320px',
      margin: '-160px'
    }
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d'
  },
  front: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    objectFit: 'cover',
    clipPath: createNotchedClipPath(12),
    '& img': {
      filter: 'grayscale(100%)'
    }
  },
  back: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    objectFit: 'cover',
    transform: 'rotateY(180deg)',
    clipPath: createNotchedClipPath(12, true)
  },
  tile: {
    width: 'calc(calc(100vw - 64px) / 2)',
    height: 'calc(calc(100vw - 64px) / 2)',
    margin: '0 16px 0 0',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(calc(100vw - 168px) / 4)',
      height: 'calc(calc(100vw - 168px) / 4)',
      margin: '0 24px 16px 0',
      '&:nth-of-type(4n)': {
        marginRight: 0
      }
    },
    [theme.breakpoints.up('xl')]: {
      width: '320px',
      height: '320px',
      margin: '0 32px 16px 0',
      '&:nth-of-type(4n)': {
        marginRight: 0
      }
    }
  },
  tileOverlay: {
    opacity: 0.5,
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0
  }
}));