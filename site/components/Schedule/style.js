import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    '& p[class^="Cell-dayOfWeek"]': {
      color: theme.palette.text.primary
    },
    '& div[class^="Cell-dayOfMonth"]': {
      color: theme.palette.text.primary
    },
    '& span[class^="Label-text"]': {
      color: theme.palette.text.primary
    }
  }
}));

export default getStyles;
