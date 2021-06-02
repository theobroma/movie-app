import React, { useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { moviesSelector } from '../../@store/movies/selectors';
import { getTrendingMoviesTC } from '../../@store/movies/slice';
import { entitiesSelector } from '../../@store/entities/selectors';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/Skeletons/SingleContentSkeleton';

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
  const entities = useSelector(entitiesSelector);
  console.log(entities);
  // const movies = useSelector(moviesSelector).data.results;
  const isLoading = false;

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
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {/* {movies?.map((movie: any) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isLoading ? (
                  <SingleContentSkeleton />
                ) : (
                  <SingleContent movie={movie} />
                )}
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FavouriteView;
