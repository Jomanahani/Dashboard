import React from "react";
import { Link, useLocation } from "react-router-dom";
import BorderdText from "../BorderdText";

import { ActionCont, ActionTitle } from "./style";

export default function Container(props) {
  const { pathname } = useLocation();
  const currnetPage = pathname === "/";

  return (
    <ActionCont>
      <div className="Flex">
        <ActionTitle>{props.title}</ActionTitle>
        {!currnetPage && (
          <Link to={props.path}>
            <BorderdText Forward text="الخطوة السابقة" />
          </Link>
        )}
      </div>
      <div>{props.children}</div>
    </ActionCont>
  );
}
