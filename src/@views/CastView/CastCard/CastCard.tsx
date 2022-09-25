import React from 'react';

// import type { CastPersonType, CrewPersonType } from '../../../@types';

// type PersonType = CastPersonType | CrewPersonType;
type Props = {
  person: any;
  //   person: CastPersonType | CrewPersonType;
  //   person: PersonType;
};

const CastCard = ({ person }: Props) => {
  return (
    <div>
      <b>{person.name}</b>
      <br />
      {person.character || person.job}
    </div>
  );
};

export default CastCard;
