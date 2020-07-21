import React, { useContext, useEffect } from 'react';
import CountriesContext from '../context/countries/countriesContext';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const { countryDetail, getCountryDetail } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, []);

  let borders = countryDetail.borders;
  let bordersType = typeof(countryDetail.borders);
  // let borders2 = countryDetail.borders.map((c) => c);

  return (
    <div>
      <p>Country detail here</p>
      <p>{match.params.name}</p>
      <p>Native Name: {countryDetail.nativeName}</p>
      <p>Population: {countryDetail.population}</p>
      <p>Currencies:</p>
      <p>`${countryDetail.borders}`</p>
      <p>{typeof(countryDetail.borders)}</p>
      <p>{countryDetail.borders instanceof Array ? "array" : "not array"}</p>
      <p>{Array.isArray(countryDetail.borders)}</p>
      <p>borders: {borders}</p>
      <p>typeof borders: {bordersType}</p>
      <p>What</p>
    </div>
  );
};

export default CountryDetail;
