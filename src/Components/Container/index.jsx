import React from "react";

import { ActionCont, ActionTitle } from "./style";

export default function Container(props) {
  return (
    <ActionCont>
      <ActionTitle>{props.title}</ActionTitle>
      <div>{props.children}</div>
    </ActionCont>
  );
}
