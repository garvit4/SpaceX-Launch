import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterOption from "./Filter-Option";
import { BOOLEAN_FILTER_ARR, QUERY_OPTIONS, BASE_URL } from "../App.constant";

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 270px;
  padding-bottom: 40px;
  padding-top: 3px;
  @media (max-width: 700px) {
    width: 310px;
  }
`;

const CardHeader = styled.h3`
  margin-left: 10px;
`;

const CardSubHeader = styled.h5`
  margin: 10px;
  text-decoration: underline;
  text-align: center;
`;

const WrapOptions = styled.div`
  padding: 0px 15px;
`;

const Filter = (props) => {
  const [launchArr, setLaunchArr] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    const tempLaunchArr = [];
    for (let i = 2006; i <= 2020; i++) {
      tempLaunchArr.push(i);
    }
    setLaunchArr(tempLaunchArr);
  }, []);

  const constructAPIUrl = (filters) => {
    if (filters) {
      let queryStr = "";
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          queryStr += `&${key}=${filters[key]}`;
        }
      }
      return `${BASE_URL}${queryStr}`;
    }
  };

  const handleFilterChange = (data) => {
    if (data) {
      const combineObj = Object.assign(selectedFilters, data);
      setSelectedFilters(combineObj);
      const url = constructAPIUrl(selectedFilters);
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          props.onChange(json);
        });
    }
  };
  return (
    <Card>
      <CardHeader>Filters</CardHeader>
      <CardSubHeader>Launch Year</CardSubHeader>
      <WrapOptions>
        <FilterOption
          arr={launchArr}
          query={QUERY_OPTIONS.launchYear}
          onChange={handleFilterChange}
        />
      </WrapOptions>
      <CardSubHeader>Successful Launch</CardSubHeader>
      <WrapOptions>
        <FilterOption
          arr={BOOLEAN_FILTER_ARR}
          query={QUERY_OPTIONS.launchSuccess}
          onChange={handleFilterChange}
        />
      </WrapOptions>
      <CardSubHeader>Successful Landing</CardSubHeader>
      <WrapOptions>
        <FilterOption
          arr={BOOLEAN_FILTER_ARR}
          query={QUERY_OPTIONS.landSuccess}
          onChange={handleFilterChange}
        />
      </WrapOptions>
    </Card>
  );
};
export default Filter;
