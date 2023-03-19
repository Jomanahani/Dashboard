import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";
import { PATHS } from "../../Router";
import { StyledCalendar } from "./style";

export default function Calendarr() {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        <NextButt path={PATHS.UNITINFORMATION} />
      </Container>
    </>
  );
}
