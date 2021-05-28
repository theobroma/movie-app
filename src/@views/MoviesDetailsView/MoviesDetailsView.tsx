import { Box, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import MovieInfo from '../../@components/MovieInfo';
import MovieInfoSkeleton from '../../@components/Skeletons/MovieInfoSkeleton';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMovieDetailsTC } from '../../@store/details/slice';
import { setMovieFavoriteAC, setMovieVisitedAC } from '../../@store/user/slice';
import { useStyles } from './MoviesDetailsView.styles';

interface ParamTypes {
  id?: string | undefined;
  mediaType?: string | undefined;
}

const MoviesDetailsView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    data: movieDetailsData,
    isLoading,
    trailers,
    credits,
  } = useSelector(movieDetailsSelector);

  const trailer = null ?? trailers?.results[0]?.key;
  const { id, mediaType } = useParams<ParamTypes>();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsTC({ movieID: id, mediaType }));
    }
  }, [dispatch, id, mediaType]);

  useEffect(() => {
    if (id) {
      dispatch(setMovieVisitedAC(id));
    }
  }, [dispatch, id]);

  const handleOnFavourite = () => {
    dispatch(setMovieFavoriteAC(id));
  };

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <main style={{ position: 'relative' }}>
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
              />
            ) : (
              <MovieInfoSkeleton />
            )}
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
