import React from 'react';

export const CountryItem = ({
  country: { name, capital, population, flag, region },
}) => {
  return (
    <div style={{ width: '200px' }}>
      <img src={flag} alt="" style={{ width: '100px' }} />
      <p>{name}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  );
};

export default CountryItem;
