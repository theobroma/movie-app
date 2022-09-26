// https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
import React, { useEffect } from 'react';
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
import { groupBy } from '../../@utils/groupBy';

import SmallHeader from './SmallHeader/SmallHeader';
import CastCard from './CastCard';

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

const CastView = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: movieDetailsData,
    isLoading,
    // trailers,
    credits,
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

  const groupedCrew = groupBy(credits?.crew || [], 'department');
  // console.log('groupedCrew :>> ', groupedCrew);

  const CrewBlock = Object.keys(groupedCrew).map((key) => {
    return (
      <Box mb={5} key={nanoid()}>
        <Typography
          className={classes.departmentTitle}
          component="h3"
          variant="h4"
        >
          {groupedCrew[key][0].department}
          {/* <Trans i18nKey="Heading.Similar" /> */}
        </Typography>
        {groupedCrew[key].map((person: any) => (
          <Box mb={3} key={nanoid()}>
            <CastCard person={person} />
          </Box>
        ))}
      </Box>
    );
  });

  return (
    <>
      <SmallHeader data={movieDetailsData} />
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography component="h3" variant="h4">
            {/* Similar */}
            {/* <Trans i18nKey="Heading.Similar" /> */}
          </Typography>
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12} sm={6} key={nanoid()}>
              <Typography className={classes.title} component="h3" variant="h4">
                Series Cast &nbsp;
                {!!credits?.cast && (
                  <span className={classes.count}>{credits?.cast?.length}</span>
                )}
                {/* <Trans i18nKey="Heading.Similar" /> */}
              </Typography>
              {credits?.cast?.map((person) => (
                <Box mb={3} key={nanoid()}>
                  <CastCard person={person} />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} key={nanoid()}>
              <Typography className={classes.title} component="h3" variant="h4">
                Series Crew &nbsp;
                {!!credits?.crew && (
                  <span className={classes.count}>{credits?.crew?.length}</span>
                )}
                {/* <Trans i18nKey="Heading.Similar" /> */}
              </Typography>
              {/* {credits?.crew?.map((person) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                <CastCard person={person} />
              </Grid>
            ))} */}
              {CrewBlock}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CastView;
