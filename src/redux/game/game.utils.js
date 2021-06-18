export const filterPlanetsUtil = (origPlanets, playerPlanetsObject) => {
  let playerPlanets = Object.values(playerPlanetsObject);
  let filteredRes = origPlanets.filter((origPlanet) => {
    return !playerPlanets.find(
      (playerPlanet) => playerPlanet.name === origPlanet.name
    );
  });
  return filteredRes;
};

export const disableVehiclesUtil = (
  selectorId,
  planetBeingSelected,
  filteredVehicles,
  origVehicles,
  availableVehicleCount
) => {
  let VehiclesThatCanReachThisPlanet = origVehicles.map((vehicle) => {
    let isDisabled = vehicle.max_distance < planetBeingSelected.distance;

    let vehicleCountFound = availableVehicleCount.find(
      (countVehicle) => countVehicle.name === vehicle.name
    );

    isDisabled = isDisabled || vehicleCountFound <= 0;

    return { ...vehicle, disabled: isDisabled };
  });

  return { ...filteredVehicles, [selectorId]: VehiclesThatCanReachThisPlanet };
};

export const decrementVehicleCountUtil = (
  playerSelectedVehicles,
  origVehicles
) => {
  let res = [];

  playerSelectedVehicles = Object.values(playerSelectedVehicles);

  origVehicles.forEach((origVehicle) => {
    let vehiclesFound = playerSelectedVehicles.filter(
      (vehicle) => origVehicle.name === vehicle.name
    );
    let count = origVehicle.total_no - vehiclesFound.length;
    count = count <= 0 ? 0 : count;
    let vehicle = { name: origVehicle.name, total_no: count };
    res.push(vehicle);
  });

  return res;
};
