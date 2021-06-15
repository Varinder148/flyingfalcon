export const filterPlanets = (origPlanets, playerPlanetsObject) => {
  let playerPlanets = Object.values(playerPlanetsObject);
  let filteredRes = origPlanets.filter((origPlanet) => {
    return !playerPlanets.find(
      (playerPlanet) => playerPlanet.name === origPlanet.name
    );
  });
  return filteredRes;
};
