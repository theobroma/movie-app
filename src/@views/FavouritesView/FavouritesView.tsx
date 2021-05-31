import React, { useEffect } from 'react';
import { makeStyles, createStyles, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
// import { moviesSelector } from '../../@store/movies/selectors';
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

const FavouriteView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const movies = useSelector(moviesSelector).data.results;

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        fav
        {/* <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {movies?.map((movie) => (
              <Grid item xs={12} sm={4} md={2} key={movie.id}>
                <MoviesCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </div>
      <Footer />
    </div>
  );
};

export default FavouriteView;
