import gameTypes from "./game.type";
import {
  disableVehiclesUtil,
  filterPlanetsUtil,
  calculateVehicleCountUtil,
} from "./game.utils";

const INITIAL_STATE = {
  token: { value: "", error: "", isFetching: false },
  planets: { value: [], error: "", isFetching: false },
  vehicles: { value: [], error: "", isFetching: false },
  filteredPlanets: {},
  filteredVehicles: {},
  availableVehicleCount: [],
  result: { value: "", error: "", isFetching: false },
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gameTypes.START_FETCHING:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: true,
        },
      };

    case gameTypes.REQUEST_SUCCESS:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          value: action.payload,
        },
      };

    case gameTypes.REQUEST_FAIL:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          error: action.msg,
        },
      };

    case gameTypes.FILTER_PLANETS:
      return {
        ...state,
        filteredPlanets: filterPlanetsUtil(state.planets.value, action.payload),
      };

    case gameTypes.DISABLE_CORRESPONDING_VEHICLES:
      return {
        ...state,
        filteredVehicles: disableVehiclesUtil(
          action.selectorId,
          action.payload,
          state.filteredVehicles,
          state.vehicles.value,
          state.availableVehicleCount
        ),
      };

    case gameTypes.CALCULATE_VEHICLE_COUNT:
      return {
        ...state,
        availableVehicleCount: calculateVehicleCountUtil(
          action.playerVehicles,
          state.vehicles.value
        ),
      };

    case gameTypes.RESET_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default gameReducer;
