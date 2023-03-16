import React from "react";

import { TbHome } from "react-icons/tb";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { BsChatSquareDots } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsPuzzle } from "react-icons/bs";
import { TbBadgeFilled } from "react-icons/tb";
import { RiRedPacketLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";

import { Aside, Square } from "./style";

export default function SideBar() {
  return (
    <Aside>
      <div>
        <Square></Square>
        <TbHome />
        <HiOutlineCalendarDays />
        <BsChatSquareDots />
        <RxAvatar />
        <BsPuzzle />
        <TbBadgeFilled />
        <RiRedPacketLine />
        <BiMessageSquareDetail />
        <FaRegImage />
      </div>
      <RiLogoutBoxLine style={{ marginBottom: "1rem" }} />
    </Aside>
  );
}
