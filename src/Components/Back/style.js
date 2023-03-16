import styled from "styled-components";

export const BackBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Bath = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  & > p:first-of-type {
    color: ${(props) => props.theme.pallet.secondaryText};
  }
`;
