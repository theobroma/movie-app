import { Box, Container, Grid, Typography } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../../@components/AppBar';
import Footer from '../../../@components/Footer';
import SingleContent from '../../../@components/SingleContent';
import SingleContentSkeleton from '../../../@components/Skeletons/SingleContentSkeleton';
import { entitiesTVSelector } from '../../../@store/entities/selectors';
import { getMediaDetailsTC } from '../../../@store/entities/slice';
import { favouriteTVIdsSelector } from '../../../@store/user/selectors';
import { MEDIA_TYPE } from '../../../@types';
import MediaTabs from '../MediaTabs';

const FavouritesTVView: React.FC = () => {
  const favouriteTVIds = useSelector(favouriteTVIdsSelector);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <PersistentDrawerLeft />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            {/* TABS */}
            <Grid item xs={12}>
              <MediaTabs />
            </Grid>
            <Grid item xs={12}>
              <Box justifyContent="space-between" display="flex">
                <Typography component="h2" variant="h4">
                  Favourites TV Shows
                </Typography>
              </Box>
            </Grid>
            {favouriteTVIds.length > 0 &&
              favouriteTVIds?.reverse().map((movieId: any) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                  {/* {isLoading ? (
                    <SingleContentSkeleton />
                  ) : (
                    <SingleContent movie={movie} />
                  )} */}
                  <MovieCardFetch id={movieId} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const MovieCardFetch: React.FC<any> = ({
  id,
  // movie,
  ready,
  fetch,
  onFavorite,
  mediaType,
}) => {
  const dispatch = useDispatch();
  const { ids, entities } = useSelector(entitiesTVSelector);
  // console.log(entities[ids[0]]);

  useEffect(() => {
    dispatch(getMediaDetailsTC({ movieID: id, mediaType: MEDIA_TYPE.TV }));
  }, [dispatch, id, mediaType]);

  let movie = {} as any;
  const index = ids.indexOf(id);
  const isExist = index !== -1;
  if (isExist) {
    movie = entities[id];
  }

  return isExist ? (
    // <MovieCard {...movie} onFavorite={onFavorite} />
    <SingleContent movie={movie} parentMediaType={MEDIA_TYPE.TV} />
  ) : (
    <SingleContentSkeleton />
  );
};

export default FavouritesTVView;
