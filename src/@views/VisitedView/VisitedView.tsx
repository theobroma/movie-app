import React, { useEffect } from 'react';
import { Link, Route, Switch, useLocation, Redirect } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import { moviesSelector } from '../../@store/movies/selectors';
import { getTrendingMoviesTC } from '../../@store/movies/slice';
// import { entitiesSelector } from '../../@store/entities/selectors';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/Skeletons/SingleContentSkeleton';
import { visitedMoviesIdsSelector } from '../../@store/user/selectors';
import { clearVisitedAC } from '../../@store/user/slice';
import { ROUTES } from '../../@types';

const VisitedView: React.FC = () => {
  const dispatch = useDispatch();
  const visitedMoviesIds = useSelector(visitedMoviesIdsSelector);
  // console.log(favouriteMoviesIds);
  // const entities = useSelector(entitiesSelector);
  // console.log(entities);
  const { ids, entities } = useSelector(moviesSelector);
  // console.log(entities[ids[0]]);
  const isLoading = false;

  const preparedMovies: any = [];
  visitedMoviesIds.forEach((movieId) => {
    const movie = entities[movieId];
    preparedMovies.push(movie);
  });

  useEffect(() => {
    dispatch(getTrendingMoviesTC({ page: 1 }));
  }, [dispatch]);

  const handleClearButton = () => {
    dispatch(clearVisitedAC());
  };

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {/* TABS */}
            <Grid item xs={12}>
              <DisabledTabs />
            </Grid>
            <Grid item xs={12}>
              <Box justifyContent="space-between" display="flex">
                <Typography component="h2" variant="h4">
                  Visited movies
                </Typography>
                <Button
                  onClick={handleClearButton}
                  style={{ marginLeft: 'auto' }}
                  variant="outlined"
                  // disabled={!movieIds.length}
                >
                  Clear history
                </Button>
              </Box>
            </Grid>
            {preparedMovies.length > 0 &&
              preparedMovies?.reverse().map((movie: any) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                  {isLoading ? (
                    <SingleContentSkeleton />
                  ) : (
                    <SingleContent movie={movie} />
                  )}
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

function DisabledTabs() {
  const location = useLocation();
  console.log(location);
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      {/* <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs> */}

      <Tabs value={location.pathname}>
        <Tab
          label="Movies"
          component={Link}
          to={ROUTES.VISITED_MOVIES}
          value={ROUTES.VISITED_MOVIES}
        />
        <Tab
          label="TV Shows"
          component={Link}
          to={ROUTES.VISITED_TV}
          value={ROUTES.VISITED_TV}
        />
      </Tabs>
    </Paper>
  );
}

export default VisitedView;
