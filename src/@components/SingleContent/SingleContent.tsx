import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MEDIA_TYPE } from '../../@types';
import { StyledBadge, useStyles } from './SingleContent.styles';

export const img_300 = 'https://image.tmdb.org/t/p/w300';
export const unavailable =
  'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  // movie: MovieEntityType | TVEntityType;
  movie: any;
  parentMediaType?: string; // crutch for similar movies
}

const SingleContent: React.FC<Props> = ({
  movie: {
    id,
    title = '',
    name = '',
    original_title = '',
    original_name = '',
    poster_path,
    release_date = '',
    first_air_date = '',
    vote_average = 0,
    media_type,
  } = {},
  parentMediaType,
}) => {
  const classes = useStyles();
  const mediaType = media_type || parentMediaType;
  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaReleaseDate = release_date || first_air_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  return (
    <Link
      to={{
        pathname: `/details/${mediaType}/${id}`,
      }}
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
          badgeContent={mediaVote}
          color={mediaVote > 6 ? 'primary' : 'secondary'}
        />
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
        <b className={classes.title}>{mediaTitle}</b>
        <span className={classes.subTitle}>
          {mediaType === MEDIA_TYPE.TV ? (
            <Trans i18nKey="TVSeries" />
          ) : (
            <Trans i18nKey="Movie" />
          )}
          <span className={classes.subTitle}>{mediaReleaseDate}</span>
        </span>
      </div>
    </Link>
  );
};

SingleContent.whyDidYouRender = true;

export default SingleContent;
