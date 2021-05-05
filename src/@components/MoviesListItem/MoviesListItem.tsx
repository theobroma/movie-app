import * as React from 'react';
import s from './MoviesListItem.module.css';
import noCover from '../../@assets/images/no-cover.png';

interface Props {
  poster: any;
  title: any;
  id: any;
  url: any;
}

export const MoviesListItem: React.FC<Props> = ({ poster, title, id, url }) => {
  return (
    <li className={s.item}>
      {/* <Link to={{ pathname: `${url}/${id}` }}>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noCover}
          alt={title}
          className={s.poster}
        />
        <h2 className={s.title}>{title}</h2>
      </Link> */}
      <img
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noCover}
        alt={title}
        className={s.poster}
      />
      <h2 className={s.title}>{title}</h2>
    </li>
  );
};
