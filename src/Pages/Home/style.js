import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 18rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  background-color: #eef1f5;
  color: #757a86;
  outline: none;
  border: 1px solid #eef1f5;
  padding: 0 2rem;
  font-size: 1.2rem;

  option {
    font-size: 1.3rem;
    padding: 15px 10px;
    color: ${(props) => props.theme.pallet.secondaryBackground};
  }

`;
export const SelectedOptions = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1rem 0;
`;
export const Category = styled.div`
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-radius: 1.5rem;
  box-shadow: 0px 2px 8px #ccc;
  padding: 0.5rem;
  width: 5rem;
`;
export const Remove = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 2.3rem;
  background-color: ${(props) => props.theme.pallet.secondaryBackground};
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;
