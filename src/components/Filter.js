import React, { useContext } from 'react';
import CountriesContext from '../context/countries/countriesContext';

const Filter = () => {

  const countriesContext = useContext(CountriesContext);

  const {
    countries,
    darkMode,
    updateFilterValue,
    updateFilteredCountries,
  } = countriesContext;

  const onChange = (e) => {
    console.log(e.target.value);
    updateFilterValue(e.target.value);
    updateFilteredCountries(countries, e.target.value);
  };

  let cssClass = darkMode ? 'dark' : 'light';

  return (
    <div className={cssClass}>
      <select className={cssClass} name="region" id="" onChange={onChange}>
        <option value=""></option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
