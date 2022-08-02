import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { nanoid } from '@reduxjs/toolkit';

import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/SingleContent/SingleContentSkeleton';
import { useAppSelector } from '../../@store/configureStore';
import {
  useTrendingMoviesQuery,
  useTrendingTVQuery,
} from '../../@store/trending/api';
import { languageISOSelector } from '../../@store/ui/selectors';
import { ROUTES } from '../../@types';

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: 'none',
    },
  }),
);

const HomeView2 = () => {
  const classes = useStyles();
  const langISOCode = useAppSelector(languageISOSelector);

  const {
    data: moviesData,
    // isLoading: moviesIsloading,
    isFetching: moviesIsFetching,
  } = useTrendingMoviesQuery({ page: 1, isoCode: langISOCode });
  // Slice just first 6
  const trendingMovies = moviesData?.results.slice(0, 6);

  const {
    data: tvData,
    // isLoading: tvIsLoading,
    isFetching: tvIsFetching,
  } = useTrendingTVQuery({ page: 1, isoCode: langISOCode });

  // Slice just first 6
  const trendingTV = tvData?.results.slice(0, 6);

  return (
    <Container maxWidth="lg">
      {/* Movies */}
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box justifyContent="space-between" display="flex">
            <Link to={ROUTES.TRENDING_MOVIES} className={classes.link}>
              <Button variant="contained" color="primary">
                {/* Movies */}
                <Trans i18nKey="Movies" />
              </Button>
            </Link>
            <Link to={ROUTES.TRENDING_MOVIES} className={classes.link}>
              <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
                {/* More */}
                <Trans i18nKey="btn.more" />
              </Button>
            </Link>
          </Box>
        </Grid>
        {trendingMovies?.map((movie) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            {moviesIsFetching ? (
              <SingleContentSkeleton />
            ) : (
              <SingleContent movie={movie} />
            )}
          </Grid>
        ))}
      </Grid>
      <Box py={1} />
      {/* TV */}
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box justifyContent="space-between" display="flex">
            <Link to={ROUTES.TRENDING_TV} className={classes.link}>
              <Button variant="contained" color="primary">
                {/* TV Shows */}
                <Trans i18nKey="TVShows" />
              </Button>
            </Link>
            <Link to={ROUTES.TRENDING_TV} className={classes.link}>
              <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
                {/* More */}
                <Trans i18nKey="btn.more" />
              </Button>
            </Link>
          </Box>
        </Grid>
        {trendingTV?.map((movie) => (
          <Grid item xs={6} sm={4} md={4} lg={2} key={nanoid()}>
            {tvIsFetching ? (
              <SingleContentSkeleton />
            ) : (
              <SingleContent movie={movie} />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeView2;
