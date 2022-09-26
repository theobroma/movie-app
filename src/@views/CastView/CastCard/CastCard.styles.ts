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
      marginRight: '1em',
    },
  }),
);
