import React from 'react';
import { useSnackbar } from 'notistack';
import { Trans } from 'react-i18next';

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
    enqueueSnackbar(
      // 'Cleared visited movies and tv shows'
      <Trans i18nKey="Snack.ClearedVisited" />,
      { variant: 'info' },
    );
  };

  return (
    <>
      <Grid item xs={12}>
        <Box justifyContent="space-between" display="flex">
          <Typography component="h2" variant="h4">
            {/* Visited Movies */}
            <Trans i18nKey="Heading.VisitedMovies" />
          </Typography>
          <Tooltip title={<Trans i18nKey="Tooltip.ClearVisited" />}>
            <span>
              <Button
                onClick={handleClearButton}
                style={{ marginLeft: 'auto' }}
                variant="outlined"
                disabled={!visitedMovieIds.length}
              >
                <Trans i18nKey="Btn.ClearHistory" />
              </Button>
            </span>
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
