import React, { useState } from "react";

import { PATHS } from "../../Router";

import Container from "../../Components/Container";
import NextButt from "../../Components/NextButt";
import UnitsCounter from "../../Components/UnitsCounter";

import { Category, CategoryDiv } from "./style";
import { Description, SupTitle } from "../../Components/Container/style";

import { useCategoryContext } from "../../Context/CartContext";

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
                className={category === item.key ? "selected" : ""}
                onClick={() => handleSelectCategory(item.key)}
              >
                {item.value}
              </Category>
            ))}
          </CategoryDiv>

          <UnitsCounter item={category} />
        </div>
        <NextButt
          disabled={category == null ? true : false}
          path={PATHS.LOCATION + `/${category}`}
        />
      </Container>
    </>
  );
}
