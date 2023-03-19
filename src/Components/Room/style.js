import styled from "styled-components";

export const RoomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.pallet.secondaryBackground};
  padding: 0 1rem;
  padding-top: 1rem;
  & > p.title {
    font-weight: 700;
  }
  & > p.remove {
    cursor: pointer;
  }
`;
export const RoomDetail = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.pallet.Lines};
  padding: 0 1rem;
  & > div {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.pallet.primary};
    font-weight: 600;
    margin: 0.5rem 0;
  }
`;
