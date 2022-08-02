import React, { useEffect } from 'react';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/SingleContent/SingleContentSkeleton';
import AppAlert from '../../@components/UI/AppAlert';
import EmptyBlock from '../../@components/UI/EmptyBlock';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { languageISOSelector } from '../../@store/ui/selectors';
import type { SimilarMediaAllResponseType } from '../../@types';

import { similarMediaSelector } from './store/selectors';
import { getSimilarMediaTC } from './store/slice';

interface Props {
  mediaId: string;
  mediaType: string;
}

const SimilarMedia = ({ mediaId, mediaType }: Props) => {
  const dispatch = useAppDispatch();
  const {
    data: { results },
    error,
    isError,
    isFetching,
    isSuccess,
  } = useAppSelector(similarMediaSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getSimilarMediaTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  const ITEMS_TO_SHOW = 6;
  const resultsToShow =
    results?.slice(0, ITEMS_TO_SHOW) ||
    (Array(ITEMS_TO_SHOW).fill(
      'none',
    ) as SimilarMediaAllResponseType['results']);

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          Similar
        </Typography>
        <Grid container spacing={3} style={{ padding: 3 }}>
          {/* results */}
          {!isError &&
            resultsToShow?.map((media) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isFetching ? (
                  <SingleContentSkeleton />
                ) : (
                  <SingleContent movie={media} parentMediaType={mediaType} />
                )}
              </Grid>
            ))}
          {/* no results */}
          {isSuccess && resultsToShow.length === 0 && (
            <Grid item xs={12}>
              <EmptyBlock>There is no data</EmptyBlock>
            </Grid>
          )}
          {/* error */}
          {isError && (
            <Grid item xs={12}>
              <AppAlert variant="standard" severity="error">
                {error}
              </AppAlert>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimilarMedia;
