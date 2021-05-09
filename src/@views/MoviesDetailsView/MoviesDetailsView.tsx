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
import MoviesDetails from '../../@components/MoviesDetails';

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
        <Container maxWidth="lg">
          {/* <Grid container spacing={3} style={{ padding: 3 }}>
            {movies?.map((movie) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={movie.id}>
                <MoviesCard movies={movie} />
              </Grid>
            ))}
          </Grid> */}
          <MoviesDetails />
          <br />
          {match.params.id}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesDetailsView;
