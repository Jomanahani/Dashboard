import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
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
      <Link to={PATHS.HOME}>
      <BorderdText back text="العودة إلى الرئيسية" />
      </Link>
    </BackBar>
  );
}
