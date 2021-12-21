import { Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          // to={ROUTES.VISITED_MOVIES}
          // value={ROUTES.VISITED_MOVIES}
        />
        <Tab
          label="TV Shows"
          component={Link}
          to="tv"
          value="tv"
          // to={ROUTES.VISITED_TV}
          // value={ROUTES.VISITED_TV}
        />
      </Tabs>
    </Paper>
  );
};

export default MediaTabs;
