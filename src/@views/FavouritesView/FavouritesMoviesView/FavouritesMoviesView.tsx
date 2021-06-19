import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../../@components/AppBar';
import Footer from '../../../@components/Footer';
import SingleContent from '../../../@components/SingleContent';
import SingleContentSkeleton from '../../../@components/Skeletons/SingleContentSkeleton';
import { entitiesMoviesSelector } from '../../../@store/entities/selectors';
import { getMediaDetailsTC } from '../../../@store/entities/slice';
import { getTrendingMoviesTC } from '../../../@store/movies/slice';
import { favouriteMovieIdsSelector } from '../../../@store/user/selectors';
import { clearVisitedAC } from '../../../@store/user/slice';
import { MEDIA_TYPE } from '../../../@types';
import MediaTabs from '../MediaTabs';

const FavouritesMoviesView: React.FC = () => {
  const dispatch = useDispatch();
  const favouriteMovieIds = useSelector(favouriteMovieIdsSelector);

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
                  Favourites Movies
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
            {favouriteMovieIds.length > 0 &&
              favouriteMovieIds?.reverse().map((movieId: any) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                  {/* {isLoading ? (
                    <SingleContentSkeleton />
                  ) : (
                    <SingleContent movie={movie} />
                  )} */}
                  <MovieCardFetch id={movieId} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const MovieCardFetch: React.FC<any> = ({
  id,
  // movie,
  ready,
  fetch,
  onFavorite,
  mediaType,
}) => {
  const dispatch = useDispatch();
  const { ids, entities } = useSelector(entitiesMoviesSelector);
  // console.log(entities[ids[0]]);

  useEffect(() => {
    dispatch(getMediaDetailsTC({ movieID: id, mediaType: MEDIA_TYPE.MOVIE }));
  }, [dispatch, id, mediaType]);

  let movie = {} as any;
  const index = ids.indexOf(id);
  const isExist = index !== -1;
  if (isExist) {
    movie = entities[id];
  }

  return movie ? (
    // <MovieCard {...movie} onFavorite={onFavorite} />
    <SingleContent movie={movie} parentMediaType={MEDIA_TYPE.MOVIE} />
  ) : (
    <SingleContentSkeleton />
  );
};

export default FavouritesMoviesView;
