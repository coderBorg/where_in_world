import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_BORDERS,
  UPDATE_SEARCH_TEXT,
  UPDATE_FILTER_VALUE
} from '../types';

const CountriesState = (props) => {
  const initialState = {
    countries: [
      // Temporary data
      { name: 'Norway', population: 11000, capital: 'Oslo' },
      { name: 'Canada', population: 22000, capital: 'Ottawa' },
    ],
    countryDetail: {},
    countryDetailBorders: [],
    searchText: '',
    filterValue: ''
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
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );

    console.log('country detail data:');
    console.log(res.data);

    dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: res.data[0],
    });

    let borderNames = [];
    for (const borderCode of res.data[0].borders) {
      borderNames.push(await getCountryNameFrCode(borderCode));
    }

    dispatch({
      type: GET_COUNTRY_DETAIL_BORDERS,
      payload: borderNames,
    });
  };

  const getCountryNameFrCode = async (code) => {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${code}`
    );
    return res.data.name;
  };

  const updateSearchText = async (text) => {
    dispatch({
      type: UPDATE_SEARCH_TEXT,
      payload: text,
    });

    const res = await axios.get(`https://restcountries.eu/rest/v2/name/${text}`);

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });

  };

  const updateFilterValue = (val) => {
    dispatch({
      type: UPDATE_FILTER_VALUE,
      payload: val,
    });
  }

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        countryDetail: state.countryDetail,
        countryDetailBorders: state.countryDetailBorders,
        searchText: state.searchText,
        filterValue: state.filterValue,
        getAllCountries,
        getCountryDetail,
        updateSearchText,
        updateFilterValue
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
