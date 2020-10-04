import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme => ({
  main: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%'
    }
  }
})));

export default useStyles;
