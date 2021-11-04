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
  },
  centerBar: {
    [theme.breakpoints.down('md')]: {
      flexGrow: 1
    },
    [theme.breakpoints.up('lg')]: {
      alignSelf: 'center',
      width: 1188
    }
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  },
  center: {
    flexGrow: 1
  },
  centerButton: {
    color: 'white'
  },
  menuIcon: {
    color: theme.palette.common.white
  },
  toolbar: {
    height: '80px'
  },
  hiddenLargeDown: {
    [theme.breakpoints.up('xl')]: {
      visibility: 'hidden'
    }
  },
  hiddenXlUp: {
    [theme.breakpoints.down('lg')]: {
      visibility: 'hidden'
    }
  }
}));

export default useStyles;