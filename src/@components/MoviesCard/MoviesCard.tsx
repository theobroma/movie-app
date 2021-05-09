import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

interface Props {
  movie: any;
}

const MoviesCard: React.FC<Props> = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const styles = {
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
      borderRadius: 8,
      height: '100%',
      cursor: 'pointer',
      backgroundColor: '#fff',
      // transition: 'all 300ms linear',
      // '&:hover': {
      //   transform: 'scale(1.05)',
      //   boxShadow: '0px 0px 10px 5px grey',
      // },
    },
  };

  return (
    <div style={styles.root}>
      <Link to={{ pathname: `movies/${movie.id}` }}>
        <Paper style={styles.card}>
          <img
            // src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noCover}
            src={poster}
            alt={movie.title}
            style={styles.poster}
          />
        </Paper>
      </Link>
    </div>
  );
};

export default MoviesCard;
