import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import { GET_COUNTRIES, GET_COUNTRY_DETAIL } from '../types';

const CountriesState = (props) => {
  const initialState = {
    countries: [
      // Temporary data
      { name: 'Norway', population: 11000, capital: 'Oslo' },
      { name: 'Canada', population: 22000, capital: 'Ottawa' },
    ],
    countryDetail: {}
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

  // Get country detail
  const getCountryDetail = async (name) => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

    console.log("country detail data:");
    console.log(typeof(res.data));
    console.log(res.data);
    console.log(typeof([1,3,4]));
    console.log([1,3,4] instanceof Array);
    console.log(res.data[0].borders instanceof Array);
    console.log(res.data[0].borders[0]);
    console.log(res.data[0].borders[1]);
    console.log(res.data[0].borders.length);


    dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: res.data[0],
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        countryDetail: state.countryDetail,
        getAllCountries,
        getCountryDetail
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
