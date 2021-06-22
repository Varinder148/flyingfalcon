import { shallow } from "enzyme";
import Header from "./header.component";

describe("Header tests", () => {
  it("checks if Header is correct", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
