import playerTypes from "./player.type";
import { store } from "../store";
import {
  startFilteringPlanets,
  disableCorrespondingVehicles,
  decrementVehicleCount,
  resetGame,
  loadGame,
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
    // dispatch(initiateAvailableVehicleCount());
  };
};

export const addVehicleStart = (selectorId, vehicle) => {
  return (dispatch) => {
    dispatch(addVehicle(selectorId, vehicle));
    dispatch(
      decrementVehicleCount(
        selectorId,
        vehicle,
        store.getState().player.selectedVehicles
      )
    );
  };
};

export const launchSearchAsync = (playerPlanets, playerVehicles) => {
  return async (dispatch) => {
    let state = store.getState();
    let token = state.game.token.value;
    let { selectedPlanets, selectedVehicles } = state.player;

    let planetsArray = mapSelectedValuesToNamesUtil(
      Object.values(selectedPlanets)
    );
    let vehiclesArray = mapSelectedValuesToNamesUtil(
      Object.values(selectedVehicles)
    );

    let requestBody = {
      token: token,
      planet_names: planetsArray,
      vehicle_names: vehiclesArray,
    };
    let response = await axios.post("/find", requestBody);
    if (response.data.status === "success")
      alert("King found on " + response.data.planet_name + ".");
    else alert("Shoot! It's a miss.");
    dispatch(resetFullGame());
  };
};

const mapSelectedValuesToNamesUtil = (selectedObject) => {
  return selectedObject.map((object) => object.name);
};

export const resetFullGame = () => {
  return (dispatch) => {
    dispatch(resetGame());
    dispatch(resetPlayer());
    dispatch(loadGame());
  };
};
