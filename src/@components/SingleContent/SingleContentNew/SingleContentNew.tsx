import React from 'react';
// import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

// import { MEDIA_TYPE } from '../../@types';
import { StyledBadge, useStyles } from './SingleContentNew.styles';

const img_300 = 'https://image.tmdb.org/t/p/w300';
const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

interface Props {
  // movie: MovieEntityType | TVEntityType;
  movie: any;
  parentMediaType?: string; // crutch for similar movies
}

const SingleContent = ({
  movie: {
    id,
    title = '',
    name = '',
    original_title = '',
    original_name = '',
    original_language,
    poster_path,
    release_date = '',
    first_air_date = '',
    vote_average = 0,
    media_type,
  } = {},
  parentMediaType,
}: Props) => {
  const classes = useStyles();
  const mediaType = media_type || parentMediaType;
  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaTitleOriginal = original_title || original_name || 'title';
  const mediaReleaseDate = release_date || first_air_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  return (
    <div
      className={classes.media}
      // style={{ cursor: 'pointer' }}
      color="inherit"
    >
      <StyledBadge
        badgeContent={mediaVote}
        color={mediaVote > 6 ? 'primary' : 'secondary'}
        overlap="rectangular"
      />
      {/* poster */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
      </Link>
      {/* title */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        style={{
          textDecoration: 'none',
        }}
      >
        <b className={classes.title}>{mediaTitle}</b>
      </Link>
      <div className={classes.subTitle}>
        {/* {mediaType === MEDIA_TYPE.TV ? (
          <Trans i18nKey="TVSeries" />
        ) : (
          <Trans i18nKey="Movie" />
        )} */}
        <span>{mediaReleaseDate.split('-')[0]}</span>
        &nbsp;•&nbsp;
        <span>{mediaTitleOriginal}</span>
      </div>
    </div>
  );
};

SingleContent.whyDidYouRender = true;

export default SingleContent;
