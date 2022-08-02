import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

/**
 * Note: You can change these const to control default appearance of the AppAlert component
 */
const APP_ALERT_SEVERITY = 'error'; // 'error' | 'info'| 'success' | 'warning'
const APP_ALERT_VARIANT = 'filled'; // 'filled' | 'outlined' | 'standard'
// const APP_ALERT_ELEVATION = 5;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

type Color = 'success' | 'info' | 'warning' | 'error';
type Variant = 'standard' | 'filled' | 'outlined';

interface Props {
  severity?: Color;
  variant: Variant;
  // elevation?: number;
  className?: string;
  // onClose?: (event: React.SyntheticEvent) => void;
  onClose?: any;
  children: React.ReactNode;
}

const AppAlert = ({
  severity = APP_ALERT_SEVERITY,
  variant = APP_ALERT_VARIANT,
  // elevation = APP_ALERT_ELEVATION,
  className,
  onClose,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <MuiAlert
      className={clsx(classes.root, className)}
      // elevation={elevation}
      severity={severity}
      variant={variant}
      onClose={onClose}
      {...props}
    />
  );
};

export default AppAlert;
