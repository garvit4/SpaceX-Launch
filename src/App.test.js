import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);
test("should render page title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SpaceX /i);
  expect(linkElement).toBeInTheDocument();
});
