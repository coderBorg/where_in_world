import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Search from './Search';
import Filter from './Filter';
import CountriesContext from '../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);

  const { countries, filterValue, filteredCountries, getAllCountries, updateFilteredCountries } = countriesContext;

  useEffect(() => {
    getAllCountries();
    updateFilteredCountries(countries, filterValue);
    // eslint-disable-next-line
  }, []);

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
