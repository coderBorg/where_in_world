import React, { useReducer } from 'react';
import axios from 'axios';
import CountriesContext from './countriesContext';
import CountriesReducer from './countriesReducer';
import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_DETAIL_BORDERS,
  UPDATE_SEARCH_TEXT,
  UPDATE_FILTER_VALUE,
  UPDATE_FILTERED_COUNTRIES,
  SET_DARK_MODE,
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
    filterValue: '',
    filteredCountries: [],
    darkMode: false,
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

    // const res = await axios.get(
    //   `https://restcountries.eu/rest/v2/name/${text}`
    // );

    // dispatch({
    //   type: GET_COUNTRIES,
    //   payload: res.data,
    // });

    // console.log(`len of data from API: ${res.data.length}`)

    console.log('in updateSearchText');
    console.log(`searchtext: ${text}`);
    // console.log("filter value:");
    // console.log(state.filterValue);
    // updateFilteredCountries(state.filterValue);
  };

  const searchAndFilter = async (searchText, filterValue) => {
    let res;
    if (searchText === '') {
      res = await axios.get('https://restcountries.eu/rest/v2/all');
    } else {
      res = await axios.get(
        `https://restcountries.eu/rest/v2/name/${searchText}`
      );
    }

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });

    updateFilteredCountries(res.data, filterValue);
  };

  const updateFilterValue = (val) => {
    dispatch({
      type: UPDATE_FILTER_VALUE,
      payload: val,
    });
  };

  const updateFilteredCountries = (countries, filtVal) => {
    console.log('in updateFilteredCountries');
    console.log('val:');
    console.log(filtVal);
    if (filtVal === '') {
      console.log('in branch where filtval is empty string');
      dispatch({
        type: UPDATE_FILTERED_COUNTRIES,
        payload: countries,
      });
    } else {
      let filtCountries = [];
      for (const country of countries) {
        // console.log(country.name);
        // console.log(country.region);
        if (filtVal.toUpperCase() === country.region.toUpperCase()) {
          filtCountries.push(country);
        }
      }
      dispatch({
        type: UPDATE_FILTERED_COUNTRIES,
        payload: filtCountries,
      });
    }
  };

  const setDarkMode = (mode) => {
    dispatch({
      type: SET_DARK_MODE,
      payload: mode,
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
        filteredCountries: state.filteredCountries,
        darkMode: state.darkMode,
        searchAndFilter,
        getAllCountries,
        getCountryDetail,
        updateSearchText,
        updateFilterValue,
        updateFilteredCountries,
        setDarkMode,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
