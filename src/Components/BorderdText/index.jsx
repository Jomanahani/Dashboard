import React from "react";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Borderd = styled.p`
  width: 12rem;
  height: 2.5rem;
  border: 1px solid ${(props) => props.theme.pallet.Borders};
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pallet.primary};
  cursor: pointer;
  &:hover{
    background-color: ${(props) => props.theme.pallet.Lines};
  }
`;

export default function BorderdText(props) {
  return (
    <Borderd>
      {props.back && <IoIosArrowBack />}
      {props.Forward && <IoIosArrowForward />}
      {props.text}
    </Borderd>
  );
}
