import React from 'react';

// import type { CastPersonType, CrewPersonType } from '../../../@types';

// type PersonType = CastPersonType | CrewPersonType;
type Props = {
  person: any;
  //   person: CastPersonType | CrewPersonType;
  //   person: PersonType;
};

const img_base_url = 'https://www.themoviedb.org';

const CastCard = ({ person }: Props) => {
  return (
    <div>
      <img
        loading="lazy"
        className="profile"
        src={`${img_base_url}/t/p/w66_and_h66_face/${person.profile_path}`}
        // srcSet="/t/p/w66_and_h66_face/h2ukt3AaPRKdy8kHtXe6DScgi4B.jpg 1x, /t/p/w132_and_h132_face/h2ukt3AaPRKdy8kHtXe6DScgi4B.jpg 2x"
        alt={person.name}
      />
      <b>{person.name}</b>
      <br />
      {person.character || person.job}
    </div>
  );
};

export default CastCard;
