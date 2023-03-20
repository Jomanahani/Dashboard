import React, { useState } from "react";

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

  const [category, setCategory] = useState(null);

  const handleSelectCategory = (item) => {
    setCategory(item);
  };
  return (
    <>
      <Container title="معلومات الوحدات">
        <Description>اختر عدد الوحدات وأرقامها في كل تصنيف</Description>
        <div style={{ display: "flex" }}>
          <CategoryDiv>
            <SupTitle>التصنيفات </SupTitle>
            {categories.map((item) => (
              <Category
               key={item.key}
               className={category===item.key?'selected':""} 
               onClick={()=>handleSelectCategory(item.key)}>
                {item.value}
              </Category>
            ))}
          </CategoryDiv>

          <UnitsCounter item={category}/>
        </div>
        <NextButt path={PATHS.LOCATION + `/${category}`} />
      </Container>
    </>
  );
}
