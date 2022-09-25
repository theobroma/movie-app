import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMediaDetailsTC } from '../../@store/details/slice';
import { languageISOSelector } from '../../@store/ui/selectors';

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

// type Props = {};

const CastView = () => {
  //   const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: movieDetailsData,
    isLoading,
    trailers,
    credits,
  } = useAppSelector(movieDetailsSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;

  useEffect(() => {
    console.log('credits', credits);
  }, [credits]);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getMediaDetailsTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography component="h3" variant="h4">
          {/* Similar */}
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        <Grid container spacing={3} style={{ padding: 3 }}>
          <Grid item xs={12} sm={6} key={nanoid()}>
            Series Cast {!!credits?.cast && `${credits?.cast?.length}`}
            {credits?.cast?.map((person) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {person.name}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} key={nanoid()}>
            Series Crew {!!credits?.crew && credits?.crew?.length}
            {credits?.crew?.map((person) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {person.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CastView;
