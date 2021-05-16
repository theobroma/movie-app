import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieContainer: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    // backdrop: {
    //   position: 'absolute',
    //   height: '100%',
    //   width: '100%',
    //   zIndex: -1,
    //   '&:after': {
    //     position: 'absolute',
    //     content: "''",
    //     display: 'block',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     background: 'rgba(30, 47, 60, 0.75)',
    //     backgroundImage:
    //       'radial-gradient(circle at 20% 50%, rgba(30, 47, 60, 0.75) 0%, rgba(48, 65, 78, 0.75) 100%)',
    //   },
    // },
    // backdropImage: {
    //   display: 'block',
    //   width: '100%',
    //   height: '100%',
    //   objectFit: 'cover',
    // },
    poster: {
      width: '100%',
      borderRadius: 10,
      boxShadow: '0px 3px 20px #0000003b',
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
      fontSize: '13pt',
    },
    crewList: {
      listStyle: 'none',
      padding: 0,
    },
  }),
);
