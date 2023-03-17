import React from 'react'

import Container from "../../Components/Container";
import { Description, SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";
import { PATHS } from '../../Router';


export default function UnitInformation() {
  return (
    <>
      <Container title="معلومات الوحدات">
        <Description>
        اختر عدد الوحدات وأرقامها في كل تصنيف  
        </Description>
        <NextButt path={PATHS.LOCATION}/>
      </Container>    
      </>
  )
}
