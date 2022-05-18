import { Box, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import SingleContentFetch from '../../../@components/SingleContent/SingleContentFetch';
import { favouriteMovieIdsSelector } from '../../../@store/user/selectors';
import { MEDIA_TYPE } from '../../../@types';

const FavouritesMoviesView = () => {
  const favouriteMovieIds = useSelector(favouriteMovieIdsSelector);

  return (
    <>
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
    </>
  );
};

export default FavouritesMoviesView;
