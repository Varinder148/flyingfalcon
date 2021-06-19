import {
  calculateVehicleCountUtil,
  disableVehiclesUtil,
  filterPlanetsUtil,
} from "./game.utils";

const origPlanets = [
  { name: "mars", distance: 300 },
  { name: "earth", distance: 400 },
  { name: "pluto", distance: 300 },
];

const playerSelectedPlanets = {
  1: { name: "mars", distance: 300 },
  2: { name: "earth", distance: 400 },
};

const origVehicles = [
  { name: "Musk car", total_no: 1, max_distance: 400 },
  { name: "zathura", total_no: 2, max_distance: 100 },
  { name: "bumblebee", total_no: 3, max_distance: 20 },
];

const selectorId = 1;

const planetBeingSelected = playerSelectedPlanets[selectorId];

const filteredVehicles = {
  1: [
    { name: "Musk car", total_no: 1, max_distance: 400 },
    { name: "zathura", total_no: 2, max_distance: 100 },
    { name: "bumblebee", total_no: 3, max_distance: 20 },
  ],
};

const playerSelectedVehicles = [{ name: "Musk car" }, { name: "zathura" }];

const availableVehicleCount = [
  { name: "Musk car", total_no: 1 },
  { name: "zathura", total_no: 0 },
  { name: "bumblebee", total_no: 3 },
];

describe("Util functions for Game Store", () => {
  it("should filter planets", () => {
    expect(filterPlanetsUtil(origPlanets, playerSelectedPlanets).length).toBe(
      1
    );
  });

  it("should decrement vehicle count in isDisabled object", () => {
    const res = [
      { name: "Musk car", total_no: 0 },
      { name: "zathura", total_no: 1 },
      { name: "bumblebee", total_no: 3 },
    ];
    expect(
      calculateVehicleCountUtil(playerSelectedVehicles, origVehicles)
    ).toStrictEqual(res);
  });

  it("should disable vehicles with total no equal to zero and unreachable planets", () => {
    const result = {
      1: [
        { name: "Musk car", total_no: 1, max_distance: 400, disabled: false },
        { name: "zathura", total_no: 2, max_distance: 100, disabled: true },
        { name: "bumblebee", total_no: 3, max_distance: 20, disabled: true },
      ],
    };

    expect(
      disableVehiclesUtil(
        selectorId,
        planetBeingSelected,
        filteredVehicles,
        origVehicles,
        availableVehicleCount
      )
    ).toStrictEqual(result);
  });
});
