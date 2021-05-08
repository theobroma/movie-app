import React, { useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import MoviesCard from '../../@components/MoviesCard';
import { moviesSelector } from '../../@store/movies/selectors';
import { getTrendingMoviesTC } from '../../@store/movies/slice';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
    }),
  };
});

const MoviesDetailsView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector).data.results;

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          {/* <Grid container spacing={3} style={{ padding: 3 }}>
            {movies?.map((movie) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={movie.id}>
                <MoviesCard movies={movie} />
              </Grid>
            ))}
          </Grid> */}
          MoviesDetailsView
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
