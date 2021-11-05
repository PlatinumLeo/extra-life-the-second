import { makeStyles } from '@mui/styles';

const getStyles = makeStyles((theme) => ({
  root: {
    '& p': {
      color: theme.palette.primary.main
    }
  },
}));

export default getStyles;
