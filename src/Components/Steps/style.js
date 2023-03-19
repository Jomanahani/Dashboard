import styled from "styled-components";

export const UserFlow = styled.aside`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${(props) => props.theme.pallet.Lines};
  & > div {
    margin: 2rem auto;
  }
`;
export const StepItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  & > div:first-of-type {
    &::after {
      content: "";
      position: relative;
      top: 2rem;
      left: 3px;
      height: 1rem;
      border-left: 3px solid #ccc;
      z-index: -1;
    }
  }

  &:last-of-type {
    & > div::after {
      content: "";
      height: 0rem;
    }
  }
`;

export const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#D84E67" : "#F1F1F1")};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
`;

export const Label = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.primary};
  font-weight: 500;
  margin: 0 0.5rem;
`;

export const SubStepContainer = styled.div`
  margin-right: 3rem;
`;

export const SubStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > div:first-of-type {
    &::after {
      content: "";
      position: relative;
      top: 1.7rem;
      left: 3px;
      height: 1rem;
      border-left: 3px solid #ccc;
      z-index: -1;
    }
  }

  &:last-of-type {
    & > div::after {
      content: "";
      height: 0rem;
    }
  }
`;

export const SubStepCircle = styled(Circle)`
  height: 2.5rem;
  width: 2.5rem;
`;

export const SubStepLabel = styled(Label)`
  font-size: 16px;
  margin-left: 5px;
`;
