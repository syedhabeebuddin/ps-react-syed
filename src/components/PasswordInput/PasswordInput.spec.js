import React from "react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("toggles input type when show/hide password clicked", () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      value=""
      onChange={() => {}}
      showVisibilityToggle
    />
  );

  //password input should have a type of password initially
  expect(wrapper.find({ type: "password" })).toHaveLength(1);
  expect(wrapper.find({ type: "text" })).toHaveLength(0);

  wrapper.find("a").simulate("click");

  //password input should have a type of text after cliking toggle
  expect(wrapper.find({ type: "password" })).toHaveLength(0);
  expect(wrapper.find({ type: "text" })).toHaveLength(1);
});

test("hides password quality by default", () => {
  const tree = renderer
    .create(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="aabbccddee"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
