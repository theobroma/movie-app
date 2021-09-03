import { makeStyles, Snackbar as MuiSnackbar } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import AppAlert from '../AppAlert';

export const SNACKBAR_AUTO_HIDE_DURATION = 5000; // Set to null if want to disable AutoHide feature by default

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  // severity?: Color;
  // variant: Variant;
  // elevation: number;
  // className: string;
  // onClose?: (event: React.SyntheticEvent) => void;
  autoHideDuration?: number;
  autoOpen?: any;
  className?: string;
  elevation?: any;
  message: string;
  severity?: any;
  variant?: any;
  onClose?: any;
}

const SnackBar: React.FC<Props> = ({
  autoHideDuration = SNACKBAR_AUTO_HIDE_DURATION,
  autoOpen = true,
  children,
  className,
  elevation, // AppAlert prop
  message,
  severity, // AppAlert prop
  variant, // AppAlert prop
  onClose, // AppAlert prop
  ...restOfProps
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(autoOpen);

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') return;

    setOpen(false);

    if (onClose && typeof onClose === 'function') {
      onClose(event, reason);
    }
  };

  return (
    <MuiSnackbar
      className={clsx(classes.root, className)}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      // TransitionComponent={SlideUpTransition} // Not working :(
      {...restOfProps}
    >
      <AppAlert
        onClose={handleClose}
        elevation={elevation}
        severity={severity}
        variant={variant}
      >
        {children || message}
      </AppAlert>
    </MuiSnackbar>
  );
};

export default SnackBar;
