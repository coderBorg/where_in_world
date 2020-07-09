import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import { GET_COUNTRIES } from '../types';

const CountriesState = (props) => {
  const initialState = {
    countries: [
      // Temporary data
      { name: 'Norway', population: 11000, capital: 'Oslo' },
      { name: 'Canada', population: 22000, capital: 'Ottawa' },
    ],
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  // Get all countries
  const getAllCountries = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        getAllCountries
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
