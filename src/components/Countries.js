import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Search from './Search';
import Filter from './Filter';
import CountriesContext from '../context/countries/countriesContext';

const Countries = () => {
  const countriesContext = useContext(CountriesContext);

  const {
    searchText,
    darkMode,
    filterValue,
    filteredCountries,
    searchAndFilter,
  } = countriesContext;

  useEffect(() => {
    searchAndFilter(searchText, filterValue);
    // eslint-disable-next-line
  }, []);

  const flexCountryItems = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  return (
    <div className="topLvlPdg">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search />
        <Filter />
      </div>
      <div style={flexCountryItems}>
        {filteredCountries.map((country) => (
          <CountryItem country={country} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
