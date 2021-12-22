import { Box } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../@components/Footer';
import AppBar from '../@components/AppBar';
import PersistentDrawerLeft from '../@components/AppBar/PersistentDrawerLeft/PersistentDrawerLeft';
import ComponentWithProblem from '../@components/WDYR/ComponentWithProblem';

// export const AppLayout = () => {
//   return (
//     <div className="HolyGrail">
//       <Box>
//         <AppBar />
//       </Box>
//       <main className="HolyGrail-content">
//         <Outlet />
//       </main>
//       {/* Test WDYR */}
//       {/* <ComponentWithProblem /> */}
//       <Footer />
//     </div>
//   );
// };

export const AppLayout = () => {
  return (
    <div className="HolyGrail">
      <PersistentDrawerLeft>
        <Outlet />
      </PersistentDrawerLeft>
      {/* Test WDYR */}
      {/* <ComponentWithProblem /> */}
      <Footer />
    </div>
  );
};
