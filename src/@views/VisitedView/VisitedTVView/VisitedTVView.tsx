import { Box, Button, Grid, Tooltip, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import SingleContentFetch from '../../../@components/SingleContent/SingleContentFetch';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import { visitedTVIdsSelector } from '../../../@store/user/selectors';
import { clearVisitedAC } from '../../../@store/user/slice';
import { MEDIA_TYPE } from '../../../@types';

const VisitedTVView = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const visitedTVIds = useAppSelector(visitedTVIdsSelector);

  const handleClearButton = () => {
    dispatch(clearVisitedAC());
    enqueueSnackbar('Cleared visited movies and tv shows', { variant: 'info' });
  };

  return (
    <>
      <Grid item xs={12}>
        <Box justifyContent="space-between" display="flex">
          <Typography component="h2" variant="h4">
            Visited TV Shows
          </Typography>
          <Tooltip title="Clear visited movies and tv shows">
            <Button
              onClick={handleClearButton}
              style={{ marginLeft: 'auto' }}
              variant="outlined"
              disabled={!visitedTVIds.length}
            >
              Clear history
            </Button>
          </Tooltip>
        </Box>
      </Grid>
      {visitedTVIds.length > 0 &&
        visitedTVIds?.reverse().map((TVId: string) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            <SingleContentFetch id={TVId} mediaType={MEDIA_TYPE.TV} />
          </Grid>
        ))}
    </>
  );
};

export default VisitedTVView;
