import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ROUTES } from '../../../@types';

const MediaTabs: React.FC = () => {
  const location = useLocation();

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={location.pathname}
      >
        <Tab
          label="Movies"
          component={Link}
          to={ROUTES.FAVOURITES_MOVIES}
          value={ROUTES.FAVOURITES_MOVIES}
        />
        <Tab
          label="TV Shows"
          component={Link}
          to={ROUTES.FAVOURITES_TV}
          value={ROUTES.FAVOURITES_TV}
        />
      </Tabs>
    </Paper>
  );
};

export default MediaTabs;
