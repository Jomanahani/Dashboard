import styled from "styled-components";

export const ActionCont = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  border-radius: 1rem;
  box-shadow: 0px 2px 8px #ccc;
  margin: 3rem auto;

  &>div{
    padding: 1rem 1.5rem;
  }
`;

export const ActionTitle = styled.h3`
  color: ${(props) => props.theme.pallet.primary};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme.pallet.Lines};
`;
export const Description = styled.p`
padding: 0.5rem 0;
  color: ${(props) => props.theme.pallet.secondary};
`;

export const SupTitle = styled.p`
padding: 0.5rem 0;
font-weight: 600;
font-size: 1.1rem;
  color: ${(props) => props.theme.pallet.primary};
`;