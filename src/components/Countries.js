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
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {countries.map((country) => (
          <CountryItem country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
