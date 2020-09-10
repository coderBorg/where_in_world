import React, { useContext } from 'react';

import CountriesContext from '../context/countries/countriesContext';

const CountryDetailFields1 = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    countryDetail,
  } = countriesContext;

  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
  } = countryDetail;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'justify',
        margin: '0px 0px',
      }}
    >
      <p>
        <span className="ctry-detail-fld-name">Native Name:</span> {nativeName}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Population:</span> {population}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Region:</span> {region}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Sub Region:</span> {subregion}
      </p>
      <p>
        <span className="ctry-detail-fld-name">Capital:</span> {capital}
      </p>
    </div>
  );
};

export default CountryDetailFields1;
