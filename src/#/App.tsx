import React, { useEffect } from 'react';
import { Box, Container, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import Footer from '../@components/Footer';

export const AppContainer: React.FC = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserCoordinatesTC());
  // }, [dispatch]);

  return (
    <div className="App">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
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
      <Footer />
    </div>
  );
};
