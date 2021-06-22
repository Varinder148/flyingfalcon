import { shallow } from "enzyme";
import { PlanetSelector } from "./planetSelector.component";

const createDummy = () => {
  let props = {
    selectorId: 1,
    showVehicles: true,
    setShowVehicles: jest.fn(),
    selectPlanets: { value: [] },
    selectFilteredPlanets: [],
    selectPlayerSelectedPlanets: [],
    addPlanet: jest.fn(),
    addVehicle: jest.fn(),
  };
  return { ...props };
};

describe("Planet Selector tests", () => {
  let props = null;
  beforeEach(() => {
    props = createDummy();
  });

  it("checks if no planets are passed, only 'select' option is displayed", () => {
    const wrapper = shallow(<PlanetSelector {...props} />);
    expect(wrapper.find("option").length).toBe(1);
  });

  it("checks correct number of planets are filled in dropdown", () => {
    props = {
      ...props,
      selectPlanets: { value: [{ name: "mars" }, { name: "pluto" }] },
    };
    const wrapper = shallow(<PlanetSelector {...props} />);

    expect(wrapper.find("option").length).toBe(3);
  });

  it("checks if filteredPlanets is not empty then the filtered planets are shown", () => {
    props = {
      ...props,
      selectPlanets: { value: [{ name: "mars" }, { name: "pluto" }] },
      selectFilteredPlanets: [{ name: "mars" }],
    };
    const wrapper = shallow(<PlanetSelector {...props} />);

    expect(wrapper.find("option").length).toBe(2);
  });
});
