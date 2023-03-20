import styled from "styled-components";
import {
  CounterHead,
  UnitsContainer,
} from "../../Components/UnitsCounter/style";

export const SpaceInput = styled.input`
  width: 30%;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  background-color: #fafafa;
  border: 1px solid #eef1f5;
  border-radius: 1.5rem;
`;
export const RoomCounter = styled(CounterHead)`
  border-top: 1px solid ${(props) => props.theme.pallet.Lines};
  border-bottom: none;
`;
export const RoomsContainer = styled(UnitsContainer)`
  flex-direction: column;
  flex-wrap: nowrap;
  max-height: 14rem;
  gap: 0;
  margin-bottom: 1rem;
`;
