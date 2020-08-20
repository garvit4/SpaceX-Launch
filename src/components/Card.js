import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 0px 20px 20px 0;
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 200px;
  height: 370px;
  @media (max-width: 700px) {
    margin: 20px 0;
    width: 100%;
  }
`;

const FlexRows = styled.div`
  display: flex;
  margin-bottom: 5px;
  justify-content: center;
  border-radius: 5px;
`;

const ImageSrc = styled.img`
  width: 170px;
  height: 220px;
`;

const ImageContainer = styled.div`
  background-color: #f2f2f2;
`;

const Title = styled.h4`
  width: 200px;
  color: #7177ae;
  margin: 2px 10px;
`;

const MissionTitle = styled.h4`
  color: #191919;
  margin: 2px 10px;
`;

const MissionIdUl = styled.ul`
  margin: 4px 0px;
`;

const MissionIdli = styled.li`
  color: #7177ae;
  font-size: 14px;
`;

const FilterRows = styled.h4`
  font-size: 14px;
  margin: 3px 0px 3px 10px;
`;

const FilterValue = styled.span`
  color: #7177ae;
  margin-left: 3px;
`;

const Card = (props) => {
  console.log(props, "--> props inside Card");
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
            return <MissionIdli>{id}</MissionIdli>;
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
          {cardObj["launch_landing"] && "" + cardObj["launch_landing"]}
        </FilterValue>
      </FilterRows>
    </Wrapper>
  );
};
export default Card;
