import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  entitiesMoviesSelector,
  entitiesTVSelector,
} from '../../@store/entities/selectors';
import { getMediaDetailsTC } from '../../@store/entities/slice';
import { MEDIA_TYPE } from '../../@types';
import SingleContent from '../SingleContent';
import SingleContentSkeleton from '../Skeletons/SingleContentSkeleton';

interface Props {
  id?: string | undefined;
  mediaType?: string | undefined;
}

const SingleContentFetch: React.FC<Props> = ({ id, mediaType }) => {
  const dispatch = useDispatch();
  const entitiesSelector =
    mediaType === MEDIA_TYPE.TV ? entitiesTVSelector : entitiesMoviesSelector;
  const { ids, entities } = useSelector(entitiesSelector);
  // console.log(entities[ids[0]]);

  useEffect(() => {
    dispatch(getMediaDetailsTC({ movieID: id, mediaType }));
  }, [dispatch, id, mediaType]);

  let movie = {} as any;
  const index = ids.indexOf(id);
  const isExist = index !== -1;
  if (isExist && id) {
    movie = entities[id];
  }

  return isExist ? (
    <SingleContent movie={movie} parentMediaType={mediaType} />
  ) : (
    <SingleContentSkeleton />
  );
};

export default SingleContentFetch;
