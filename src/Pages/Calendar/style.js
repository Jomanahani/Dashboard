import { Calendar } from "react-calendar";
import styled from "styled-components";

export const StyledCalendar = styled(Calendar)`
  width: 500px;
  border-radius: 1.5rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  font-size: 1.5rem;
  color: ${(props) => props.theme.pallet.primary};
  background-color: ${(props) => props.theme.pallet.Lines};

  &.react-calendar {
    background-color: ${(props) => props.theme.pallet.mainBackground};
    border: none;
    width: 95%;
    height: 390px;
  }

  .react-calendar__navigation {
    height: 3.5rem;
    border-bottom: 1px solid #f1f1f1;
    background-color: ${(props) => props.theme.pallet.Lines};
    border-radius: 1.5rem 1.5rem 0 0;
  }
  .react-calendar__month-view__weekdays__weekday {
    background-color: ${(props) => props.theme.pallet.Lines};
    text-decoration: none;
    border: 1px solid #f1f1f1;
    margin-top: 0;
  }
  .react-calendar__tile {
    border: 1px solid #f1f1f1;
    padding: 1rem;
  }

  .react-calendar__tile--active {
    background-color: rgba(216, 78, 103, 0.32);
  }
`;
