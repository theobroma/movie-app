import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { nanoid } from 'nanoid';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersistentDrawerLeft from '../../../@components/AppBar';
import Footer from '../../../@components/Footer';
import SingleContentFetch from '../../../@components/SingleContentFetch';
import { visitedTVIdsSelector } from '../../../@store/user/selectors';
import { clearVisitedAC } from '../../../@store/user/slice';
import { MEDIA_TYPE } from '../../../@types';
import MediaTabs from '../MediaTabs';

const VisitedTVView: React.FC = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const visitedTVIds = useSelector(visitedTVIdsSelector);

  const handleClearButton = () => {
    dispatch(clearVisitedAC());
    enqueueSnackbar('Cleared visited movies and tv shows', { variant: 'info' });
  };

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
                  Visited TV Shows
                </Typography>
                <Tooltip title="Clear visited movies and tv shows">
                  <Button
                    onClick={handleClearButton}
                    style={{ marginLeft: 'auto' }}
                    variant="outlined"
                    disabled={!visitedTVIds.length}
                  >
                    Clear history
                  </Button>
                </Tooltip>
              </Box>
            </Grid>
            {visitedTVIds.length > 0 &&
              visitedTVIds?.reverse().map((TVId: string) => (
                <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                  <SingleContentFetch id={TVId} mediaType={MEDIA_TYPE.TV} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default VisitedTVView;
