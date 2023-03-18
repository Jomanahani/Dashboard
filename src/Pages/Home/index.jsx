import React from "react";

import { IoIosClose } from "react-icons/io";

// components
import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";

// context
import { useCategoryContext } from "../../Context/CartContext";
import { PATHS } from "../../Router";

// style
import { Category, Remove, SelectedOptions, StyledSelect } from "./style";

export default function Home() {
  const {
    state: { categories },
    addCategory,
    removeCategory,
  } = useCategoryContext();

  console.log("state", categories);
  const options = [
    { key: "Standard", value: "ستاندرد" },
    { key: "Deluxe", value: "ديلوكس" },
    { key: "premiere", value: "بريمير" },
    { key: "Executive", value: "أجزاكتيف" },
  ];

  const handleSelectChange = (event) => {
    const Selected = options.find((Category) => Category.key === event.target.value);
    addCategory(Selected);
  };

  const ExistedCategory = (item) =>
    categories.find((Category) => Category.value === item);

  const handleRemove = (item) => {
    removeCategory(item);
  };
  return (
    <>
      <Container title="إختر التصنيفات المتوفرة في عقارك">
        <Description>
          إختر التصنيفات المتوفرة في عقارك من القائمة أو قم بإضافة تصنيفات خاصة
          بك
        </Description>
        <StyledSelect
          name="categories"
          id="categories"
          onChange={handleSelectChange}
        >
          <option></option>
          {options.map(
            (item) =>
              !ExistedCategory(item.value) && <option value={item.key} key={item.key}>{item.value}</option>
          )}
        </StyledSelect>
        <SupTitle>التصنيفات المختارة</SupTitle>
        <SelectedOptions>
          {categories.map((item) => (
            <React.Fragment key={item.key}>  
              <Category >{item.value}</Category>
              <Remove onClick={() => handleRemove(item)}>
                <IoIosClose />
              </Remove>
            </React.Fragment>
          ))}
        </SelectedOptions>
        <NextButt path={PATHS.UNITINFORMATION} />
      </Container>
    </>
  );
}
