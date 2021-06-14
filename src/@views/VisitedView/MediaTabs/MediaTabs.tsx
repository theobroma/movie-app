import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ROUTES } from '../../../@types';

const MediaTabs: React.FC = () => {
  const location = useLocation();

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
};

export default MediaTabs;
