import React, { useState } from "react";

import { useParams } from "react-router";
import { PATHS } from "../../Router";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";

import { StyledCalendar } from "./style";
import "react-calendar/dist/Calendar.css";
import { useCategoryContext } from "../../Context/CartContext";

export default function Calendarr() {
  const {
    state: { categories },
    addDate,
  } = useCategoryContext();

  const Category = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    addDate(Category.id, selectedDate.toLocaleDateString("en-US"));
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
