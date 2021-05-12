import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridGap: '8px',
      boxShadow: '10px 10px 34px -6px rgba(0,0,0,0.75)',
      borderRadius: 8,
    },

    card: {
      // backgroundColor: 'firebrick' /* firebrick, crimson, indianred */,
      display: 'grid',
      gridTemplateRows: '1fr auto',
      // gridGap: '4px',
      // minHeight: 550,
      // backgroundImage: `url(${poster})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 8,
    },

    poster: {
      width: '100%',
      // borderRadius: 8,
      height: '100%',
      cursor: 'pointer',
      backgroundColor: '#fff',
      // transition: 'all 300ms linear',
      // '&:hover': {
      //   transform: 'scale(1.05)',
      //   boxShadow: '0px 0px 10px 5px grey',
      // },
    },
    details: {
      padding: '6px 4px',
      minHeight: '100px',
    },
    movieName: {
      fontWeight: 'normal',
      margin: '4px 0 8px 0',
      lineHeight: '140%',
    },
    score: {
      // display: 'inline-flex',
      // position: 'absolute',
      // left: -5,
      // top: 8,
      // justifyContent: 'center',
      // fontWeight: 'bold',
      // padding: '2px 8px',
      // minWidth: 30,
      // color: 'white',
      // background: '#83d620',
      // borderRadius: 2,
      // [theme.breakpoints.down('xs')]: {
      //   left: -8,
      //   top: 12,
      //   fontSize: '1.5rem',
      //   minWidth: 40,
      // },
    },
    extraInfo: {
      color: 'grey',
      lineHeight: '150%',
    },
  }),
);
