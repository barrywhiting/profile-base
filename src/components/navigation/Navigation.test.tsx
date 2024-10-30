import { render, screen } from "@testing-library/react";

import Navigation from "./Navigation";
import React from "react";

test("renders navigation", () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders snapshot', () => {
  const wrapper = render(<Navigation />);
  expect(wrapper).toMatchSnapshot();
});
