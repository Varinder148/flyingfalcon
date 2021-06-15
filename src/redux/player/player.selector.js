import { createSelector } from "reselect";

const selectPlayer = (state) => state.player;

export const playerSelectedPlanets = createSelector(
  [selectPlayer],
  player => player.selectedPlanets
);
