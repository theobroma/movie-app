import React from 'react';
import { useSnackbar } from 'notistack';

import { Box, Button, Grid, Tooltip, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import SingleContentFetch from '../../../@components/SingleContent/SingleContentFetch';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { visitedMovieIdsSelector } from '../../../@store/user/selectors';
import { clearVisitedAC } from '../../../@store/user/slice';
import { MEDIA_TYPE } from '../../../@types';

const VisitedMovieView = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const visitedMovieIds = useAppSelector(visitedMovieIdsSelector);

  const handleClearButton = () => {
    dispatch(clearVisitedAC());
    enqueueSnackbar('Cleared visited movies and tv shows', { variant: 'info' });
  };

  return (
    <>
      <Grid item xs={12}>
        <Box justifyContent="space-between" display="flex">
          <Typography component="h2" variant="h4">
            Visited Movies
          </Typography>
          <Tooltip title="Clear visited movies and tv shows">
            <Button
              onClick={handleClearButton}
              style={{ marginLeft: 'auto' }}
              variant="outlined"
              disabled={!visitedMovieIds.length}
            >
              Clear history
            </Button>
          </Tooltip>
        </Box>
      </Grid>
      {visitedMovieIds.length > 0 &&
        visitedMovieIds?.reverse().map((movieId: string) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            <SingleContentFetch id={movieId} mediaType={MEDIA_TYPE.MOVIE} />
          </Grid>
        ))}
    </>
  );
};

export default VisitedMovieView;
