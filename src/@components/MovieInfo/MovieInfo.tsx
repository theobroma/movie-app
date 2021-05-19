import React from 'react';
import { nanoid } from 'nanoid';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Formatter } from '../../@utils/formatter';
import { useStyles } from './MovieInfo.styles';

interface Props {
  movie: any;
  trailer: any;
}

const MovieInfo: React.FC<Props> = ({ movie, trailer }) => {
  const classes = useStyles();
  const {
    title,
    genres,
    runtime,
    budget,
    poster_path,
    release_date,
    production_countries,
    vote_average,
    tagline,
    overview,
  } = movie;

  const productionCountries = production_countries
    ?.map((item: any) => {
      return item.name;
    })
    .join(', ');

  // const CrewBlock = crew.length && (
  //   <>
  //     <h3 className={classes.subtitle}>Crew</h3>
  //     <Grid container spacing={3} component="ul" className={classes.crewList}>
  //       {crew.slice(0, 4).map((person: any) => (
  //         <Grid
  //           item
  //           md={3}
  //           sm={6}
  //           component="li"
  //           key={nanoid()}
  //           style={{ paddingRight: 16 }}
  //         >
  //           <Typography variant="body2" style={{ fontWeight: 'bold' }}>
  //             {person.name}
  //           </Typography>
  //           <Typography variant="body2">
  //             {person.department}, {person.job}
  //           </Typography>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </>
  // );

  return (
    <Box py={3}>
      <Grid container spacing={3} style={{ padding: 3 }}>
        {/* poster */}
        <Grid item md={3}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={`Poster of ${title}`}
          />
        </Grid>
        {/* info */}
        <Grid item md={8} style={{ color: 'white' }}>
          <div className={classes.releaseDate}>
            {release_date && Formatter.formatDate(release_date)}
            {` `}({productionCountries})
          </div>
          <Typography
            variant="h4"
            style={{ fontWeight: 'bold' }}
            component="h1"
          >
            {title}
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
            <Rating value={vote_average / 2} readOnly />
            <span style={{ margin: '2px 0px 0 6px' }}>{vote_average}/10</span>
            {/* <Button
          style={{ marginLeft: 16 }}
          onClick={() => onFavorite(id)}
          variant={isFavorite ? 'contained' : 'outlined'}
          color="secondary"
          aria-label="like"
        >
          <FavoriteIcon />
        </Button> */}
          </div>
          <div style={{ marginTop: 10 }}>
            <Typography component="div" style={{ marginRight: 15 }}>
              <b>Duration:</b> {runtime} min.
            </Typography>
            <Typography component="div">
              <b>Budget:</b>
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
          {/* {CrewBlock} */}
          <Button
            variant="contained"
            startIcon={<YouTubeIcon />}
            color="secondary"
            target="__blank"
            href={`https://www.youtube.com/watch?v=${trailer}`}
          >
            Watch the Trailer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieInfo;
