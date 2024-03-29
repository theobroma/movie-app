import React from 'react';

import { ReactComponent as UserFemaleSVG } from '../../../@assets/images/user-female.svg';
import { ReactComponent as UserMaleSVG } from '../../../@assets/images/user-male.svg';

import { useStyles } from './CastCard.styles';
// import type { CastPersonType, CrewPersonType } from '../../../@types';

// type PersonType = CastPersonType | CrewPersonType;
type Props = {
  person: any;
  //   person: CastPersonType | CrewPersonType;
  //   person: PersonType;
};

const img_base_url = 'https://www.themoviedb.org';

const CastCard = ({ person }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.media}>
      {!!person.profile_path && (
        <img
          className={classes.mediaFigure}
          loading="lazy"
          src={`${img_base_url}/t/p/w66_and_h66_face/${person.profile_path}`}
          // srcSet="/t/p/w66_and_h66_face/h2ukt3AaPRKdy8kHtXe6DScgi4B.jpg 1x, /t/p/w132_and_h132_face/h2ukt3AaPRKdy8kHtXe6DScgi4B.jpg 2x"
          alt={person.name}
        />
      )}
      {!person.profile_path && (
        <div className={classes.mediaFigure}>
          {person.gender === 0 && <UserMaleSVG />}
          {person.gender === 1 && <UserFemaleSVG />}
          {person.gender === 2 && <UserMaleSVG />}
        </div>
      )}
      <div className={classes.mediaBody}>
        <b>{person.name}</b>
        <br />
        {person.character || person.job}
      </div>
    </div>
  );
};

export default CastCard;
