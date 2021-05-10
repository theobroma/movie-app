import * as React from 'react';

interface Props {
  url?: any;
}

const MovieInfo: React.FC<Props> = ({ url }) => {
  return (
    <div>
      <span>MovieInfo</span>
    </div>
  );
};

export default MovieInfo;
