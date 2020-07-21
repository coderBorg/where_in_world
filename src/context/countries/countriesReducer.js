import { GET_COUNTRIES, GET_COUNTRY_DETAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      let tempState = { ...state };
      tempState.countryDetail = action.payload;
      // tempState.countryDetail.borders = action.payload.borders;
      // tempState.countryDetail.borders = action.payload.borders.map((b) => {return b;});
      // tempState.countryDetail.borders = action.payload.borders.slice();
      let tempBorders = [];
      action.payload.borders.forEach(el => tempBorders.push(el));
      
      // debug
      console.log('in reducer');
      console.log("in reducer, borders[0]: ");
      console.log(tempState.countryDetail.borders[0]);
      tempState.countryDetail.borders.forEach(el => console.log(el));
      
      tempState.countryDetail.borders = tempBorders;
      return tempState;
  }
};
