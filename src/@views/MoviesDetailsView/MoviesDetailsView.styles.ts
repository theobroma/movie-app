import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: -1,
      '&:after': {
        position: 'absolute',
        content: "''",
        display: 'block',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(30, 47, 60, 0.75)',
        backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(30, 47, 60, 0.75) 0%, rgba(48, 65, 78, 0.75) 100%)',
      },
    },
    backdropImage: {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  }),
);
