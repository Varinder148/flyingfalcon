import playerTypes from "./player.type";

const INITIAL_STATE = {
  selectedPlanets: {},
  selectedVehicles: {},
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case playerTypes.ADD_PLANET:
      return {
        ...state,
        selectedPlanets: {
          ...state.selectedPlanets,
          [action.selectorId]: action.payload,
        },
      };

    case playerTypes.ADD_VEHICLE:
      return {
        ...state,
        selectedVehicles: {
          ...state.selectedVehicles,
          [action.selectorId]: action.payload,
        },
      };

    case playerTypes.RESET_PLAYER:
      return INITIAL_STATE

    default:
      return state;
  }
};

export default playerReducer;
