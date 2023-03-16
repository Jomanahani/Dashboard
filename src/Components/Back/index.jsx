import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import BorderdText from "../BorderdText";
import { BackBar, Bath } from "./style";

export default function Back() {
  return (
    <BackBar>
      <Bath>
        <p>الرئيسية</p>
        <IoIosArrowBack />
        <p>إضافة عقار جديد</p>
      </Bath>
      <BorderdText back text="العودة إلى الرئيسية" />
    </BackBar>
  );
}
