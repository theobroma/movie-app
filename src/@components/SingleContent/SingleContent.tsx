import React from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../../@types';
import { useStyles, StyledBadge } from './SingleContent.styles';

// import { img_300, unavailable } from '../../config/config';
export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  movie: MovieType;
}

const SingleContent: React.FC<Props> = ({
  movie: {
    id,
    title,
    original_name,
    poster_path,
    release_date,
    first_air_date,
    vote_average = 0,
    media_type,
  } = {},
}) => {
  const classes = useStyles();
  return (
    <Link
      to={{ pathname: `/details/${media_type}/${id}` }}
      style={{
        textDecoration: 'none',
      }}
    >
      <div
        className={classes.media}
        style={{ cursor: 'pointer' }}
        color="inherit"
      >
        <StyledBadge
          badgeContent={vote_average}
          color={vote_average > 6 ? 'primary' : 'secondary'}
        />
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
        <b className={classes.title}>{title || original_name}</b>
        <span className={classes.subTitle}>
          {media_type === 'tv' ? 'TV Series' : 'Movie'}
          <span className={classes.subTitle}>
            {release_date || first_air_date}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default SingleContent;
