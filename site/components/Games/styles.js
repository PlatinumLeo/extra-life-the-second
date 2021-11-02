import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    '& p': {
      color: theme.palette.primary.main
    }
  },
}));

export default getStyles;
