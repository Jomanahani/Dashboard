import styled from "styled-components";

export const Aside = styled.aside`
  height: 100vh;
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3% 0;
  border-left: 2px solid ${(props) => props.theme.pallet.Lines};
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.secondaryText};
  font-size: 1.4rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.8rem;
  }
`;
export const Square = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme.pallet.secondaryText};
  margin: 0 auto;
  margin-top: 1.5rem;
`;
