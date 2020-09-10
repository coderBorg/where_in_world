import React, { useContext } from 'react';

import BorderCountryItem from './BorderCountryItem';
import CountriesContext from '../context/countries/countriesContext';

const CountryDetailBorders = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    darkMode,
    countryDetail,
    countryDetailBorders,
    countryDetailCurrencies,
    countryDetailLanguages,
    getCountryDetail,
  } = countriesContext;

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
  } = countryDetail;

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
