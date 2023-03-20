import React, { useState } from "react";

import { useParams } from "react-router";
import { PATHS } from "../../Router";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";

import { StyledCalendar } from "./style";
import "react-calendar/dist/Calendar.css";

export default function Calendarr() {
  const Category = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  let MatchingDate =
    selectedDate.toLocaleDateString("en-US") ===
    new Date().toLocaleDateString("en-US")
      ? true
      : false;

  return (
    <>
      <Container title="التقويم">
        <StyledCalendar
          locale="ar"
          onChange={handleDateChange}
          value={selectedDate}
        />
        {/* {selectedDate.toLocaleDateString("en-US")} */}
        <NextButt
          disabled={MatchingDate}
          path={PATHS.DETAILS + `/${Category.id}`}
        />
      </Container>
    </>
  );
}
