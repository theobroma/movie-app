import React from 'react';
import { SnackbarProvider as NotiStackSnackbarProvider } from 'notistack';

export const SNACKBAR_MAX_COUNT = 5;

const SnackBarProvider: React.FC = ({ children }) => {
  return (
    <NotiStackSnackbarProvider
      maxSnack={SNACKBAR_MAX_COUNT}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </NotiStackSnackbarProvider>
  );
};

export default SnackBarProvider;
