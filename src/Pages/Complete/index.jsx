import React from "react";
import { useParams } from "react-router";

import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";

import { useCategoryContext } from "../../Context/CartContext";
import { PATHS } from "../../Router";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const CompleteIcon = styled.div`
  font-size: 5rem;
  color: #00a91b;
  margin-left: 1rem;
`;
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
    <Container title={`${name.value} (تصنيف ${itemIndex} من ${length})`}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <CompleteIcon>
          <IoCheckmarkCircleOutline />
        </CompleteIcon>
        <div>
          <SupTitle>
            تم إضافة تفاصيل (تصنيف {itemIndex} من {length}) {name.value}
          </SupTitle>
          <Description>
            لقد قمت بإضافة تفاصيل التصنيف بنجاح، بإمكانك الإستمرار ومتابعة إضافة
            تفاصيل التصنيف الثاني أو بإمكانك الخروج الأن والعودة لاحقاً لمتابعة
            إضافة عقارك عن طريق المسودة
          </Description>
        </div>
      </div>
      <NextButt
        path={isCompleted(categories) ? PATHS.ALLCATEGORIES : PATHS.UNITINFORMATION}
      />
    </Container>
  );
}
