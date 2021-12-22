import { Box } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../@components/Footer';
import PersistentDrawerLeft from '../@components/AppBar';

export const AppLayout = () => {
  return (
    <div className="HolyGrail">
      <Box>
        <PersistentDrawerLeft />
      </Box>
      <main className="HolyGrail-content">
        <Outlet />
      </main>
      {/* Test WDYR */}
      {/* <ComponentWithProblem /> */}
      <Footer />
    </div>
  );
};
