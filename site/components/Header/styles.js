import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Russo One',
    paddingLeft: 10,
  },
  image: {
    height: 45,
  },
  buttonText: {
    fontFamily: 'Russo One', 
    paddingTop: 2, 
    paddingRight: 10,
  },
  buttonImage: {
    width: 25, 
    height: 25
  }
}));

export default useStyles;