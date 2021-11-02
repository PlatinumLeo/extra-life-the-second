import { makeStyles } from '@material-ui/core';
import backgroundImage from '../../assets/images/BackgroundImages/impact.png';

const getStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: `linear-gradient(${theme.palette.secondary.main}88, ${theme.palette.secondary.main}88), url(${backgroundImage})`,
    backgroundBlendMode: 'saturation',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.secondary.contrastText,
    padding: '48px 0 24px 0',
    [theme.breakpoints.up('xl')]: {
      padding: '96px 0 124px 0'
    }
  },
  rule: { border: `1px solid ${theme.palette.common.white}`, width: '60px' },
  text: {
    lineHeight: '170%',
    padding: '32px 24px',
    maxWidth: '700px',
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 'calc(calc(100vw - 700px) / 2)'
    }
  },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  carousel: {
    padding: '0 24px 32px 24px',
    maxWidth: '1000px',
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 'calc(calc(100vw - 1000px) / 2)'
    }
  }
}));

export default getStyles;