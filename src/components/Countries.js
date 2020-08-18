import React, { useContext, useEffect, Fragment } from 'react';
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


  return (
    <div className='topLvlPdg'>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Search />
        <Filter />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-around", marginTop:'20px' }}>
        {filteredCountries.map((country) => (
          <CountryItem country={country} darkMode={darkMode} />
        ))}
        </div>
    </div>
  );
};

export default Countries;
