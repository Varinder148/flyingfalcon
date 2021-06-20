import { shallow } from "enzyme";
import { NavbarMenu } from "./navbarMenu.component";

describe("Navbar tests", () => {
  it("checks if navbar is displayed", () => {
    const wrapper = shallow(<NavbarMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
