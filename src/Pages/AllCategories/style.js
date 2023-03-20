import styled from "styled-components";
import { ActionTitle } from "../../Components/Container/style";
import { UnitsContainer } from "../../Components/UnitsCounter/style";

export const CategoriesContainer = styled(UnitsContainer)`
  overflow-y: visible;
  max-height: none;
`;
export const CategoyDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 40%;
  max-height: none;
  border: 1px solid ${(props) => props.theme.pallet.Lines};
  border-radius: 1.5rem;
  padding: 1rem;
  overflow: visible;
  gap: 0;

  & > div {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    align-items: center;
    gap: 1.5rem;
  }
`;
export const CategoyTitle = styled(ActionTitle)`
  font-size: 1rem;
  padding: 0;
  padding-bottom: 0.5rem;
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.pallet.DarkGray};
  font-size: 1.5rem;
  & > p {
    font-size: 1rem;
  }
`;
