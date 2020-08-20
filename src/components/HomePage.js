import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Card from "./Card";
import { BASE_URL } from "../App.constant";

const Wrapper = styled.div`
  background-color: #ececec;
  padding: 30px;
`;
const PageHeader = styled.h3`
  margin-left: 10px;
`;

const CardWrapper = styled.div`
  flex: 0.7;
  flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterWrapper = styled.div`
  flex: 0.3;
`;

const Homepage = () => {
  const [respArr, setRespArr] = useState([]);
  const handleCardArr = (arr) => {
    setRespArr(arr);
  };

  const getData = () => {
    let url = BASE_URL;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRespArr(json);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <PageHeader> SpaceX Launch Programs</PageHeader>
      <ContentWrapper className="flex-container">
        <FilterWrapper>
          <Filter onChange={handleCardArr} />
        </FilterWrapper>
        <CardWrapper>
          {respArr.map((item) => {
            return <Card cardObj={item} />;
          })}
        </CardWrapper>
      </ContentWrapper>
      <footer>Developed by: Garvit Arora</footer>
    </Wrapper>
  );
};
export default Homepage;
