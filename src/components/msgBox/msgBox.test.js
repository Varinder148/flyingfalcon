import { shallow } from "enzyme";
import { MsgBox } from "./msgBox.component";

describe("MsgBox tests", () => {
  it("checks if passing msg is displayed", () => {
    const props = {
      selectResult: {
        value: "It works",
        error: "",
      },
    };
    const wrapper = shallow(<MsgBox {...props} />);
    expect(wrapper.find(".msg").text()).toEqual("It works");
  });
});
