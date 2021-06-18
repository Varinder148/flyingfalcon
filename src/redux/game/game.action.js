import axios from "axios";

import gameTypes from "./game.type";

export const startFilteringPlanets = (playerPlanets) => ({
  type: gameTypes.FILTER_PLANETS,
  payload: playerPlanets,
});

export const startFetch = (requestType) => ({
  type: gameTypes.START_FETCHING,
  requestType: requestType,
});

export const fetchSuccess = (requestType, payload) => ({
  type: gameTypes.REQUEST_SUCCESS,
  payload: payload,
  requestType: requestType,
});

export const fetchFail = (requestType,msg) => ({
  type: gameTypes.REQUEST_FAIL,
  requestType: requestType,
  msg: msg
});

export const disableCorrespondingVehicles = (selectorId, planet) => ({
  type: gameTypes.DISABLE_CORRESPONDING_VEHICLES,
  payload: planet,
  selectorId: selectorId,
});

export const decrementVehicleCount = (selectorId, vehicle, playerVehicles) => ({
  type: gameTypes.DECREMENT_VEHICLE_COUNT,
  payload: vehicle,
  selectorId: selectorId,
  playerVehicles: playerVehicles,
});

export const resetGame = () => ({
  type: gameTypes.RESET_GAME,
});

export const updateResult = (msg, error) => ({
  type: gameTypes.UPDATE_RESULT,
  payload: msg,
  error: error,
});

const fetchTokenAsync = () => {
  return async (dispatch) => {
    let requestType = "token";

    try {
      dispatch(startFetch(requestType));
      let res = await axios.post("/token");
      dispatch(fetchSuccess(requestType, res.data.token));
    } catch {
      dispatch(fetchFail(requestType));
    }
  };
};

const fetchPlanetsAsync = () => {
  return async (dispatch) => {
    let requestType = "planets";
    try {
      dispatch(startFetch(requestType));
      let res = await axios.get("/planets");
      dispatch(fetchSuccess(requestType, res.data));
    } catch {
      dispatch(fetchFail(requestType));
    }
  };
};

const fetchVehiclesAsync = () => {
  return async (dispatch) => {
    let requestType = "vehicles";
    try {
      dispatch(startFetch(requestType));
      let res = await axios.get("/vehicles");
      dispatch(fetchSuccess(requestType, res.data));
    } catch {
      dispatch(fetchFail(requestType));
    }
  };
};

export const loadGame = () => {
  return (dispatch) => {
    dispatch(fetchTokenAsync());
    dispatch(fetchPlanetsAsync());
    dispatch(fetchVehiclesAsync());
  };
};
