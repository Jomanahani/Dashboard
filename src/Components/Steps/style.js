import styled from "styled-components";

export const UserFlow = styled.aside`
  border-left:  2px solid ${(props) => props.theme.pallet.Lines};
`;

export const StepsWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Step = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "green" : "white")};
  border: 2px solid green;
`;

export const Check = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: green;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

export const Name = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? "green" : "gray")};
`;

export const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: green;
  margin-left: 14px;
  margin-right: 6px;
  visibility: ${(props) => (props.last ? "hidden" : "visible")};
`;