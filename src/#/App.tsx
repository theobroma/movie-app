import React, { useEffect } from 'react';
import { Box, Container, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import Footer from '../@components/Footer';
import { getTrendingMoviesTC } from '../@store/movies/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          {/* {picturesLoading && <LoadingPage />} */}
          {/* <Box mb={2}>
          <Paper elevation={3}>
            <Search />
          </Paper>
        </Box>
        <Box mb={2}>
          <Paper elevation={3}>
            <CurrentWeather />
          </Paper>
        </Box>
        <Box mb={2}>
          <Paper elevation={3}>
            <Forecast />
          </Paper>
        </Box> */}
          container
        </Container>
      </div>
      <Footer />
    </div>
  );
};
