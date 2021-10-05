import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import SingleContentFetch from '../../../@components/SingleContentFetch';
import { favouriteMovieIdsSelector } from '../../../@store/user/selectors';
import { MEDIA_TYPE } from '../../../@types';
import MediaTabs from '../MediaTabs';

const FavouritesMoviesView: React.FC = () => {
  const favouriteMovieIds = useSelector(favouriteMovieIdsSelector);

  return (
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
          </Box>
        </Grid>
        {favouriteMovieIds.length > 0 &&
          favouriteMovieIds?.reverse().map((movieId: string) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
              <SingleContentFetch id={movieId} mediaType={MEDIA_TYPE.MOVIE} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FavouritesMoviesView;
