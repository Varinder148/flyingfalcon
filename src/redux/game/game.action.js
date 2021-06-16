import axios from "axios";

import gametype from "./game.type";

export const startFilteringPlanets = (playerPlanets) => ({
  type: gametype.FILTER_PLANETS,
  payload: playerPlanets,
});

export const startFetch = (requestType) => ({
  type: gametype.START_FETCHING,
  requestType: requestType,
});

export const fetchSuccess = (requestType, token) => ({
  type: gametype.REQUEST_SUCCESS,
  payload: token,
  requestType: requestType,
});

export const fetchFail = (requestType) => ({
  type: gametype.REQUEST_FAIL,
  requestType: requestType,
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

export const disableCorrespondingVehicles = (selectorId, planet) => ({
  type: gametype.DISABLE_CORRESPONDING_VEHICLES,
  payload: planet,
  selectorId: selectorId,
});

export const decrementVehicleCount = (selectorId, vehicle, playerVehicles) => ({
  type: gametype.DECREMENT_VEHICLE_COUNT,
  payload: vehicle,
  selectorId: selectorId,
  playerVehicles:playerVehicles
});

export const initiateAvailableVehicleCount = ()=>({
  type: gametype.INITIATE_AVAILABLE_VEHICLE_COUNT
})

export const loadGame = () => {
  return (dispatch) => {
    dispatch(fetchTokenAsync());
    dispatch(fetchPlanetsAsync());
    dispatch(fetchVehiclesAsync());
  };
};
