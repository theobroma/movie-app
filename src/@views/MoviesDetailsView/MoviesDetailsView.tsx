// https://stackoverflow.com/questions/69992370/why-react-router-v6-useparams-returns-object-with-properties-possibly-undefined
import { Box, Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieInfo from '../../@components/MovieInfo';
import MovieInfoSkeleton from '../../@components/MovieInfo/MovieInfoSkeleton';
import SimilarMedia from '../../@features/SimilarMedia';
// import { useNonInitialEffect } from '../../@hooks/useNonInitialEffect';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMovieDetailsTC } from '../../@store/details/slice';
import { favouriteMediaSelector } from '../../@store/user/selectors';
import {
  setMovieVisitedAC,
  toggleMovieFavoriteAC,
} from '../../@store/user/slice';
import { useStyles } from './MoviesDetailsView.styles';

interface MyParams {
  mediaId: string;
  mediaType: string;
}

const MoviesDetailsView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    data: movieDetailsData,
    isLoading,
    trailers,
    credits,
  } = useSelector(movieDetailsSelector);
  const favouriteMedia = useSelector(favouriteMediaSelector);

  const trailer = null ?? trailers?.results[0]?.key;
  const { mediaId, mediaType } = useParams<keyof MyParams>() as MyParams;

  let isFavorite = false;
  if (mediaId && mediaType) {
    const index = favouriteMedia.findIndex(
      (element) => element.id === mediaId && element.mediaType === mediaType,
    );
    isFavorite = index !== -1;
  }

  useEffect(() => {
    if (mediaId) {
      dispatch(getMovieDetailsTC({ movieID: mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType]);

  useEffect(() => {
    // TODO: check if movie exist. for example /details/movie/96677
    if (mediaId) {
      dispatch(setMovieVisitedAC({ id: mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType]);

  // TODO: problem if change router from one movie to another
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
      enqueueSnackbar('Added to favourites', { variant: 'success' });
    } else {
      enqueueSnackbar('Removed from favourites', { variant: 'success' });
    }
  };

  return (
    <div>
      <Box style={{ position: 'relative' }}>
        <div className={classes.backdrop}>
          {movieDetailsData?.backdrop_path && (
            <img
              className={classes.backdropImage}
              src={`https://image.tmdb.org/t/p/original/${movieDetailsData.backdrop_path}`}
              alt={`Backdrop of ${movieDetailsData.title}`}
            />
          )}
        </div>
        <Container maxWidth="lg">
          <Box py={3}>
            {!isLoading ? (
              <MovieInfo
                id={mediaId}
                movie={movieDetailsData}
                trailer={trailer}
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
      {/* Similar */}
      {mediaId && mediaType && (
        <SimilarMedia mediaId={mediaId} mediaType={mediaType} />
      )}
    </div>
  );
};

export default MoviesDetailsView;
