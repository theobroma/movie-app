import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { movieDetailsSelector } from '../../@store/details/selectors';
import { getMediaDetailsTC } from '../../@store/details/slice';
import { languageISOSelector } from '../../@store/ui/selectors';

interface RouteParams {
  mediaId: string;
  mediaType: string;
}

// type Props = {};

const CastView = () => {
  //   const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    data: movieDetailsData,
    isLoading,
    trailers,
    credits,
  } = useAppSelector(movieDetailsSelector);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);
  const { mediaId, mediaType } = useParams<keyof RouteParams>() as RouteParams;

  useEffect(() => {
    console.log('credits', credits);
  }, [credits]);

  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getMediaDetailsTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType, langISOCode]);

  return <div>CastView FC</div>;
};

export default CastView;
