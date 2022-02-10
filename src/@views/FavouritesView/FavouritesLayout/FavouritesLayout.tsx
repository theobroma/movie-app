import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MediaTabs from '../MediaTabs';

const FavouritesLayout = () => {
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

export default FavouritesLayout;
