import React from "react";

import { IoIosClose } from "react-icons/io";

// components
import Back from "../../Components/Back";
import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NavBar from "../../Components/NavBar";
import NextButt from "../../Components/NextButt";
import SideBar from "../../Components/SideBar";
import Steps from "../../Components/Steps";

// context
import { useCategoryContext } from "../../Context/CartContext";

// style
import { Layout, Main } from "../../global/style";
import { Category, Remove, SelectedOptions, StyledSelect } from "./style";

export default function Home() {
  const {
    state: { categories },
    addCategory,
    removeCategory,
  } = useCategoryContext();

  console.log("state", categories);
  const options = ["ستاندرد", "ديلوكس", "بريمير", "أجزاكتيف"];

  const handleSelectChange = (event) => {
    console.log("add", event.target.value);
    addCategory(event.target.value);
  };

  const ExistedCategory = (item) =>
    categories.find((Category) => Category === item);

  const handleRemove = (item) => {
    removeCategory(item);
    console.log(item);
  };
  return (
    <>
      <Layout>
        <NavBar />
        <SideBar />
        <Steps />
        <Main>
          <Back />
          <Container title="إختر التصنيفات المتوفرة في عقارك">
            <Description>
              إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات
              خاصة بك
            </Description>
            <StyledSelect
              name="categories"
              id="categories"
              onChange={handleSelectChange}
            >
              <option></option>
              {options.map(
                (item) =>
                  !ExistedCategory(item) && <option value={item}>{item}</option>
              )}
            </StyledSelect>
            <SupTitle>التصنيفات المختارة</SupTitle>
            <SelectedOptions>
              {categories.map((item) => (
                <>
                  <Category>{item}</Category>
                  <Remove onClick={() => handleRemove(item)}>
                    <IoIosClose />
                  </Remove>
                </>
              ))}
            </SelectedOptions>
            <NextButt />
          </Container>
        </Main>
      </Layout>
    </>
  );
}
