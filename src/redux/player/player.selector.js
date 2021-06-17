import { createSelector } from "reselect";

const selectPlayer = (state) => state.player;

export const selectPlayerSelectedPlanets = createSelector(
  [selectPlayer],
  (player) => player.selectedPlanets
);

export const selectPlayerSelectedVehicles = createSelector(
  [selectPlayer],
  (player) => player.selectedVehicles
);

export const selectTimeTaken = createSelector([selectPlayer], (player) =>
  calculateTimeTaken(player.selectedPlanets, player.selectedVehicles)
);

const calculateTimeTaken = (planetsObject, vehiclesObject) => {
  const planetKeys = Object.keys(planetsObject);
  let totalTime = 0;

  planetKeys.forEach((planetKey) => {
    let distance = 0;
    let speed = 1;
    if (planetsObject[planetKey] && vehiclesObject[planetKey]) {
      distance = planetsObject[planetKey].distance;
      speed = vehiclesObject[planetKey].speed;
    }

    let timeTakenByThisSelectionPair = distance / speed;

    totalTime += timeTakenByThisSelectionPair
      ? timeTakenByThisSelectionPair
      : 0;
  });

  return totalTime;
};
