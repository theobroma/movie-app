import { Box } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../@components/Footer';
import PersistentDrawerLeft from '../@components/AppBar';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const AppLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="HolyGrail">
      <Box>
        <PersistentDrawerLeft />
      </Box>
      <main className="HolyGrail-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
