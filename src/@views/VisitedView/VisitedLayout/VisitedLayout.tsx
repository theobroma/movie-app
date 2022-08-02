import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Grid } from '@material-ui/core';

import MediaTabs from '../MediaTabs';

const VisitedLayout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        {/* TABS */}
        <Grid item xs={12}>
          <MediaTabs />
        </Grid>
        {/* CONTENT */}
        <Outlet />
      </Grid>
    </Container>
  );
};

export default VisitedLayout;
