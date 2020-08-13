import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CountriesContext from '../context/countries/countriesContext';
import BorderCountryItem from './BorderCountryItem';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const {
    darkMode,
    countryDetail,
    countryDetailBorders,
    countryDetailCurrencies,
    getCountryDetail,
  } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, [countryDetail]);

  let cssClass = darkMode ? 'dark' : 'light';

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies
  } = countryDetail;

  return (
    <div className={cssClass}>
      <div>
        <Link to={'/'}>Back</Link>
      </div>
      <img src={countryDetail.flag} alt="" style={{ width: '100px' }} />

      <p>{name}</p>
      <p>Native Name: {nativeName}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Sub Region: {subregion}</p>
      <p>Top Level Domain: {topLevelDomain}</p>
      <p>Currencies:</p>
      { countryDetailCurrencies.map((cur) => (<p>{cur}</p>)
      )}
      <p>Border Countries:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {countryDetailBorders.map((name) => (
          <BorderCountryItem name={name} />
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;
