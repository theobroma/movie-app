// https://stackoverflow.com/questions/69992370/why-react-router-v6-useparams-returns-object-with-properties-possibly-undefined
import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Trans } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Link as RouterLink, useParams } from 'react-router-dom';

import { Box, Container, Grid } from '@material-ui/core';
import MUILink from '@material-ui/core/Link';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import CastMedia from '../../@features/CastMedia';
import SimilarMedia from '../../@features/SimilarMedia';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
// import { useNonInitialEffect } from '../../@hooks/useNonInitialEffect';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMediaDetailsTC } from '../../@store/details/slice';
import { languageISOSelector } from '../../@store/ui/selectors';
import { favouriteMediaSelector } from '../../@store/user/selectors';
import {
  setMovieVisitedAC,
  toggleMovieFavoriteAC,
} from '../../@store/user/slice';

import MovieInfoSkeleton from './MovieInfo/MovieInfoSkeleton';
import MovieInfo from './MovieInfo';
import { useStyles } from './MoviesDetailsView.styles';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

const MoviesDetailsView = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    data: movieDetailsData,
    isLoading,
    trailers,
    credits,
  } = useAppSelector(movieDetailsSelector);
  const favouriteMedia = useAppSelector(favouriteMediaSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  const trailerKey = null ?? trailers?.results[0]?.key;
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;

  let isFavorite = false;
  if (mediaId && mediaType) {
    const index = favouriteMedia.findIndex(
      (element) => element.id === mediaId && element.mediaType === mediaType,
    );
    isFavorite = index !== -1;
  }

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getMediaDetailsTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  useEffect(() => {
    // TODO check if movie exist. for example /details/movie/96677
    if (mediaId) {
      dispatch(setMovieVisitedAC({ id: mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType]);

  // TODO problem if change router from one movie to another
  // useNonInitialEffect(() => {
  //   if (isFavorite) {
  //     enqueueSnackbar('Added to favourites', { variant: 'success' });
  //   } else {
  //     enqueueSnackbar('Removed from favourites', { variant: 'success' });
  //   }
  // }, [enqueueSnackbar, isFavorite]);

  const handleOnFavourite = () => {
    dispatch(toggleMovieFavoriteAC({ id: mediaId, mediaType }));
    if (!isFavorite) {
      // enqueueSnackbar('Added to favourites', { variant: 'success' });
      enqueueSnackbar(<Trans i18nKey="Snack.AddedToFavourites" />, {
        variant: 'success',
      });
    } else {
      // enqueueSnackbar('Removed from favourites', { variant: 'success' });
      enqueueSnackbar(<Trans i18nKey="Snack.RemovedFromFavourites" />, {
        variant: 'success',
      });
    }
  };

  const backdropTitle =
    movieDetailsData?.title ||
    movieDetailsData?.name ||
    movieDetailsData?.original_title ||
    movieDetailsData?.original_name ||
    'title';

  return (
    <div>
      <Box style={{ position: 'relative' }}>
        <div className={classes.backdrop}>
          {/* no backdrop test http://localhost:3000/details/movie/857983 */}
          {!!movieDetailsData?.backdrop_path && (
            <img
              className={classes.backdropImage}
              src={`https://image.tmdb.org/t/p/original/${movieDetailsData.backdrop_path}`}
              // alt="Backdrop of media"
              alt={`Backdrop of ${backdropTitle}`}
            />
          )}
        </div>
        <Container maxWidth="lg">
          <Box py={3}>
            {!isLoading ? (
              <MovieInfo
                movie={movieDetailsData}
                trailerKey={trailerKey}
                credits={credits}
                onFavourite={handleOnFavourite}
                isFavorite={isFavorite}
              />
            ) : (
              <MovieInfoSkeleton />
            )}
          </Box>
        </Container>
      </Box>
      {/* Cast */}
      <CastMedia />
      {/* no trailer test : http://localhost:3000/details/movie/112160 */}
      {!isLoading && !!trailerKey && (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              {/* offset */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box py={3}>
                <LiteYouTubeEmbed id={trailerKey} title="Trailer" webp />
              </Box>
            </Grid>
            <Grid item xs={12} md={3} className={classes.linkBox}>
              <MUILink
                component={RouterLink}
                to={`/details/${mediaType}/${mediaId}/videos`}
                className={classes.link}
                variant="body2"
              >
                {/* More */}
                Оглянути всі відео &nbsp;
                <ArrowRightAltIcon />
                {/* <Trans i18nKey="Btn.More" /> */}
              </MUILink>
            </Grid>
          </Grid>
        </Container>
      )}
      {/* Similar */}
      {!!mediaId && !!mediaType && (
        <SimilarMedia mediaId={mediaId} mediaType={mediaType} />
      )}
    </div>
  );
};

export default MoviesDetailsView;
