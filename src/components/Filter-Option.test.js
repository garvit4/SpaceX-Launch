import React from "react";
import { cleanup } from "@testing-library/react";
import FilterOption from "./Filter-Option";
import { mount } from "enzyme";

import { QUERY_OPTIONS } from "../App.constant";

const yearArr = ["2006", "2007", "2008", "2009", "2010"];

describe("Filter Option Component with Launch Year Array", () => {
  afterEach(cleanup);
  const handleChange = jest.fn();
  const container = mount(
    <FilterOption
      arr={yearArr}
      query={QUERY_OPTIONS.launchYear}
      onChange={handleChange}
    ></FilterOption>
  );
  test("should have proper props for Filter Option Component", () => {
    expect(container.props("arr")).toBeDefined();
    expect(container.props("query")).toBeDefined();
    expect(container.props("onChange")).toBeDefined();
  });

  test("should have exact length of the buttons passed in arr", () => {
    expect(container.find("button").length).toEqual(5);
  });

  test("should simulate button click handler", () => {
    expect(container.find("button").first().text()).toBe(yearArr[0]);
    const ele = container.find("button").first();
    const params = {
      launch_year: yearArr[0],
    };
    ele.simulate("click");
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(params);
  });
});
