import React, { useContext, useEffect } from 'react';
import CountriesContext from '../context/countries/countriesContext';
import BorderCountryItem from './BorderCountryItem';

export const CountryDetail = ({ match }) => {
  const countriesContext = useContext(CountriesContext);

  const { countryDetail, countryDetailBorders, getCountryDetail } = countriesContext;

  useEffect(() => {
    getCountryDetail(match.params.name);
    // eslint-disable-next-line
  }, [countryDetail]);

  return (
    <div>
      <p>Country detail here</p>
      <p>{match.params.name}</p>
      <p>Native Name: {countryDetail.nativeName}</p>
      <p>Population: {countryDetail.population}</p>
      <p>Currencies:</p>
      <p>Borders:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        {countryDetailBorders.map((name) => (
          <BorderCountryItem name={name}/>
        ))}
      </div>
      
    </div>
  );
};

export default CountryDetail;
