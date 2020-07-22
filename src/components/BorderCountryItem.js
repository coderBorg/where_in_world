import React, { useContext } from 'react';
import CountriesContext from '../context/countries/countriesContext';

export const BorderCountryItem = ({ name }) => {
  const countriesContext = useContext(CountriesContext);
  const { getCountryDetail } = countriesContext;

  return (
    <div
      style={{
        color: 'red',
        backgroundColor: 'cyan',
        width: '100px',
        margin: '5px',
        borderRadius: '5px',
      }}
      onClick={getCountryDetail(name)}
    >
      <p>{name}</p>
    </div>
  );
};

export default BorderCountryItem;
