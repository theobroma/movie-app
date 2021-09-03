import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from 'nanoid';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import MovieInfo from '../../@components/MovieInfo';
import SingleContent from '../../@components/SingleContent';
import MovieInfoSkeleton from '../../@components/Skeletons/MovieInfoSkeleton';
import SingleContentSkeleton from '../../@components/Skeletons/SingleContentSkeleton';
import EmptyBlock from '../../@components/UI/EmptyBlock';
// import { useNonInitialEffect } from '../../@hooks/useNonInitialEffect';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMovieDetailsTC } from '../../@store/details/slice';
import { favouriteMediaSelector } from '../../@store/user/selectors';
import {
  setMovieVisitedAC,
  toggleMovieFavoriteAC,
} from '../../@store/user/slice';
import { useStyles } from './MoviesDetailsView.styles';

interface ParamTypes {
  id?: string | undefined;
  mediaType?: string | undefined;
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
    similar,
  } = useSelector(movieDetailsSelector);
  const favouriteMedia = useSelector(favouriteMediaSelector);

  const trailer = null ?? trailers?.results[0]?.key;
  const { id, mediaType } = useParams<ParamTypes>();

  let isFavorite = false;
  if (id && mediaType) {
    const index = favouriteMedia.findIndex(
      (element) => element.id === id && element.mediaType === mediaType,
    );
    isFavorite = index !== -1;
  }

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsTC({ movieID: id, mediaType }));
    }
  }, [dispatch, id, mediaType]);

  useEffect(() => {
    // TODO: check if movie exist. for example /details/movie/96677
    if (id) {
      dispatch(setMovieVisitedAC({ id, mediaType }));
    }
  }, [dispatch, id, mediaType]);

  // TODO: problem if change router from one movie to another
  // useNonInitialEffect(() => {
  //   if (isFavorite) {
  //     enqueueSnackbar('Added to favourites', { variant: 'success' });
  //   } else {
  //     enqueueSnackbar('Removed from favourites', { variant: 'success' });
  //   }
  // }, [enqueueSnackbar, isFavorite]);

  const handleOnFavourite = () => {
    dispatch(toggleMovieFavoriteAC({ id, mediaType }));
    if (!isFavorite) {
      enqueueSnackbar('Added to favourites', { variant: 'success' });
    } else {
      enqueueSnackbar('Removed from favourites', { variant: 'success' });
    }
  };

  const MOVIES_PER_LIST = 6;
  const similarMovies = similar.results.slice(0, MOVIES_PER_LIST);

  const SimilarMoviesBlock = (
    <>
      {similarMovies?.map((movie: any) => (
        <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
          {isLoading ? (
            <SingleContentSkeleton />
          ) : (
            <SingleContent movie={movie} parentMediaType={mediaType} />
          )}
        </Grid>
      ))}
    </>
  );

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <main>
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
              {!isLoading ? (
                <MovieInfo
                  id={id}
                  movie={movieDetailsData}
                  trailer={trailer}
                  credits={credits}
                  onFavourite={handleOnFavourite}
                  isFavorite={isFavorite}
                />
              ) : (
                <MovieInfoSkeleton />
              )}
            </Container>
          </Box>
          {/* Similar */}
          <Container maxWidth="lg">
            <Box py={4}>
              {!isLoading && (
                <>
                  <Typography component="h3" variant="h4">
                    Similar movies
                  </Typography>
                  <Grid container spacing={3} style={{ padding: 3 }}>
                    {similarMovies.length > 0 ? (
                      SimilarMoviesBlock
                    ) : (
                      <Grid item xs={12}>
                        <EmptyBlock>There is no data</EmptyBlock>
                      </Grid>
                    )}
                  </Grid>
                </>
              )}
            </Box>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
