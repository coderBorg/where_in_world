import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import CountriesContext from '../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);

  const { countries, getAllCountries } = countriesContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Countries 2</h1>
      <p>Countries here</p>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </div>
  );
};

export default Countries;
