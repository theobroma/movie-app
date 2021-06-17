import React, { useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { moviesSelector } from '../../@store/movies/selectors';
import { getTrendingMoviesTC } from '../../@store/movies/slice';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/Skeletons/SingleContentSkeleton';
import { favouriteMoviesIdsSelector } from '../../@store/user/selectors';

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
  const favouriteMoviesIds = useSelector(favouriteMoviesIdsSelector);
  // console.log(favouriteMoviesIds);
  const { ids, entities } = useSelector(moviesSelector);
  // console.log(entities[ids[0]]);
  const isLoading = false;

  const preparedMovies: any = [];
  favouriteMoviesIds.forEach((movieId) => {
    const movie = entities[movieId];
    // TODO:
    // console.log(entities[movieId] === undefined);
    preparedMovies.push(movie);
  });

  console.log(preparedMovies);

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
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h4">
                Favorite movies
              </Typography>
            </Grid>
            {preparedMovies.length > 0 &&
              preparedMovies?.map((movie: any) => (
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

export default FavouriteView;
