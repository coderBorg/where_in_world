import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Search from './Search';
import Filter from './Filter';
import CountriesContext from '../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);

  const { countries, filteredCountries, getAllCountries } = countriesContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line
  }, [countries, filteredCountries]);

  return (
    <div>
      <Search />
      <Filter />
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {filteredCountries.map((country) => (
          <CountryItem country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
