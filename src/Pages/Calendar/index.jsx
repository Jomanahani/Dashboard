import React, { useState } from "react";

import { useParams } from "react-router";
import { PATHS } from "../../Router";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";

import { StyledCalendar } from "./style";
import "react-calendar/dist/Calendar.css";

export default function Calendarr() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const Category = useParams();

  const handleDateChange = (date) => {
    console.log(date.toLocaleDateString("en-US"));
    setSelectedDate(date);
  };

  return (
    <>
      <Container title="التقويم">
        <StyledCalendar
          locale="ar"
          onChange={handleDateChange}
          value={selectedDate}
        />
        {/* {selectedDate.toLocaleDateString("en-US")} */}
        <NextButt path={PATHS.DETAILS +`/${Category.id}`} />
      </Container>
    </>
  );
}
