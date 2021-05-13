import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, createStyles, Theme, withStyles } from '@material-ui/core';

import './SingleContent.css';
// import { img_300, unavailable } from '../../config/config';
export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  movie: any;
  media_type: string;
}

const StyledBadge = withStyles((theme: Theme) =>
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

const SingleContent: React.FC<Props> = ({
  movie: {
    id,
    title,
    original_name,
    poster_path: poster,
    release_date: date,
    first_air_date,
    vote_average,
  },
  media_type,
}) => {
  return (
    <Link to={{ pathname: `movies/${id}` }}>
      <div className="media" style={{ cursor: 'pointer' }} color="inherit">
        <StyledBadge
          badgeContent={vote_average}
          color={vote_average > 6 ? 'primary' : 'secondary'}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title || original_name}</b>
        <span className="subTitle">
          {media_type === 'tv' ? 'TV Series' : 'Movie'}
          <span className="subTitle">{date || first_air_date}</span>
        </span>
      </div>
    </Link>
  );
};

export default SingleContent;
