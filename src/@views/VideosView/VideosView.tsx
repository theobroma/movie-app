// https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useParams } from 'react-router-dom';

import type { Theme } from '@material-ui/core';
import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMediaDetailsTC } from '../../@store/details/slice';
import { languageISOSelector } from '../../@store/ui/selectors';
import SmallHeader from '../CastView/SmallHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      fontSize: '1.4em',
      marginBottom: '18px',
    },
    count: {
      fontWeight: 400,
      opacity: 0.6,
    },
    departmentTitle: {
      fontWeight: 600,
      fontSize: '1.2em',
      marginBottom: '8px',
    },
  }),
);

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

// type Props = {};

const VideosView = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: movieDetailsData,
    // isLoading,
    trailers,
    // credits,
  } = useAppSelector(movieDetailsSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;

  // useEffect(() => {
  //   console.log('credits', credits);
  // }, [credits]);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getMediaDetailsTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  return (
    <>
      <SmallHeader data={movieDetailsData} />
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography component="h3" variant="h4">
            Videos
            {/* <Trans i18nKey="Heading.Similar" /> */}
          </Typography>
          <Grid container spacing={3} style={{ padding: 3 }}>
            {trailers?.results?.map((video) => (
              <Grid item xs={12}>
                <Box py={3} key={nanoid()}>
                  <Grid container spacing={3} style={{ padding: 3 }}>
                    <Grid item xs={4}>
                      <LiteYouTubeEmbed id={video.key} title="Trailer" webp />
                    </Grid>
                    <Grid item xs={8}>
                      {video.name}
                      &nbsp;-&nbsp;
                      {video.official}
                      &nbsp;-&nbsp;
                      {/* {video.published_at} */}
                      {dayjs(video.published_at).format('YYYY')}
                      &nbsp;-&nbsp;
                      {video.type}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VideosView;
