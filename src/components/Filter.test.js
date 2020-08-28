import React from "react";
import { cleanup } from "@testing-library/react";
import Filter from "./Filter";
import { shallow } from "enzyme";

describe("Filter Component with shallow test", () => {
  afterEach(cleanup);
  const container = shallow(<Filter />);
  test("should have proper props for Filter Component", () => {
    expect(container.props("onChange")).toBeDefined();
  });

  test("should have Called FilterOption Component", () => {
    expect(container.find("FilterOption").length).toEqual(3);
  });
});
