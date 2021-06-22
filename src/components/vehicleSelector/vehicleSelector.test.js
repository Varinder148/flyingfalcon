import { shallow } from "enzyme";
import { VehicleSelector } from "./vehicleSelector.component";

const createDummy = () => {
  let props = {
    selectorId: 1,
    addVehicle: jest.fn(),
    selectVehicles: { value: [] },
    selectFilteredVehicles: { 2: [] },
    selectPlayerSelectedVehicles: [],
    selectAvailableVehicleCount: [],
  };
  return { ...props };
};

describe("Vehicle Selector tests", () => {
  let props = null;
  beforeEach(() => {
    props = createDummy();
  });

  it("checks if all radio buttons and labels are being rendered", () => {
    props.selectVehicles.value.push({ name: "Ferrari" });
    const wrapper = shallow(<VehicleSelector {...props} />);
    console.log(wrapper);
    expect(wrapper.find('input[type="radio"]').length).toBe(1);
  });

  it("checks if filteredVehicles with this selectorId is not empty then the filteredVehicles is shown", () => {
    props = {
      ...props,
      selectFilteredVehicles: { 1: [{ name: "ferrari" }, { name: "mustang" }] },
    };
    const wrapper = shallow(<VehicleSelector {...props} />);
    expect(wrapper.find('input[type="radio"]').length).toBe(2);
  });

  it("checks if the disabling of radio buttons is working properly", () => {
    props = {
      ...props,
      selectFilteredVehicles: {
        1: [
          { name: "ferrari", total_no: 1 },
          { name: "mustang", total_no: 3, disabled: true },
        ],
      },
      selectAvailableVehicleCount: [{ name: "ferrari", total_no: 0 }],
    };
    const wrapper = shallow(<VehicleSelector {...props} />);
    const radioButtons = wrapper.find('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
      expect(radioButton.prop("disabled")).toBe(true);
    });
  });

  it("checks if the disabling of radio buttons is working properly when nothing without disabled attribute", () => {
    props = {
      ...props,
      selectFilteredVehicles: {
        1: [
          { name: "ferrari", total_no: 1 },
          { name: "mustang", total_no: 3 },
        ],
      },
      selectAvailableVehicleCount: [{ name: "ferrari", total_no: 0 }],
    };
    const wrapper = shallow(<VehicleSelector {...props} />);
    const radioButtons = wrapper.find('input[type="radio"]');
    radioButtons.forEach((radioButton, idx) => {
      let ans;
      if (idx === 0) ans = true;
      else ans = false;
      expect(radioButton.prop("disabled")).toBe(ans);
    });
  });
});
