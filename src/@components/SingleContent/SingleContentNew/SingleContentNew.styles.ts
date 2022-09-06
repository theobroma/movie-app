import type { Theme } from '@material-ui/core';
import { Badge, createStyles, makeStyles, withStyles } from '@material-ui/core';

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
      // fontFamily: 'Montserrat", sans-serif',
      // '&:hover': {
      //   backgroundColor: '#282c34',
      //   color: 'white',
      // },
    },

    poster: {
      width: '100%',
      borderRadius: 10,
    },

    title: {
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      // color: '#fff',
      margin: '10px 0 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    subTitle: {
      // display: 'flex',
      // justifyContent: 'space-between',
      // padding: '0 2px 3px',
      color: '#8f95a3',
      margin: '0 0 5px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
