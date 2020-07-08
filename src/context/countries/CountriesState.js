import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountiresReducer from './countriesReducer';
import { GET_COUNTRIES } from '../types';

const CountriesState = (props) => {
  const initialState = {
    countries: [
      // Temporary data
      { name: 'Norway', population: 11000, capital: 'Oslo' },
      { name: 'Canada', population: 22000, capital: 'Ottawa' },
    ],
  };

  const [state, dispatch] = useReducer(CountiresReducer, initialState);

  // Get all countries

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
