import React from 'react';

export const CountryDetail = ({match}) => {
  return (
    <div>
      <p>Country detail here</p>
      <p>{match.params.name}</p>
    </div>
  );
};

export default CountryDetail;
