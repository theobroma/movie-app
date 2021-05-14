import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
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

interface Props {
  // onChange: () => void;
  onChange: any;
  count: number;
  page: number;
}

const CustomPagination: React.FC<Props> = ({ onChange, count, page }) => {
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
      />
    </div>
  );
};

export default CustomPagination;
