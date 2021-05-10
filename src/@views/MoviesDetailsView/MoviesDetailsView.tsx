import React, { useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import MoviesCard from '../../@components/MoviesCard';
import {
  movieDetailsSelector,
  moviesSelector,
} from '../../@store/movies/selectors';
import {
  getMovieDetailsTC,
  getTrendingMoviesTC,
} from '../../@store/movies/slice';
import MovieInfo from '../../@components/MovieInfo';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
    }),
  };
});

interface Props {
  match: any;
}

const MoviesDetailsView: React.FC<Props> = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieDetailsData = useSelector(movieDetailsSelector);
  console.log(movieDetailsData);
  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(getMovieDetailsTC({ movieID: id }));
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
