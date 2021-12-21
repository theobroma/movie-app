import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MediaTabs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const pathValue = pathArr.slice(-1)[0]; // last

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={pathValue}
        // value={location.pathname}
      >
        <Tab
          label="Movies"
          component={Link}
          to="movies"
          value="movies"
          // to={ROUTES.FAVOURITES_MOVIES}
          // value={ROUTES.FAVOURITES_MOVIES}
        />
        <Tab
          label="TV Shows"
          component={Link}
          to="tv"
          value="tv"
          // to={ROUTES.FAVOURITES_TV}
          // value={ROUTES.FAVOURITES_TV}
        />
      </Tabs>
    </Paper>
  );
};

export default MediaTabs;
