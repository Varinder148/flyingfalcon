import axios from "axios";

import gameType from "./game.type";

export const startFilteringPlanets = (playerPlanets) => ({
  type: gameType.FILTER_PLANETS,
  payload: playerPlanets,
});

export const startFetch = (requestType) => ({
  type: gameType.START_FETCHING,
  requestType: requestType,
});

export const fetchSuccess = (requestType, token) => ({
  type: gameType.REQUEST_SUCCESS,
  payload: token,
  requestType: requestType,
});

export const fetchFail = (requestType) => ({
  type: gameType.REQUEST_FAIL,
  requestType: requestType,
});

export const disableCorrespondingVehicles = (selectorId, planet) => ({
  type: gameType.DISABLE_CORRESPONDING_VEHICLES,
  payload: planet,
  selectorId: selectorId,
});

export const decrementVehicleCount = (selectorId, vehicle, playerVehicles) => ({
  type: gameType.DECREMENT_VEHICLE_COUNT,
  payload: vehicle,
  selectorId: selectorId,
  playerVehicles: playerVehicles,
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

const launchSearch = (playerPlanets, playerVehicles) => {
  return async (dispatch) => {};
};

export const loadGame = () => {
  return (dispatch) => {
    dispatch(fetchTokenAsync());
    dispatch(fetchPlanetsAsync());
    dispatch(fetchVehiclesAsync());
  };
};
