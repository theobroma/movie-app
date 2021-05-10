import { Container, Grid } from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './MovieInfo.styles';

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
    budget,
    backdropImageUrl,
    backdrop_path,
    posterImageUrl,
    poster_path,
    releaseDate,
    productionCountries,
    voteAverage,
    legend,
    overview,
    crew,
    actors,

    isFavorite,
  } = movie;
  console.log(movie);
  return (
    <main style={{ position: 'relative' }}>
      <span>MovieInfo</span>
      <div className={classes.backdrop}>
        <img
          className={classes.backdropImage}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`Backdrop of ${title}`}
        />
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={3} style={{ padding: 3 }}>
          <Grid item md={3}>
            <img
              className={classes.poster}
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={`Poster of ${title}`}
            />
          </Grid>
        </Grid>
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
