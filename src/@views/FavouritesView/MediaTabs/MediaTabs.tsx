// https://stackoverflow.com/a/61839489/3988363
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Paper, Tab, Tabs } from '@material-ui/core';

const MediaTabs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const pathValue = pathArr[pathArr.length - 1];

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
