import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../../@components/AppBar';
import Footer from '../../../@components/Footer';
import SingleContent from '../../../@components/SingleContent';
import SingleContentSkeleton from '../../../@components/Skeletons/SingleContentSkeleton';
import { getMediaDetailsTC } from '../../../@store/entities/slice';
import { moviesSelector } from '../../../@store/movies/selectors';
import { getTrendingMoviesTC } from '../../../@store/movies/slice';
import {
  visitedMediaSelector,
  visitedMovieIdsSelector,
} from '../../../@store/user/selectors';
import { clearVisitedAC } from '../../../@store/user/slice';
import MediaTabs from '../MediaTabs';

const VisitedMovieView: React.FC = () => {
  const dispatch = useDispatch();
  // const visitedMediaIds = useSelector(visitedMediaSelector);
  const visitedMovieIds = useSelector(visitedMovieIdsSelector);

  console.log(visitedMovieIds);
  const { ids, entities } = useSelector(moviesSelector);
  // console.log(entities[ids[0]]);
  const isLoading = false;

  const preparedMovies: any = [];
  // visitedMoviesIds.forEach((movieId) => {
  //   const movie = entities[movieId];
  //   preparedMovies.push(movie);
  // });

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  const handleClearButton = () => {
    dispatch(clearVisitedAC());
  };

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {/* TABS */}
            <Grid item xs={12}>
              <MediaTabs />
            </Grid>
            <Grid item xs={12}>
              <Box justifyContent="space-between" display="flex">
                <Typography component="h2" variant="h4">
                  Visited Movies
                </Typography>
                <Button
                  onClick={handleClearButton}
                  style={{ marginLeft: 'auto' }}
                  variant="outlined"
                  // disabled={!movieIds.length}
                >
                  Clear history
                </Button>
              </Box>
            </Grid>
            {preparedMovies.length > 0 &&
              preparedMovies?.reverse().map((movie: any) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                  {isLoading ? (
                    <SingleContentSkeleton />
                  ) : (
                    <SingleContent movie={movie} />
                  )}
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

// function MovieCardFetch({ id, movie, ready, fetch, onFavorite }) {
//   const dispatch = useDispatch();
//   useEffect(dispatch(getMediaDetailsTC({ movieID: id, mediaType })), [
//     id,
//     movie,
//     fetch,
//     ready,
//   ]);

//   return movie ? (
//     // <MovieCard {...movie} onFavorite={onFavorite} />
//     <SingleContent movie={movie} />
//   ) : (
//     <SingleContentSkeleton />
//   );
// }

export default VisitedMovieView;
