import React, { useState } from "react";
import styled from "styled-components";
import FilterOption from "./Filter-Option";
import { BOOLEAN_FILTER_ARR, QUERY_OPTIONS, BASE_URL } from "../App.constant";

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 200px;
  padding-bottom: 40px;
  padding-top: 3px;
  @media (max-width: 700px) {
    width: 300px;
  }
  @media (min-width: 870px) and (max-width: 1023px) {
    width: 205px;
  }
  @media (min-width: 1024px) {
    width: 175px;
  }
  @media (min-width: 1200px) {
    width: 220px;
  }
`;

const CardHeader = styled.h4`
  margin: 10px;
`;

const CardSubHeader = styled.h5`
  margin: 10px;
  text-decoration: underline;
  text-align: center;
`;

const Filter = (props) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const calcFilterArr = () => {
    const tempLaunchArr = [];
    for (let i = 2006; i <= 2020; i++) {
      tempLaunchArr.push(i);
    }
    return tempLaunchArr;
  };

  const constructAPIUrl = (filters) => {
    if (filters) {
      let queryStr = "";
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          const lowerVal = `${filters[key]}`.toLowerCase();
          queryStr += `&${key}=${lowerVal}`;
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
      props.onChange(url);
    }
  };
  return (
    <Card>
      <CardHeader>Filters</CardHeader>
      <CardSubHeader>Launch Year</CardSubHeader>
      <div>
        <FilterOption
          arr={calcFilterArr()}
          query={QUERY_OPTIONS.launchYear}
          onChange={handleFilterChange}
        />
      </div>
      <CardSubHeader>Successful Launch</CardSubHeader>
      <div>
        <FilterOption
          arr={BOOLEAN_FILTER_ARR}
          query={QUERY_OPTIONS.launchSuccess}
          onChange={handleFilterChange}
        />
      </div>
      <CardSubHeader>Successful Landing</CardSubHeader>
      <div>
        <FilterOption
          arr={BOOLEAN_FILTER_ARR}
          query={QUERY_OPTIONS.landSuccess}
          onChange={handleFilterChange}
        />
      </div>
    </Card>
  );
};
export default Filter;
