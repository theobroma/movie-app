import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    media: {
      display: 'flex',
      alignItems: 'center',
    },
    mediaBody: {
      flex: 1,
    },
    mediaFigure: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 66,
      height: 66,
      borderRadius: 4,
      marginRight: '1em',
      backgroundColor: '#dbdbdb',
      border: '1px solid #d7d7d7',
      '& svg': {
        width: 33,
        height: 33,
      },
    },
  }),
);
