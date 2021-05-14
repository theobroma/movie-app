import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { moviesSelector } from '../../@store/movies/selectors';
import { getTrendingMoviesTC, setPageAC } from '../../@store/movies/slice';
import SingleContent from '../../@components/SingleContent';
import CustomPagination from '../../@components/CustomPagination';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  const { page, total_pages, results: movies } = useSelector(
    moviesSelector,
  ).data;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(setPageAC(value));
    // Scroll to top when page changes
    window.scroll(0, 0);
  };

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page }));
  }, [dispatch, page]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {movies?.map((movie) => (
              <Grid item xs={12} sm={4} md={2} key={movie.id}>
                <SingleContent movie={movie} media_type="" />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <CustomPagination
                onChange={handlePageChange}
                count={total_pages}
                page={page}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
