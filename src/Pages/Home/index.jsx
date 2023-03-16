import React from "react";
import Back from "../../Components/Back";
import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NavBar from "../../Components/NavBar";
import NextButt from "../../Components/NextButt";
import SideBar from "../../Components/SideBar";
import Steps from "../../Components/Steps";
import { Layout, Main } from "../../global/style";
import { StyledSelect } from "./style";

export default function Home() {
  const options = [
    { key: "Standard", value: "ستاندرد" },
    { key: "Delox", value: "ديلوكس" },
    { key: "premer", value: "بريمير" },
    { key: "Executive", value: "أجزاكتيف" },
  ];
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
            <StyledSelect name="categories" id="categories">
              {options.map((item) => (
                <option value={item.key}>{item.value}</option>
              ))}
            </StyledSelect>
            <SupTitle>التصنيفات المختارة</SupTitle>
            <NextButt />
          </Container>
        </Main>
      </Layout>
    </>
  );
}
