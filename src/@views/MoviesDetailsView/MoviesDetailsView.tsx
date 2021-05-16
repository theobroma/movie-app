import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { movieDetailsSelector } from '../../@store/movies/selectors';
import { getMovieDetailsTC } from '../../@store/movies/slice';
import MovieInfo from '../../@components/MovieInfo';

interface Props {
  match: any;
}

const MoviesDetailsView: React.FC<Props> = ({ match }) => {
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
        <MovieInfo movie={movieDetailsData} />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
