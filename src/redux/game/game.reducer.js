import gameType from "./game.type";
import {
  disableVehiclesUtil,
  filterPlanetsUtil,
  initiateCountUtil,
  decrementVehicleCountUtil,
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
    case gameType.START_FETCHING:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: true,
        },
      };

    case gameType.REQUEST_SUCCESS:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          value: action.payload,
        },
      };

    case gameType.REQUEST_FAIL:
      return {
        ...state,
        [action.requestType]: {
          ...state[action.requestType],
          isFetching: false,
          error: true,
        },
      };

    case gameType.FILTER_PLANETS:
      return {
        ...state,
        filteredPlanets: filterPlanetsUtil(state.planets.value, action.payload),
      };

    case gameType.DISABLE_CORRESPONDING_VEHICLES:
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

    case gameType.DECREMENT_VEHICLE_COUNT:
      return {
        ...state,
        availableVehicleCount: decrementVehicleCountUtil(
          action.playerVehicles,
          state.vehicles.value
        ),
      };

    default:
      return state;
  }
};

export default gameReducer;
