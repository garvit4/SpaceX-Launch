import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 0px 20px 20px 0;
  display: flex;
  padding: 15px;
  flex-direction: column;
  width: 150px;
  height: 330px;
  @media (max-width: 330px) {
    width: 88%;
    height: 380px;
    margin: 10px 0 0 0;
  }
  @media (min-width: 330px) and (max-width: 700px) {
    width: 100%;
    height: 380px;
    margin: 20px 0;
  }
  @media (min-width: 870px) and (max-width: 1024px) {
    width: 210px;
    height: 350px;
  }
  @media (min-width: 1024px) {
    margin: 10px;
    padding: 10px;
  }
  @media (min-width: 1200px) {
    width: 180px;
    height: 350px;
  }
  @media (min-width: 1420px) {
    margin-right: 1.8em;
  }
`;

const FlexRows = styled.div`
  display: flex;
  margin-bottom: 5px;
  justify-content: center;
  border-radius: 5px;
`;

const ImageSrc = styled.img`
  width: 150px;
  height: 150px;
  @media (max-width: 330px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 330px) and (max-width: 700px) {
    width: 250px;
    height: 220px;
  }
  @media (min-width: 870px) and (max-width: 1024px) {
    width: 200px;
    height: 210px;
  }
  @media (min-width: 1200px) {
    width: 170px;
    height: 200px;
  }
`;

const ImageContainer = styled.div`
  background-color: #f2f2f2;
`;

const Title = styled.h5`
  color: #7177ae;
  margin: 2px 10px;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

const MissionTitle = styled.h6`
  color: #191919;
  margin: 2px 10px;
  @media (max-width: 700px) {
    font-size: 0.8em;
  }
`;

const MissionIdUl = styled.ul`
  margin: 4px 0px;
`;

const MissionIdli = styled.li`
  color: #7177ae;
  font-size: 0.8em;
`;

const FilterRows = styled.h4`
  font-size: 0.8em;
  margin: 3px 0px 3px 10px;
`;

const FilterValue = styled.span`
  color: #7177ae;
  margin-left: 3px;
`;

const Card = (props) => {
  const { cardObj } = props;
  return (
    <Wrapper>
      <FlexRows>
        <ImageContainer>
          <ImageSrc src={cardObj.links["mission_patch"]} />
        </ImageContainer>
      </FlexRows>
      <Title>{cardObj["mission_name"] + " #" + cardObj["flight_number"]}</Title>
      <MissionTitle>Mission Ids:</MissionTitle>
      <MissionIdUl>
        {cardObj["mission_id"].length ? (
          cardObj["mission_id"].map((id) => {
            return <MissionIdli key={id}>{id}</MissionIdli>;
          })
        ) : (
          <MissionIdli>Not Available</MissionIdli>
        )}
      </MissionIdUl>
      <FilterRows>
        Launch Year: <FilterValue>{cardObj["launch_year"]}</FilterValue>
      </FilterRows>
      <FilterRows>
        Successful Launch:
        <FilterValue>{"" + cardObj["launch_success"]}</FilterValue>
      </FilterRows>
      <FilterRows>
        Successful Landing:
        <FilterValue>
          {cardObj["rocket"]["first_stage"]["cores"][0]["land_success"] === null
            ? "None"
            : `${cardObj["rocket"]["first_stage"]["cores"][0]["land_success"]}`}
        </FilterValue>
      </FilterRows>
    </Wrapper>
  );
};
export default Card;
