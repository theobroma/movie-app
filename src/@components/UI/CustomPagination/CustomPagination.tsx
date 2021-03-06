import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import type { UsePaginationProps } from '@material-ui/lab';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(() => {
  return {
    ...createStyles({
      root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
    }),
  };
});

const CustomPagination: React.FC<UsePaginationProps> = ({
  onChange,
  count,
  page,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        page={page}
        onChange={onChange}
        count={count}
        color="primary"
        hideNextButton
        hidePrevButton
        {...rest}
      />
    </div>
  );
};

CustomPagination.whyDidYouRender = true;

export default CustomPagination;
