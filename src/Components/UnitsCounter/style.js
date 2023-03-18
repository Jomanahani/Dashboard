import styled from "styled-components";

export const CounterHead = styled.div`
  max-height: 4rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  border-bottom: 2px solid ${(props) => props.theme.pallet.Lines};
  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
export const CounterButt = styled.button`
  width: 2rem;
  height: 2rem;
  border: 1px solid ${(props) => props.theme.pallet.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  background-color: ${(props) => props.theme.pallet.mainBackdround};
  cursor: pointer;
`;
export const CounterValue = styled.div`
  width: 6rem;
  height: 3rem;
  background-color: #fafafa;
  border: 1px solid #eef1f5;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #757a86;
`;
export const UnitsNumber = styled.div`
  padding: 0.5rem 1rem;
`;
export const UnitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-height: 11rem;
  overflow-y: scroll;
`;
export const Unit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > p {
    color: ${(props) => props.theme.pallet.primary};
  }
`;
