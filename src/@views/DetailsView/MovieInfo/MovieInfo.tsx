// almost empty http://localhost:3000/details/tv/29917
// https://www.themoviedb.org/tv/29917-thirty-minute-theatre
import React from 'react';
import dayjs from 'dayjs';
import { Trans } from 'react-i18next';

import { Box, Button, Grid, Tooltip, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Rating from '@material-ui/lab/Rating';
import { nanoid } from '@reduxjs/toolkit';

import type { CreditsResponseType, TrailerType } from '../../../@types';
import { Formatter } from '../../../@utils/formatter';

import { useStyles } from './MovieInfo.styles';

interface Props {
  credits: CreditsResponseType;
  isFavorite: boolean;
  movie: any;
  onFavourite: any;
  trailerKey: TrailerType['key'];
}

const MovieInfo = ({
  credits: { crew },
  isFavorite,
  movie,
  onFavourite,
  trailerKey,
}: Props) => {
  const classes = useStyles();
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

  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle =
    title || name || original_title || original_name || 'title';
  const mediaReleaseDate = release_date || first_air_date;
  // 2 digits after comma
  const mediaVote = Math.round((vote_average + Number.EPSILON) * 10) / 10;

  const productionCountries = production_countries
    ?.map((item: any) => {
      return item.name;
    })
    .join(', ');

  const CrewBlock = crew?.length > 0 && (
    <>
      {/* <h3 className={classes.subtitle}>Crew</h3> */}
      <Grid container spacing={3} component="ul" className={classes.crewList}>
        {crew.slice(0, 4).map((person) => (
          <Grid
            item
            md={3}
            sm={6}
            component="li"
            key={nanoid()}
            style={{ paddingRight: 16 }}
          >
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {person.name}
            </Typography>
            <Typography variant="body2" style={{ fontSize: '0.9em' }}>
              {person.department}, {person.job}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Grid container spacing={3} style={{ padding: 3 }}>
      {/* poster */}
      <Grid item md={3}>
        {poster_path && (
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
          {productionCountries && ` (${productionCountries})`}
        </div>
        <ul className={classes.genreList}>
          {genres?.map((genre: any) => (
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
          <Typography component="div" style={{ marginRight: 15 }}>
            <b>Duration: </b>
            {runtime ? `${runtime} min.` : '-'}
          </Typography>
          <Typography component="div">
            <b>Budget: </b>
            {budget ? `$${Formatter.numberWithCommas(budget)}` : '-'}
          </Typography>
        </div>
        {tagline && (
          <>
            <h3 className={classes.subtitle}>Legend</h3>
            <Typography variant="body1" className={classes.tagline}>
              {tagline}
            </Typography>
          </>
        )}
        {overview && (
          <>
            <h3 className={classes.subtitle}>Overview</h3>
            <Typography variant="body1">{overview}</Typography>
          </>
        )}
        {CrewBlock}

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
              Watch the Trailer
            </Button>
          ) : (
            'No video trailer'
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

MovieInfo.whyDidYouRender = true;

export default MovieInfo;
