import React, { useContext } from 'react';

import CountriesContext from '../context/countries/countriesContext';

import './CountryDetailFields2.css';

const CountryDetailFields2 = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    countryDetail,
    countryDetailCurrencies,
    countryDetailLanguages,
  } = countriesContext;

  const { topLevelDomain } = countryDetail;

  return (
    <div className="flex_col phone">
      <p>
        <span className="ctry-detail-fld-name">Top Level Domain:</span>{' '}
        {topLevelDomain}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Currencies:</span>{' '}
        {countryDetailCurrencies.join(', ')}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Languages:</span>{' '}
        {countryDetailLanguages.join(', ')}
      </p>
    </div>
  );
};

export default CountryDetailFields2;
