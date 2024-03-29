// https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useParams } from 'react-router-dom';

import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMediaDetailsTC } from '../../@store/details/slice';
import { languageISOSelector } from '../../@store/ui/selectors';
import { groupBy } from '../../@utils/groupBy';
import SmallHeader from '../CastView/SmallHeader';

import VideosFilter from './VideosFilter';

const useStyles = makeStyles(() =>
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
  const [filter, setFilter] = useState('Trailer');
  const {
    data: movieDetailsData,
    // isLoading,
    trailers,
    // credits,
  } = useAppSelector(movieDetailsSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;

  const groupedVideos = groupBy(trailers.results || [], 'type');
  const filteredVideos = groupedVideos[filter] || [];

  // useEffect(() => {
  //   console.log('filter', filter);
  // }, [filter]);

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
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12} md={3}>
              <VideosFilter
                groupedVideos={groupedVideos}
                handleClick={setFilter}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              {filteredVideos.map((video: any) => (
                <Box pb={3} key={nanoid()}>
                  <Paper elevation={3}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={4}>
                          <LiteYouTubeEmbed
                            id={video.key}
                            title="Trailer"
                            webp
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <Box p={3}>
                            <Box component="span" className={classes.title}>
                              {video.name}
                            </Box>
                            <br />
                            {video.type}
                            &nbsp;-&nbsp;
                            {/* {video.published_at} */}
                            {dayjs(video.published_at).format('DD MMMM YYYY')}
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default VideosView;
