import { store } from "../store";
import playerTypes from "./player.type";
import {
  startFilteringPlanets,
  disableCorrespondingVehicles,
  calculateVehicleCount,
  resetGame,
  loadGame,
  startFetch,
  fetchSuccess,
  fetchFail,
} from "../game/game.action";
import axios from "axios";

export const addPlanet = (selectorId, planet) => ({
  type: playerTypes.ADD_PLANET,
  payload: planet,
  selectorId: selectorId,
});

export const addVehicle = (selectorId, vehicle) => ({
  type: playerTypes.ADD_VEHICLE,
  payload: vehicle,
  selectorId: selectorId,
});

export const resetPlayer = () => ({
  type: playerTypes.RESET_PLAYER,
});

export const addPlanetStart = (selectorId, planet) => {
  return (dispatch) => {
    dispatch(addPlanet(selectorId, planet));
    let selectedPlanetsValueFromStore = store.getState().player.selectedPlanets;
    dispatch(startFilteringPlanets(selectedPlanetsValueFromStore));
    dispatch(disableCorrespondingVehicles(selectorId, planet));
  };
};

export const addVehicleStart = (selectorId, vehicle) => {
  return (dispatch) => {
    dispatch(addVehicle(selectorId, vehicle));
    dispatch(
      calculateVehicleCount(
        selectorId,
        vehicle,
        store.getState().player.selectedVehicles
      )
    );
  };
};

export const launchSearchAsync = (playerPlanets, playerVehicles) => {
  return async (dispatch) => {
    //resetting previous error and success messages
    dispatch(fetchFail("result", ""));
    dispatch(fetchSuccess("result", ""));
    dispatch(startFetch("result"));

    let state = store.getState();
    let token = state.game.token.value;
    let { selectedPlanets, selectedVehicles } = state.player;

    let planetsArray = mapObjectsToNamesUtil(Object.values(selectedPlanets));
    let vehiclesArray = mapObjectsToNamesUtil(Object.values(selectedVehicles));

    if (planetsArray.length !== 4 || vehiclesArray.length !== 4) {
      dispatch(fetchFail("result", "Please select 4 planets and 4 vehicles"));
      return;
    }
    if (vehiclesArray.find((vehicle)=>vehicle===undefined)) {
      dispatch(fetchFail("result", "Please select 4 vehicles"));
      return;
    }

    let requestBody = {
      token: token,
      planet_names: planetsArray,
      vehicle_names: vehiclesArray,
    };

    try {
      let response = await axios.post("/find", requestBody);
      let responseMsg = "";
      if (response.data.status === "success")
        responseMsg = "Congratulations! You found the queen on " + response.data.planet_name + ".";
      else responseMsg = "Shoot! It's a miss.";
      dispatch(fetchSuccess("result", responseMsg));
    } catch (error) {
      dispatch(fetchFail("result", "Something went wrong. Please try again"));
    }
  };
};

const mapObjectsToNamesUtil = (selectedObject) => {
  return selectedObject.map((object) => object.name);
};

export const resetFullGame = () => {
  return (dispatch) => {
    dispatch(resetGame());
    dispatch(resetPlayer());
    dispatch(loadGame());
  };
};
