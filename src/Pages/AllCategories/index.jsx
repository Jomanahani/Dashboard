import React from "react";

import Container from "../../Components/Container";
import { useCategoryContext } from "../../Context/CartContext";

import { CategoriesContainer, CategoyDiv, CategoyTitle, Data } from "./style";
import { GrLocation } from "react-icons/gr";
import { MdOutlineKingBed } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiSpace } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

export default function AllCategories() {
  const {
    state: { categories },
  } = useCategoryContext();

  return (
    <Container title="نتائج الإضافة">
      <CategoriesContainer>
        {categories.map((object) => (
          <CategoyDiv key={object.key}>
            <CategoyTitle>{object.value}</CategoyTitle>
            <div>
              <Data>
                <GrLocation /> <p>{object.location}</p> 
              </Data>
              <Data>
                <RiSpace /> <p>مساحة الوحدة{object.space}  م²</p>
              </Data>
              <Data>
                <MdOutlineKingBed /> <p>{object.roomNum} غرف نوم</p>
              </Data>
              <Data>
                <BiCalendar /> <p>{object.date}</p>
              </Data>
              <Data>
                <AiOutlineHome /> <p>{object.unitsNum} وحدات</p>
              </Data>
            </div>
          </CategoyDiv>
        ))}
      </CategoriesContainer>
    </Container>
  );
}
