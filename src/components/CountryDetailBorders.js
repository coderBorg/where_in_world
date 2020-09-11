import React, { useContext } from 'react';

import BorderCountryItem from './BorderCountryItem';
import CountriesContext from '../context/countries/countriesContext';

const CountryDetailBorders = () => {
  const countriesContext = useContext(CountriesContext);

  const { countryDetail, countryDetailBorders } = countriesContext;

  const flexRowOverall = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  };

  const flexRowBorders = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  };

  return (
    <div style={flexRowOverall}>
      <p className="ctry-detail-fld-name">Border Countries:</p>
      <div style={flexRowBorders}>
        {countryDetailBorders.map((name) => (
          <BorderCountryItem name={name} />
        ))}
      </div>
    </div>
  );
};

export default CountryDetailBorders;
