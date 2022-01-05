import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSimilarMediaTC } from './store/slice';

interface Props {
  mediaId: string | undefined;
  mediaType: string | undefined;
}

const SimilarMedia: React.FC<Props> = ({ mediaId, mediaType }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (mediaId && mediaType) {
      dispatch(getSimilarMediaTC({ mediaId, mediaType }));
    }
  }, [dispatch, mediaId, mediaType]);

  return (
    <div>
      <span>SimilarMedia</span>
    </div>
  );
};

export default SimilarMedia;
