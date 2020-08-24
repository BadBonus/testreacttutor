import React from "react";
import { shallow } from "enzyme";
import Ticket from "./Ticket";

it("should increment total when clicking button", () => {
  const wrapper = shallow(<Ticket />);

  const button = wrapper.find('button');
  const total1 = wrapper.find('h2.total').text();

  button.simulate('click');

  const total2 = wrapper.find('h2.total').text();

  expect(total1).toBe("0");
  expect(total2).toBe("1");
});


it("should render ticket name in title", () => {
  const wrapper = shallow(<Ticket name='TESTTEST ticket'/>);

  const propName = wrapper.find('h2.Ticket__title').text();

  expect(propName).toBe("TESTTEST ticket");
});
