// https://stackoverflow.com/questions/59339321/how-to-change-visibility-of-another-class-when-hovering-using-jss
import type { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'rgb(56 56 56)',
    },
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
    titleMedia: {
      fontWeight: 700,
      color: '#fff',
      textDecoration: 'none',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
      },
    },
    titleDate: {
      opacity: 0.8,
      fontWeight: 400,
      color: '#fff',
    },
    link: {
      color: '#fff',
      // fontFamily: 'Source Sans Pro', Arial, sans-serif,
      fontSize: '1.1em',
      fontWeight: 600,
      margin: 0,
      opacity: 0.6,
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
      },
    },
  }),
);
