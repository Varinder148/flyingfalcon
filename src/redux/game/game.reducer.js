import gametype from "./game.type";
import {
  disableVehicles,
  filterPlanets,
  decrement,
  initiateCount,

} from "./game.utils";

const INITIAL_STATE = {
  token: { value: "", error: false, isFetching: false },
  planets: { value: "", error: false, isFetching: false },
  vehicles: { value: "", error: false, isFetching: false },
  filteredPlanets: {},
  filteredVehicles: {},
  availableVehicleCount: [],
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

    case gametype.DISABLE_CORRESPONDING_VEHICLES:
      return {
        ...state,
        filteredVehicles: disableVehicles(
          action.selectorId,
          action.payload,
          state.filteredVehicles,
          state.vehicles.value,
          state.availableVehicleCount
        ),
      };

    case gametype.DECREMENT_VEHICLE_COUNT:
      return {
        ...state,
        availableVehicleCount: decrement(
          action.playerVehicles,
          state.vehicles.value
        ),
      };

    case gametype.INITIATE_AVAILABLE_VEHICLE_COUNT:
      return {
        ...state,
        availableVehicleCount: initiateCount(state.vehicles.value),
      };
    default:
      return state;
  }
};

export default gameReducer;
