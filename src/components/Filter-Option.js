import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FilterButton = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 10px;
  margin: 10px;
  border: none;
  outline: none;
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
