import { Box, Container, Grid } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';
import PersistentDrawerLeft from '../../@components/AppBar';
import CustomPagination from '../../@components/CustomPagination';
import Footer from '../../@components/Footer';
import SingleContent from '../../@components/SingleContent';
import SingleContentSkeleton from '../../@components/Skeletons/SingleContentSkeleton';
import { trendingSelector } from '../../@store/trending/selectors';
import { getTrendingAllTC, setPageAC } from '../../@store/trending/slice';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: { page, total_pages, results: trendingAllmovies },
    isLoading,
  } = useSelector(trendingSelector);

  // const [num, setNum] = useQueryParam('x', NumberParam);
  // const [foo, setFoo] = useQueryParam('foo', StringParam);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageValue: number,
  ) => {
    dispatch(setPageAC(pageValue));
    // Scroll to top when page changes
    window.scroll(0, 0);
  };

  useEffect(() => {
    dispatch(getTrendingAllTC({ page }));
  }, [dispatch, page]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        {/* <div>
          <h1>num is {num}</h1>
          <button type="button" onClick={() => setNum(Math.random())}>
            Change
          </button>
          <h1>foo is {foo}</h1>
          <button type="button" onClick={() => setFoo(`str${Math.random()}`)}>
            Change
          </button>
        </div> */}
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {trendingAllmovies?.map((movie) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isLoading ? (
                  <SingleContentSkeleton />
                ) : (
                  <SingleContent movie={movie} />
                )}
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <CustomPagination
                onChange={handlePageChange}
                count={total_pages}
                page={page}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
