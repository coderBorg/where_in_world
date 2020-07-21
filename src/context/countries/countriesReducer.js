import { GET_COUNTRIES, GET_COUNTRY_DETAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      let tempState = state;
      tempState.countryDetail.borders = action.payload.borders;
      return tempState;
  }
};
