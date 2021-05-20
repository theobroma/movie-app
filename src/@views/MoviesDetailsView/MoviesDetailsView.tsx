import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { movieDetailsSelector } from '../../@store/movies/selectors';
import { getMovieDetailsTC } from '../../@store/movies/slice';
import MovieInfo from '../../@components/MovieInfo';
import MovieInfoSkeleton from '../../@components/Skeletons/MovieInfoSkeleton';
import { useStyles } from './MoviesDetailsView.styles';

interface ParamTypes {
  id?: string | undefined;
  mediaType?: string | undefined;
}

const MoviesDetailsView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data: movieDetailsData, isLoading, trailers } = useSelector(
    movieDetailsSelector,
  );
  const trailer = null ?? trailers?.results[0]?.key;
  const { id, mediaType } = useParams<ParamTypes>();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsTC({ movieID: id, mediaType }));
    }
  }, [dispatch, id, mediaType]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <main style={{ position: 'relative' }}>
          <div className={classes.backdrop}>
            {movieDetailsData && (
              <img
                className={classes.backdropImage}
                src={`https://image.tmdb.org/t/p/original/${movieDetailsData.backdrop_path}`}
                alt={`Backdrop of ${movieDetailsData.title}`}
              />
            )}
          </div>
          <Container maxWidth="lg">
            {!isLoading ? (
              <MovieInfo movie={movieDetailsData} trailer={trailer} />
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
