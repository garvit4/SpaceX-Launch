import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "./Filter";

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 30px;
`;
const PageHeader = styled.h3`
  margin-left: 10px;
`;

const Homepage = () => {
  const [respArr, setRespArr] = useState([]);
  const handleCardArr = (arr) => {
    setRespArr(respArr);
  };
  return (
    <Wrapper>
      <PageHeader> SpaceX Launch Programs</PageHeader>
      <Filter onChange={handleCardArr} />
    </Wrapper>
  );
};
export default Homepage;
