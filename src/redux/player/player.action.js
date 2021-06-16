import playerTypes from "./player.type";
import { store } from "../store";
import {
  startFilteringPlanets,
  disableCorrespondingVehicles,
  decrementVehicleCount,
  initiateAvailableVehicleCount,
} from "../game/game.action";

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

export const addPlanetStart = (selectorId, planet) => {
  return (dispatch) => {
    dispatch(addPlanet(selectorId, planet));
    let selectedPlanetsValueFromStore = store.getState().player.selectedPlanets;
    dispatch(startFilteringPlanets(selectedPlanetsValueFromStore));
    dispatch(disableCorrespondingVehicles(selectorId, planet));
    dispatch(initiateAvailableVehicleCount());
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
    dispatch(
      disableCorrespondingVehicles(
        selectorId,
        store.getState().player.selectedPlanets[selectorId]
      )
    );
  };
};
