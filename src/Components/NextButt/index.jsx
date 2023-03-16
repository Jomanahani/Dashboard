import React from "react";
import styled from "styled-components";

const Next = styled.button`
  background-color: ${(props) => props.theme.pallet.secondaryBackground};
  color: ${(props) => props.theme.pallet.mainBackdround};
  width: 9rem;
  height: 2.8rem;
  font-size: 1.3rem;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  cursor: pointer;
  
  &:hover {
    background-color: #cb7383;
  }
`;
export default function NextButt() {
  return <Next>التالي </Next>;
}
