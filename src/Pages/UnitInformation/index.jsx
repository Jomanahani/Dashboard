import React from "react";

import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";
import UnitsCounter from "../../Components/UnitsCounter";
import { useCategoryContext } from "../../Context/CartContext";
import { PATHS } from "../../Router";
import { Category, CategoryDiv } from "./style";

export default function UnitInformation() {
  const {
    state: { categories },
  } = useCategoryContext();

  return (
    <>
      <Container title="معلومات الوحدات">
        <Description>اختر عدد الوحدات وأرقامها في كل تصنيف</Description>
        <div style={{display:"flex"}}>
          <CategoryDiv>
        <SupTitle>التصنيفات </SupTitle>
        {categories.map((item)=>(
          <Category key={item.key}>
            {item.value}
          </Category>
        ))

        }
          </CategoryDiv>

          <UnitsCounter />
        </div>
        <NextButt path={PATHS.LOCATION} />
      </Container>
    </>
  );
}
