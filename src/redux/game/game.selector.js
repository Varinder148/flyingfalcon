import { createSelector } from "reselect";

const selectGame = (state) => state.game;

export const selectPlanets = createSelector(
  [selectGame],
  (game) => game.planets
);

export const filteredPlanets = createSelector(
  [selectGame],
  (game) => game.filteredPlanets
);
