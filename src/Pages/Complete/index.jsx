import React from "react";
import { useParams } from "react-router";

import Container from "../../Components/Container";
import { SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";

import { useCategoryContext } from "../../Context/CartContext";
import { PATHS } from "../../Router";

import { IoCheckmarkCircleOutline } from "react-icons/io";

export default function Complete() {
  const Category = useParams();

  const {
    state: { categories },
    isCompleted,
  } = useCategoryContext();

  const name = categories.find((item) => item.key === Category.id);
  const itemIndex = categories.indexOf(name) + 1;
  const length = categories.length;

  return (
    <Container title="تفاصيل">
      <SupTitle>
        {" "}
        {name.value} (تصنيف {itemIndex} من {length})
      </SupTitle>
      <IoCheckmarkCircleOutline />
      <NextButt
        path={isCompleted ? PATHS.ALLCATEGORIES : PATHS.UNITINFORMATION}
      />
    </Container>
  );
}
