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

interface Props {
  match: any;
}

const MoviesDetailsView: React.FC<Props> = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(movieDetailsSelector);
  const { id } = useParams<any>();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsTC({ movieID: id }));
    }
  }, [dispatch, id]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <main style={{ position: 'relative' }}>
          <div className={classes.backdrop}>
            <img
              className={classes.backdropImage}
              src={`https://image.tmdb.org/t/p/original/${movieDetailsData.backdrop_path}`}
              alt={`Backdrop of ${movieDetailsData.title}`}
            />
          </div>
          <Container maxWidth="lg">
            <MovieInfo movie={movieDetailsData} />
            <Box my={5}>box</Box>
            <MovieInfoSkeleton />
            <Box my={5}>box</Box>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
