import {
  makeStyles,
  Theme,
  createStyles,
  Badge,
  withStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    media: {
      display: 'flex',
      flexDirection: 'column',
      /* width: 200px; */
      padding: 5,
      margin: '5px 0',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 10,
      position: 'relative',
      fontFamily: 'Montserrat", sans-serif',
      '&:hover': {
        backgroundColor: '#282c34',
        color: 'white',
      },
    },

    poster: {
      borderRadius: 10,
    },

    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 17,
      padding: '8px 0',
      minHeight: 65,
    },

    subTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 2px 3px',
    },
  }),
);

export const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 0,
      top: 24,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      minWidth: '35px',
    },
  }),
)(Badge);
