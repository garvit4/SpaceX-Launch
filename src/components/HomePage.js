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
  flex-basis: 80%;
  flex-direction: row;
  display: inline-flex;
  flex-wrap: wrap;
  margin-left: 20px;
  @media (max-width: 700px) {
    margin: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const FilterWrapper = styled.div`
  flex-basis: 20%;
`;
const FooterText = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 15px;
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
      <ContentWrapper>
        <FilterWrapper>
          <Filter onChange={handleCardArr} />
        </FilterWrapper>
        <CardWrapper>
          {respArr.map((item) => {
            return <Card cardObj={item} />;
          })}
        </CardWrapper>
      </ContentWrapper>
      <FooterText>
        <b>Developed by: </b> Garvit Arora
      </FooterText>
    </Wrapper>
  );
};
export default Homepage;
