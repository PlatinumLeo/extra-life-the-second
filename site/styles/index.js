import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, grey, red } from '@material-ui/core/colors';

const a = 12, b = 4;

const BASIC_PATH = `polygon(
  0 0,
  0 calc(100% - ${a}px),
  ${a}px 100%,
  100% 100%,
  100% ${a}px,
  calc(100% - ${a}px) 0
)`;

const POLYGON_PATH = `polygon(
  0 0,
  0 calc(100% - ${a}px),
  ${a}px 100%,
  ${a}px calc(100% - ${b}px),
  ${b}px calc(100% - ${a}px),
  ${b}px ${b}px,
  calc(100% - ${a}px) ${b}px,
  calc(100% - ${b}px) ${a}px,
  calc(100% - ${b}px) calc(100% - ${b}px),
  ${a}px calc(100% - ${b}px),
  ${a}px 100%,
  100% 100%,
  100% ${a}px,
  calc(100% - ${a}px) 0
)`;

const simplyStylish = makeStyles({
  
});


const useDefaultStyles = makeStyles((theme => ({
  main: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    }
  },
  button: {
    margin: '5px',
    // outline: 'solid 8px black'
  },
  cssButton: {
    background: 'rgba(0,0,0,0)',
    minWidth: '64px',
    position: 'relative',
    textTransform: 'uppercase',
    clipPath: BASIC_PATH,
    WebkitClipPath: BASIC_PATH,
    padding: '6px 16px',
    '&::after': {
      content: '"Bad Order"',
      position: 'absolute',
      background: theme.palette.text.primary, 
      clipPath: POLYGON_PATH,
      WebkitClipPath: POLYGON_PATH,
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  }
})));

export {
  useDefaultStyles
};
