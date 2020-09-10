import React, { useContext } from 'react';

import BorderCountryItem from './BorderCountryItem';
import CountriesContext from '../context/countries/countriesContext';

const CountryDetailBorders = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    countryDetail,
    countryDetailBorders,
  } = countriesContext;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      <p className="ctry-detail-fld-name">Border Countries:</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {countryDetailBorders.map((name) => (
          <BorderCountryItem name={name} />
        ))}
      </div>
    </div>
  );
};

export default CountryDetailBorders;
