import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 330px) {
    margin: 10px;
    padding: 0;
  }
  @media (min-width: 330px) and (max-width: 700px) {
    margin: 10px;
    padding: 0px 10px;
  }
  @media (min-width: 1024px) {
    margin: 0px 6px;
  }
`;

const FilterButton = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 7px;
  margin: 10px;
  border: none;
  outline: none;

  @media (max-width: 700px) {
    width: 70px;
    height: 30px;
    margin: 10px 20px 10px 20px;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    width: 70px;
    height: 30px;
    margin: 10px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 50px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    width: 70px;
    height: 30px;
  }
`;

const FilterOption = (props) => {
  const [selected, setSelected] = useState("");
  const { arr, query } = props;

  const handleButtonClick = (item) => {
    setSelected(item);
    props.onChange({
      [query]: item,
    });
  };

  return (
    <Wrapper>
      {arr.map((item) => {
        return (
          <FilterButton
            key={item}
            onClick={() => handleButtonClick(item)}
            style={{
              backgroundColor: selected === item ? "#7cba01" : "#c5e09b",
            }}
          >
            {item}
          </FilterButton>
        );
      })}
    </Wrapper>
  );
};

export default FilterOption;
