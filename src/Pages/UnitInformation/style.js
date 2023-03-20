import styled from "styled-components";

export const Category = styled.button`
  width: 90%;
  height: 3.3rem;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border: none;
  outline: none;
  border-radius: 1.5rem;
  box-shadow: 0px 2px 8px #ccc;
  color: ${(props) => props.theme.pallet.primary};
  font-size: 1.2rem;
  text-align: right;
  padding: 1rem 2rem;
  cursor: pointer;

  &.selected{
    border: 2px solid ${(props) => props.theme.pallet.secondaryBackground};
  }
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 35%;
  border-left: 2px solid ${(props) => props.theme.pallet.Lines};
  padding-bottom:1.5rem ;
  margin-bottom: 1rem;
`;
