import React from 'react';
import { Link } from 'react-router-dom';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { useAppSelector } from '../../../@store/configureStore';
import { languageSelector } from '../../../@store/ui/selectors';

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
  const currentLanguage = useAppSelector(languageSelector);
  const mediaType = media_type || parentMediaType;
  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaTitleOriginal = original_title || original_name || 'title';
  const mediaReleaseDate = release_date || first_air_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  return (
    <div className={classes.media} color="inherit">
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
        className={classes.posterLink}
      >
        <img
          className={classes.poster}
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
        <div className={classes.mask}>
          <div>
            <PlayArrowIcon fontSize="inherit" />
          </div>
        </div>
      </Link>
      {/* title */}
      <Link
        to={{
          pathname: `/details/${mediaType}/${id}`,
        }}
        className={classes.title}
      >
        <b>{mediaTitle}</b>
      </Link>
      <div className={classes.subTitle}>
        <span>{mediaReleaseDate.split('-')[0]}</span>
        {original_language !== currentLanguage && (
          <>
            &nbsp;•&nbsp;
            <span>{mediaTitleOriginal}</span>
          </>
        )}
      </div>
    </div>
  );
};

SingleContent.whyDidYouRender = true;

export default SingleContent;
