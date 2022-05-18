import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    movieContainer: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    poster: {
      width: '100%',
      borderRadius: 10,
      boxShadow: '0px 3px 20px #0000003b',
    },
    titleDate: {
      opacity: 0.8,
      fontWeight: 400,
    },
    releaseDate: {
      fontSize: '11pt',
      color: '#dadde2',
    },
    vote: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12pt',
    },
    genreList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
    },
    genre: {
      cursor: 'pointer',
      padding: '1px 6px',
      marginRight: 10,
      border: '1px solid white',
      borderRadius: 4,
      fontSize: '10pt',
    },
    subtitle: {
      marginBottom: 8,
      fontSize: '1.3em',
    },
    crewList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '20px',
    },
    trailer: {
      color: 'white',
    },
    tagline: {
      fontSize: '1.1em',
      fontWeight: 400,
      fontStyle: 'italic',
      opacity: 0.7,
    },
  }),
);
