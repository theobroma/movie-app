import { Box } from '@material-ui/core';
import React from 'react';
import Footer from '../@components/Footer';
import PersistentDrawerLeft from '../@components/AppBar';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="HolyGrail">
      <Box>
        <PersistentDrawerLeft />
      </Box>
      <main className="HolyGrail-content">{children}</main>
      <Footer />
    </div>
  );
};
