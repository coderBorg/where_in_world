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
    getCountryDetail,
  } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, [countryDetail]);

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <div className={cssClass}>
      <p>Country detail here</p>
      <Link to={'/'}>Back</Link>
      <p>{match.params.name}</p>
      <p>Native Name: {countryDetail.nativeName}</p>
      <p>Population: {countryDetail.population}</p>
      <p>Currencies:</p>
      <p>Borders:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {countryDetailBorders.map((name) => (
          <BorderCountryItem name={name} />
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;
