import gametype from "./game.type";
import { filterPlanets } from "./game.utils";

const INITIAL_STATE = {
  token: { value: "", error: false, isFetching: false },
  planets: { value: "", error: false, isFetching: false },
  vehicles: { value: "", error: false, isFetching: false },
  filteredPlanets: [],
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gametype.START_FETCHING:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: true,
        },
      };

    case gametype.REQUEST_SUCCESS:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          value: action.payload,
        },
      };

    case gametype.REQUEST_FAIL:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          error: true,
        },
      };

    case gametype.FILTER_PLANETS:
      return {
        ...state,
        filteredPlanets: filterPlanets(state.planets.value, action.payload),
      };

    default:
      return state;
  }
};

export default gameReducer;
