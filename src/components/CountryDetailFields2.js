import React, { useContext } from 'react';

import CountriesContext from '../context/countries/countriesContext';

const CountryDetailFields2 = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    countryDetail,
    countryDetailCurrencies,
    countryDetailLanguages,
  } = countriesContext;

  const {
    topLevelDomain,
  } = countryDetail;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'justify',
        margin: '0px 40px',
      }}
    >
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
