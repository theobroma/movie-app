import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { Pagination, UsePaginationProps } from '@material-ui/lab';

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

export default CustomPagination;
