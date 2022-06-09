import React, { useEffect } from 'react';
import SingleContent from '..';
import { useAppDispatch, useAppSelector } from '../../../@store/configureStore';
import {
  entitiesMoviesSelector,
  entitiesTVSelector,
} from '../../../@store/entities/selectors';
import { getEntityMediaDetailsTC } from '../../../@store/entities/slice';
import { languageISOSelector } from '../../../@store/ui/selectors';
import { MEDIA_TYPE } from '../../../@types';
import SingleContentSkeleton from '../SingleContentSkeleton';

interface Props {
  id: string;
  mediaType: string;
}

const SingleContentFetch = ({ id, mediaType }: Props) => {
  const dispatch = useAppDispatch();
  const entitiesSelector =
    mediaType === MEDIA_TYPE.TV ? entitiesTVSelector : entitiesMoviesSelector;
  const { ids, entities } = useAppSelector(entitiesSelector);
  // console.log(entities[ids[0]]);
  // just for useEffect refetch if changed
  const langISOCode = useAppSelector(languageISOSelector);

  useEffect(() => {
    if (id && mediaType) {
      dispatch(getEntityMediaDetailsTC({ mediaId: id, mediaType }));
    }
  }, [dispatch, id, mediaType, langISOCode]);

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
