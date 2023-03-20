import React from "react";
import styled from "styled-components";

const CategoryDetail = styled.div`
  height: 10rem;
  width: 20rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  color: ${(props) => props.theme.pallet.secondaryText};
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 1.5rem;
`;
export default function Category() {
  return <CategoryDetail></CategoryDetail>;
}
