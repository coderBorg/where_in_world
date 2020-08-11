import React, { useReducer, useContext } from 'react';
import CountriesContext from '../context/countries/countriesContext';
import CountriesReducer from '../context/countries/countriesReducer';
import { UPDATE_SEARCH_TEXT } from '../context/types';

const Search = () => {
  const [state, dispatch] = useReducer(CountriesReducer);

  const countriesContext = useContext(CountriesContext);

  const {
    countries,
    searchText,
    filterValue,
    updateSearchText,
    updateFilteredCountries,
    searchAndFilter,
  } = countriesContext;

  const onChange = async (e) => {
    let searchText = e.target.value;
    console.log(
      `in onChange for search, len of countries: ${countries.length}`
    );
    console.log(`search text: ${searchText}`);
    await updateSearchText(searchText);
    console.log(`search text: ${searchText}`);
    console.log(
      `in onChange for search, len of countries after updateSearchText: ${countries.length}`
    );

    // await updateFilteredCountries(countries, filterValue);
    searchAndFilter(searchText, filterValue);
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
