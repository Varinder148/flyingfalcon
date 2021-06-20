import { shallow } from "enzyme";
import { PlanetSelector } from "./planetSelector.component";

const createDummy = () => {
  let props = {
    selectorId: 1,
    showVehicles: true,
    setShowVehicles: jest.fn(),
    selectPlanets: [],
    selectFilteredPlanets: [],
    selectPlayerSelectedPlanets: [],
    addPlanet: jest.fn(),
    addVehicle: jest.fn(),
  };
  return { ...props };
};

describe("Planet Selector tests", () => {
  it("checks if no planets are passed only select option is displayed", () => {
    const props = createDummy();
    const wrapper = shallow(<PlanetSelector {...props} />);
    expect(wrapper.find("option").length).toBe(1);
  });

  it("checks correct number of planets are filled in dropdown", () => {
    let props = createDummy();
    props.selectPlanets = [{ name: "mars" },{name:"pluto"}];
    console.log(props.selectPlanets)
    console.log(wrapper.find("option").length)
    const wrapper = shallow(<PlanetSelector {...props} />);
    expect(wrapper.find("option").length).toBe(2);
  });



});
