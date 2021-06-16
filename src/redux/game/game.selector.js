import { createSelector } from "reselect";

const selectGame = (state) => state.game;

export const selectPlanets = createSelector(
  [selectGame],
  (game) => game.planets
);

export const selectVehicles = createSelector(
  [selectGame],
  (game) => game.vehicles
);

export const filteredPlanets = createSelector(
  [selectGame],
  (game) => game.filteredPlanets
);

export const filteredVehicles = createSelector(
  [selectGame],
  (game) => game.filteredVehicles
);

export const selectVehicleCount = createSelector(
  [selectGame],
  (game) => game.vehicleCount
);

export const selectAvailableVehicleCount = createSelector(
  [selectGame],
  (game) => game.availableVehicleCount
);
