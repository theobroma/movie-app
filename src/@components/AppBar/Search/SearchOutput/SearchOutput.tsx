import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from './SearchOutput.styles';

export const img_154 = 'https://image.tmdb.org/t/p/w154';
export const unavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  movies: any;
}

const SearchOutput: React.FC<Props> = ({ movies = [] }) => {
  const classes = useStyles();

  return (
    <List className={classes.root} aria-labelledby="nested-list-subheader">
      {movies.map((movie: any) => {
        const poster = movie?.poster_path;
        return (
          <ListItem
            button
            component={RouterLink}
            className={classes.item}
            to={`/details/movie/${movie?.id}`}
          >
            <img
              className={classes.itemImage}
              src={poster ? `${img_154}${poster}` : unavailable}
              alt={movie?.title}
            />
            <div className={classes.itemInfo}>
              <Typography variant="body1">
                <span style={{ fontWeight: 500, color: '#000' }}>
                  {movie?.title}
                </span>{' '}
                <span style={{ color: 'grey' }}>
                  {/* {movie?.releaseDate > 0
                    ? ` (${movie.releaseDate.getFullYear()})`
                    : ''} */}
                  {movie?.release_date || movie?.first_air_date}
                </span>
              </Typography>
              <Typography
                variant="body2"
                component="span"
                style={{ color: 'grey' }}
              >
                {/* TODO: */}
                {movie?.genres?.length ? movie?.genres.join(', ') : '—'}
              </Typography>
            </div>
            <Typography
              variant="body2"
              className={classes.vote}
              //   style={{ color }}
              color={movie?.vote_average > 6 ? 'primary' : 'secondary'}
            >
              {movie?.vote_average > 0 ? movie?.vote_average : '—'}
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SearchOutput;
