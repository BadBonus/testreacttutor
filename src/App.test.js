import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Footer from "./Footer";
import Ticket from "./Footer";



it("should render ticket and footer", () => {
  const wrapper = shallow(<App />);

  const footer = wrapper.find(Footer);
  const ticket = wrapper.find(Ticket);

  expect(footer.exists()).toBe(true);
  expect(ticket.exists()).toBe(true);

});
