import React, { useEffect } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import Footer from '../@components/Footer';
import { getTrendingMoviesTC } from '../@store/movies/slice';
import { moviesSelector } from '../@store/movies/selectors';
import MoviesListItem from '../@components/MoviesListItem';
import MoviesCard from '../@components/MoviesCard';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector).data.results;

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {movies?.map((movie: any) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={movie.id}>
                <MoviesCard movies={movie} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
