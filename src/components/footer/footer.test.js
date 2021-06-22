import { shallow } from "enzyme";
import Footer from "./footer.component";

describe("Footer tests", () => {
  it("checks if footer is correct", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
