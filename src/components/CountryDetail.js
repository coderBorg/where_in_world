import React, { useContext, useEffect } from 'react';
import CountriesContext from '../context/countries/countriesContext';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const { countryDetail, getCountryDetail } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>Country detail here</p>
      <p>{match.params.name}</p>
      <p>Native Name: {countryDetail.nativeName}</p>
      <p>Population: {countryDetail.population}</p>
      <p>Currencies:</p>
      
    </div>
  );
};

export default CountryDetail;
