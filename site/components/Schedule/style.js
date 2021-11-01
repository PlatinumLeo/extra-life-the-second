import { makeStyles } from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    '& table>tbody>tr>td>div': {
      '&>p': {
        color: theme.palette.text.primary
      },
      '&>div': {
        color: theme.palette.text.primary
      },
      '&>span': {
        color: theme.palette.text.primary
      }
    }
  }
}));

export default getStyles;