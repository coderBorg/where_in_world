import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Search from './Search';
import Filter from './Filter';
import DarkMode from './DarkMode';
import CountriesContext from '../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    searchText,
    darkMode,
    countries,
    filterValue,
    filteredCountries,
    getAllCountries,
    updateFilteredCountries,
    searchAndFilter,
  } = countriesContext;

  useEffect(() => {
    // getAllCountries();
    // updateFilteredCountries(countries, filterValue);
    searchAndFilter(searchText, filterValue);
    // eslint-disable-next-line
  }, []);

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <div>
      <Search />
      <Filter />
      <DarkMode />
      <div style={{ display: 'flex', flexWrap: 'wrap' }} className={cssClass}>
        {filteredCountries.map((country) => (
          <CountryItem country={country} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
