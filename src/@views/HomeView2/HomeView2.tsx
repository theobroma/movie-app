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
import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/SingleContent/SingleContentSkeleton';
import {
  useTrendingMoviesQuery,
  useTrendingTVQuery,
} from '../../@store/trending/api';
import { languageSelector } from '../../@store/ui/selectors';
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
  const currentLanguage = useSelector(languageSelector);
  /* @ts-ignore */
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const {
    data: moviesData,
    // isLoading: moviesIsloading,
    isFetching: moviesIsFetching,
  } = useTrendingMoviesQuery(1);
  // Slice just first 6
  const trendingMovies = moviesData?.results.slice(0, 6);

  const {
    data: tvData,
    // isLoading: tvIsLoading,
    isFetching: tvIsFetching,
  } = useTrendingTVQuery(1);

  // Slice just first 6
  const trendingTV = tvData?.results.slice(0, 6);

  return (
    <Container maxWidth="lg">
      {/* i18n test */}
      {/* <Trans i18nKey="Home" /> */}
      {/* Movies */}
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box justifyContent="space-between" display="flex">
            <Link to={ROUTES.TRENDING_MOVIES} className={classes.link}>
              <Button variant="contained" color="primary">
                {/* Movies */}
                {/* @ts-ignore */}
                <Trans i18nKey="Movies" />
              </Button>
            </Link>
            <Link to={ROUTES.TRENDING_MOVIES} className={classes.link}>
              <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
                {/* More */}
                {/* @ts-ignore */}
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
                {/* @ts-ignore */}
                <Trans i18nKey="TVShows" />
              </Button>
            </Link>
            <Link to={ROUTES.TRENDING_TV} className={classes.link}>
              <Button variant="outlined" color="primary" endIcon={<LinkIcon />}>
                {/* More */}
                {/* @ts-ignore */}
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
