import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import SingleContentFetch from '../../../@components/SingleContent/SingleContentFetch';
import { useAppSelector } from '../../../@store/configureStore';
import { favouriteTVIdsSelector } from '../../../@store/user/selectors';
import { MEDIA_TYPE } from '../../../@types';

const FavouritesTVView = () => {
  const favouriteTVIds = useAppSelector(favouriteTVIdsSelector);

  return (
    <>
      <Grid item xs={12}>
        <Box justifyContent="space-between" display="flex">
          <Typography component="h2" variant="h4">
            Favourites TV Shows
          </Typography>
        </Box>
      </Grid>
      {favouriteTVIds.length > 0 &&
        favouriteTVIds?.reverse().map((TVId: string) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
            <SingleContentFetch id={TVId} mediaType={MEDIA_TYPE.TV} />
          </Grid>
        ))}
    </>
  );
};

export default FavouritesTVView;
