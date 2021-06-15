import playerTypes from "./player.type";
import { store } from "../store";
import { startFilteringPlanets } from "../game/game.action";

export const addPlanet = (selectorId, planet) => ({
  type: playerTypes.ADD_PLANET,
  payload: planet,
  selectorId: selectorId,
});

export const addVehicle = (vehicle) => ({
  type: playerTypes.ADD_VEHICLE,
  payload: vehicle,
});

export const addPlanetStart = (selectorId, planet) => {
  return (dispatch) => {
    dispatch(addPlanet(selectorId, planet));
    dispatch(startFilteringPlanets(store.getState().player.selectedPlanets));
  };
};
