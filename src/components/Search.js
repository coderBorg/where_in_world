import React, { useReducer, useContext } from 'react';
import CountriesContext from '../context/countries/countriesContext';
import CountriesReducer from '../context/countries/countriesReducer';
import { UPDATE_SEARCH_TEXT } from '../context/types';

const Search = () => {
  const [state, dispatch] = useReducer(CountriesReducer);

  const countriesContext = useContext(CountriesContext);
    
  const { searchText, filterValue, updateSearchText, updateFilteredCountries } = countriesContext;

  const onChange = (e) => {
    updateSearchText(e.target.value);

    updateFilteredCountries(filterValue);
  };

  return (
    <div>
      <p>para</p>
      <p>Search text: {searchText}</p>
      <form>
        <input
          type="text"
          name="searchText"
          placeholder="Search for a country..."
          defaultValue={searchText}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Search;
