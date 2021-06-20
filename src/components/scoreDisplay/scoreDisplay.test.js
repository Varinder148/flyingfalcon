import { shallow } from "enzyme";
import { ScoreDisplay } from "./scoreDisplay.component";

describe("ScoreDisplay tests", () => {
  it("checks if no score is passed, 0 is displayed", () => {
    const wrapper = shallow(<ScoreDisplay />);
    expect(wrapper.text()).toContain("0");
  });

  it("checks if score is passed, score is displayed", () => {
    const props = {
      selectTimeTaken: 20,
    };
    const wrapper = shallow(<ScoreDisplay {...props} />);
    expect(wrapper.text()).toContain("20");
  });
});
