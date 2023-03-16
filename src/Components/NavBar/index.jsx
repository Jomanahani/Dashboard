import React from "react";
import { Navigation, NavItem, NavUl, ProfileIcon } from "./style";
import { TfiWorld } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";

export default function NavBar() {
  return (
    <Navigation>
      <NavUl>
        <NavItem>
          <ProfileIcon>
            <RxAvatar style={{ fontSize: "2rem", color: "#C7C7C7" }} />{" "}
            <HiBars3 />
          </ProfileIcon>
        </NavItem>
        <NavItem>
          <p>عربي </p>
          <TfiWorld style={{ fontSize: "1.5rem"}} />
        </NavItem>
        <NavItem className="guest">
          <p>الإنتقال إلى وضع الضيف</p>
        </NavItem>
      </NavUl>
    </Navigation>
  );
}
