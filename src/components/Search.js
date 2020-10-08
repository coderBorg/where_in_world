import React, { useContext } from 'react';
import CountriesContext from '../context/countries/countriesContext';
// import CountriesReducer from '../context/countries/countriesReducer';

const Search = () => {
  // const [state, dispatch] = useReducer(CountriesReducer);

  const countriesContext = useContext(CountriesContext);

  const {
    searchText,
    filterValue,
    updateSearchText,
    darkMode,
    searchAndFilter,
  } = countriesContext;

  const onChange = async (e) => {
    let searchText = e.target.value;
    await updateSearchText(searchText);
    searchAndFilter(searchText, filterValue);
  };

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <div className={cssClass}>
      <form>
        <input
          className={cssClass}
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
