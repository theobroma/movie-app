// almost empty http://localhost:3000/details/tv/29917
// https://www.themoviedb.org/tv/29917-thirty-minute-theatre
// https://blog.thoughtspile.tech/2022/01/17/jsx-conditionals/
import React from 'react';
import dayjs from 'dayjs';
import { Trans } from 'react-i18next';

import { Box, Button, Grid, Tooltip, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Rating from '@material-ui/lab/Rating';

import { useAppSelector } from '../../../@store/configureStore';
import { languageSelector } from '../../../@store/ui/selectors';
import type {
  CreditsResponseType,
  GenreType,
  ProductionCountryType,
  TrailerType,
} from '../../../@types';
import { Formatter } from '../../../@utils/formatter';

import CrewList from './CrewList';
import { useStyles } from './MovieInfo.styles';
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const countries = require('i18n-iso-countries');

interface Props {
  credits: CreditsResponseType;
  isFavorite: boolean;
  movie: any;
  onFavourite: any;
  trailerKey: TrailerType['key'];
}

const MovieInfo = ({
  credits,
  isFavorite,
  movie,
  onFavourite,
  trailerKey,
}: Props) => {
  const {
    budget,
    first_air_date,
    genres,
    title,
    name,
    original_title,
    original_name,
    overview,
    poster_path,
    production_countries,
    release_date,
    runtime,
    tagline,
    vote_average,
  } = movie;
  const classes = useStyles();
  const currentLanguage = useAppSelector(languageSelector);

  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaReleaseDate = release_date || first_air_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  const productionCountries = production_countries
    ?.map((item: ProductionCountryType) => {
      return countries.getName(item.iso_3166_1, currentLanguage, {
        select: 'official',
      });
    })
    .join(', ');

  return (
    <Grid container spacing={3} style={{ padding: 3 }}>
      {/* poster */}
      <Grid item md={3}>
        {!!poster_path && (
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={`Poster of ${mediaTitle}`}
          />
        )}
      </Grid>
      {/* info */}
      <Grid item md={8} style={{ color: 'white' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }} component="h1">
          {mediaTitle}{' '}
          <span className={classes.titleDate}>
            ({dayjs(mediaReleaseDate).format('YYYY')})
          </span>
        </Typography>
        <div className={classes.releaseDate}>
          {/* {mediaReleaseDate && Formatter.formatDate(mediaReleaseDate)} */}
          {dayjs(mediaReleaseDate).format('DD/MM/YYYY')}
          {!!productionCountries && ` (${productionCountries})`}
        </div>
        <ul className={classes.genreList}>
          {genres?.map((genre: GenreType) => (
            <li className={classes.genre} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
        {/* Rating */}
        <div className={classes.vote}>
          <Rating value={mediaVote / 2} readOnly />
          <span style={{ margin: '2px 0px 0 6px' }}>{mediaVote}/10</span>
          <Tooltip
            // title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
            title={
              isFavorite ? (
                <Trans i18nKey="Tooltip.RemoveFromFavourites" />
              ) : (
                <Trans i18nKey="Tooltip.AddToFavourites" />
              )
            }
          >
            <Button
              style={{ marginLeft: 16 }}
              onClick={() => onFavourite()}
              variant={isFavorite ? 'contained' : 'outlined'}
              // variant="outlined"
              color="secondary"
              aria-label="like"
            >
              <FavoriteIcon
                style={{ color: isFavorite ? 'white' : 'secondary' }}
              />
            </Button>
          </Tooltip>
        </div>
        <div style={{ marginTop: 10 }}>
          {!!runtime && (
            <Typography component="div" style={{ marginRight: 15 }}>
              <b>
                {/* Duration:  */}
                <Trans i18nKey="Duration" />
                &nbsp;:&nbsp;
              </b>
              {`${runtime} min.`}
            </Typography>
          )}
          {/*  */}
          {!!budget && (
            <Typography component="div">
              <b>
                {/* Budget:  */}
                <Trans i18nKey="Budget" />
                &nbsp;:&nbsp;
              </b>
              {`$${Formatter.numberWithCommas(budget)}`}
            </Typography>
          )}
        </div>
        {!!tagline && (
          <Typography variant="body1" className={classes.tagline}>
            {tagline}
          </Typography>
        )}
        {!!overview && (
          <>
            <h3 className={classes.subtitle}>
              {/* Overview */}
              <Trans i18nKey="Overview" />
            </h3>
            <Typography variant="body1">{overview}</Typography>
          </>
        )}
        <CrewList credits={credits} />

        <Box py={3}>
          {trailerKey ? (
            <Button
              className={classes.trailer}
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="secondary"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${trailerKey}`}
            >
              {/* Watch the Trailer */}
              <Trans i18nKey="Btn.WatchTrailer" />
            </Button>
          ) : (
            // 'No video trailer'
            <Trans i18nKey="Message.NoVideoTrailer" />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

MovieInfo.whyDidYouRender = true;

export default MovieInfo;
