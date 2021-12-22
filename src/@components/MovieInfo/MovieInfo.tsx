import React from 'react';
import { Box, Button, Grid, Tooltip, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { nanoid } from '@reduxjs/toolkit';
import { Formatter } from '../../@utils/formatter';
import { useStyles } from './MovieInfo.styles';

interface Props {
  id: string | undefined;
  movie: any;
  trailer: any;
  credits: any;
  onFavourite: any;
  isFavorite: boolean;
}

const MovieInfo: React.FC<Props> = ({
  id,
  movie,
  trailer,
  credits: { crew },
  onFavourite,
  isFavorite,
}) => {
  const classes = useStyles();
  const {
    budget,
    first_air_date,
    genres,
    original_name,
    overview,
    poster_path,
    production_countries,
    release_date,
    runtime,
    tagline,
    title,
    vote_average,
  } = movie;

  // DIFFERENT FIELDS FOR MOVIE AND TV
  const mediaTitle = title || original_name || 'title';
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
      <h3 className={classes.subtitle}>Crew</h3>
      <Grid container spacing={3} component="ul" className={classes.crewList}>
        {crew.slice(0, 4).map((person: any) => (
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
            <Typography variant="body2">
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
        <div className={classes.releaseDate}>
          {mediaReleaseDate && Formatter.formatDate(mediaReleaseDate)}
          {productionCountries && ` (${productionCountries})`}
        </div>
        <Typography variant="h4" style={{ fontWeight: 'bold' }} component="h1">
          {mediaTitle}
        </Typography>
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
            title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          >
            <Button
              style={{ marginLeft: 16 }}
              onClick={() => onFavourite(id)}
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
            <Typography variant="body1">{tagline}</Typography>
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
          {trailer ? (
            <Button
              className={classes.trailer}
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="secondary"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${trailer}`}
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
