import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, grey, red } from '@material-ui/core/colors';

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
  }
})));

export {
  useDefaultStyles
};
