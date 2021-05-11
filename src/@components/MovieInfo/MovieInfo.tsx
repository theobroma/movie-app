import React from 'react';
import { nanoid } from 'nanoid';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formatter } from '../../@utils/formatter';
import { useStyles } from './MovieInfo.styles';
import MovieInfoSkeleton from '../Skeletons';

interface Props {
  movie: any;
  url?: any;
}

const MovieInfo: React.FC<Props> = ({ url, movie }) => {
  const classes = useStyles();
  const {
    id,
    title,
    genres,
    duration,
    runtime,
    budget,
    backdropImageUrl,
    backdrop_path,
    posterImageUrl,
    poster_path,
    releaseDate,
    release_date,
    // productionCountries,
    production_countries,
    voteAverage,
    vote_average,
    legend,
    tagline,
    overview,
    crew,
    actors,

    isFavorite,
    isLoading,
  } = movie;
  console.log(movie);

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

  const MovieInfoBlock = (
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
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <main style={{ position: 'relative' }}>
      <div className={classes.backdrop}>
        <img
          className={classes.backdropImage}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`Backdrop of ${title}`}
        />
      </div>
      <Container maxWidth="lg">
        {isLoading ? MovieInfoSkeleton : MovieInfoBlock}
      </Container>
    </main>
  );
};

export default MovieInfo;

// adult: false
// backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
// belongs_to_collection: null
// budget: 20000000
// genres: (4) [{…}, {…}, {…}, {…}]
// homepage: "https://www.mortalkombatmovie.net"
// id: 460465
// imdb_id: "tt0293429"
// original_language: "en"
// original_title: "Mortal Kombat"
// overview: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
// popularity: 5441.414
// poster_path: "/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg"
// production_companies: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// production_countries: (2) [{…}, {…}]
// release_date: "2021-04-07"
// revenue: 50115000
// runtime: 110
// spoken_languages: (3) [{…}, {…}, {…}]
// status: "Released"
// tagline: "Get over here."
// title: "Mortal Kombat"
// video: false
// vote_average: 7.7
// vote_count: 2225
